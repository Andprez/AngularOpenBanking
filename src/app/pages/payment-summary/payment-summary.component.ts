import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { forkJoin } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Estado } from 'src/app/models/estado';
import { ProductoF } from 'src/app/models/producto-f';
import { TipoProductoF } from 'src/app/models/tipo-producto-f';
import { Transaction } from 'src/app/models/transaction';
import { ClientesService } from 'src/app/services/clientes.service';
import { EcommercesService } from 'src/app/services/ecommerces.service';
import { EstadosService } from 'src/app/services/estados.service';
import { LocalizacionService } from 'src/app/services/localizacion.service';
import { ProductosFService } from 'src/app/services/productos-f.service';

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
    back: '/products/transactions',
    help: '/help',
  };

  constructor(
    private clientesService: ClientesService,
    private ecommerceService: EcommercesService,
    private localizacionService: LocalizacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    const totalValue = localStorage.getItem('totalValue');
    this.summaryPayment.totalPagar = totalValue
      ? Number.parseInt(totalValue)
      : 0;
    const reqTypeDocument = this.clientesService.getTipoIdentificacion(
      this.user.idTipoIdentificacion
    );
    const reqComercios = this.ecommerceService.getEcommerces();
    forkJoin([reqTypeDocument, reqComercios]).subscribe({
      next: ([typeDocument, ecommerces]) => {
        this.summaryPayment.tipoDocumento = typeDocument.nombre;
        this.summaryPayment.numeroDocumento = this.user.numeroIdentificacion;
        const ecommerceId = Math.round(Math.random() * ecommerces.length);
        this.summaryPayment.comercio = ecommerces[ecommerceId].nombre!;
      },
    });

    this.localizacionService.getIPAddress().subscribe({
      next: (ip) => {
        this.summaryPayment.ip = ip;
      },
    });
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
