import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { ClientesService } from 'src/app/services/clientes.service';
import { EcommercesService } from 'src/app/services/ecommerces.service';
import { LocalizacionService } from 'src/app/services/localizacion.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { RequestBanksService } from 'src/app/services/request-banks.service';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.css'],
})
export class PaymentSummaryComponent {
  isLoading: boolean = false;
  user: Cliente = {} as Cliente;
  selectedBank: EntidadFinanciera = {} as EntidadFinanciera;
  processPayment: any = {};
  product: any = {};
  summaryPayment = {
    ip: '',
    tipoDocumento: '',
    numeroDocumento: '',
    observaciones: '',
    comercio: '',
    totalPagar: '',
  };

  routes = {
    back: '/tyc/banks',
    help: '/help',
    otp: '/otp/banks',
    voucher: '/transaction/voucher',
  };

  constructor(
    private clientesService: ClientesService,
    private banksService: RequestBanksService,
    private router: Router,
    private notifService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.notifService.loadingEvent.subscribe((event) => {
      this.isLoading = event;
    })
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    let marketplace = JSON.parse(localStorage.getItem('marketplace') || '{}');
    this.clientesService
      .getTipoIdentificacion(this.user.idTipoIdentificacion)
      .subscribe({
        next: (typeDocument) => {
          this.summaryPayment.ip = marketplace.ipUser;
          this.summaryPayment.tipoDocumento = typeDocument.nombre;
          this.summaryPayment.numeroDocumento = this.user.numeroIdentificacion;
          this.summaryPayment.observaciones = marketplace.motivo;
          this.summaryPayment.comercio = marketplace.destinoPago.nombre;
          this.summaryPayment.totalPagar = marketplace ? marketplace.total : 0;
        },
      });
  }

  redirect() {
    this.product = JSON.parse(localStorage.getItem('productSelected') || '{}');
    this.processPayment = JSON.parse(
      localStorage.getItem('processPayment') || '{}'
    );
    this.selectedBank = this.product.entidadF;
    switch (this.selectedBank.nombre) {
      case 'Bancolombia':
        this.processBancolombia();
        break;
      case 'Daviplata':
        this.processDaviplata();
        break;
    }
  }

  processBancolombia() {
    if (this.processPayment.redirectURL) {
      window.open(this.processPayment.redirectURL, '_blank');
    } else {
      this.banksService
        .ban_transferIntention(
          this.processPayment.access_token,
          this.summaryPayment.totalPagar,
          this.summaryPayment.observaciones
        )
        .subscribe({
          next: (res) => {
            let transferCode = res.data[0].transferCode;
            let redirectURL = res.data[0].redirectURL;
            this.processPayment = {
              ...this.processPayment,
              transferCode,
              redirectURL,
            };
            localStorage.setItem(
              'processPayment',
              JSON.stringify(this.processPayment)
            );
            window.open(redirectURL, '_blank');
            // TODO: Servicio no disponible, pendiente validar respuesta y callback
          },
        });
    }
  }

  processDaviplata() {
    this.banksService.dav_getToken().subscribe({
      next: (res) => {
        let access_token = res.access_token;
        this.processPayment = { ...this.processPayment, access_token };
        localStorage.setItem(
          'processPayment',
          JSON.stringify(this.processPayment)
        );
        this.banksService
          .dav_transferIntention(
            access_token,
            this.summaryPayment.totalPagar,
            this.summaryPayment.tipoDocumento,
            this.summaryPayment.numeroDocumento
          )
          .subscribe({
            next: (res) => {
              let idSessionToken = res.idSessionToken;
              this.processPayment = { ...this.processPayment, idSessionToken };
              localStorage.setItem(
                'processPayment',
                JSON.stringify(this.processPayment)
              );
              if (idSessionToken) {
                this.goToPage(this.routes.otp);
              }
            },
          });
      },
    });
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
