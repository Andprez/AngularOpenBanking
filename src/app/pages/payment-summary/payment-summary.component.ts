import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { EcommercesService } from 'src/app/services/ecommerces.service';
import { LocalizacionService } from 'src/app/services/localizacion.service';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.css'],
})
export class PaymentSummaryComponent {
  user: Cliente = {} as Cliente;
  summaryPayment = {
    ip: '',
    tipoDocumento: '',
    numeroDocumento: '',
    observaciones: '',
    comercio: '',
    totalPagar: 0,
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

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
