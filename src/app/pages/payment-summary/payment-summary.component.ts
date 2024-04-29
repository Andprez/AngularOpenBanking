import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { ClientesService } from 'src/app/services/clientes.service';
import { EcommercesService } from 'src/app/services/ecommerces.service';
import { LocalizacionService } from 'src/app/services/localizacion.service';
import { RequestBanksService } from 'src/app/services/request-banks.service';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.css'],
})
export class PaymentSummaryComponent {
  user: Cliente = {} as Cliente;
  selectedBank: EntidadFinanciera = {} as EntidadFinanciera;
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
    private ecommerceService: EcommercesService,
    private localizacionService: LocalizacionService,
    private banksService: RequestBanksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    let marketplace = localStorage.getItem('marketplace')
      ? JSON.parse(localStorage.getItem('marketplace') || '{}')
      : null;
    const reqTypeDocument = this.clientesService.getTipoIdentificacion(
      this.user.idTipoIdentificacion
    );
    const reqComercios = this.ecommerceService.getEcommerces();
    const reqIp = this.localizacionService.getIPAddress();
    forkJoin([reqTypeDocument, reqComercios, reqIp]).subscribe({
      next: ([typeDocument, ecommerces, ip]) => {
        const ecommerceId = Math.round(Math.random() * ecommerces.length);

        this.summaryPayment.ip = ip;
        this.summaryPayment.tipoDocumento = typeDocument.nombre;
        this.summaryPayment.numeroDocumento = this.user.numeroIdentificacion;
        this.summaryPayment.observaciones = 'Pago de productos';
        this.summaryPayment.comercio = ecommerces[ecommerceId].nombre!;
        this.summaryPayment.totalPagar = marketplace ? marketplace.total : 0;
      },
    });
  }

  processPayment() {
    let product = JSON.parse(localStorage.getItem('productSelected') || '{}');
    let processPayment = JSON.parse(
      localStorage.getItem('processPayment') || '{}'
    );
    this.selectedBank = product.entidadF;
    switch (this.selectedBank.nombre) {
      case 'Bancolombia':
        if (processPayment.redirectURL) {
          window.open(processPayment.redirectURL, '_blank');
        } else {
          this.banksService
            .ban_transferIntention(
              processPayment.access_token,
              this.summaryPayment.totalPagar,
              this.summaryPayment.observaciones
            )
            .subscribe({
              next: (res) => {
                let transferCode = res.data[0].transferCode;
                let redirectURL = res.data[0].redirectURL;
                processPayment = {
                  ...processPayment,
                  transferCode,
                  redirectURL,
                };
                localStorage.setItem(
                  'processPayment',
                  JSON.stringify(processPayment)
                );
                window.open(redirectURL, '_blank');
                // TODO: Servicio no disponible, pendiente validar respuesta y callback
              },
            });
        }
        break;
      case 'Daviplata':
        this.banksService.dav_getToken().subscribe({
          next: (res) => {
            let access_token = res.access_token;
            processPayment = { ...processPayment, access_token };
            localStorage.setItem(
              'processPayment',
              JSON.stringify(processPayment)
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
                  processPayment = { ...processPayment, idSessionToken };
                  localStorage.setItem(
                    'processPayment',
                    JSON.stringify(processPayment)
                  );
                  if (idSessionToken) {
                    this.goToPage(this.routes.otp);
                  }
                },
              });
          },
        });
        break;
    }
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
