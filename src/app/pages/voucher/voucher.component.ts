import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Estado } from 'src/app/models/estado';
import { ProductoF } from 'src/app/models/producto-f';
import { TipoProductoF } from 'src/app/models/tipo-producto-f';
import { Transaction } from 'src/app/models/transaction';
import { EstadosService } from 'src/app/services/estados.service';
import { ProductosFService } from 'src/app/services/productos-f.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css'],
})
export class VoucherComponent implements OnInit {
  @ViewChild('voucherContent') voucherContent: ElementRef | undefined;
  transaction: Transaction = {} as Transaction;
  user: Cliente = {} as Cliente;
  productF: ProductoF = {} as ProductoF;
  typeProduct: TipoProductoF = {} as TipoProductoF;
  status: Estado = {} as Estado;
  aprobado!: boolean;
  ID_ESTADO_APROBADO = 1;

  routes = {
    back: '/products/transactions',
    help: '/help',
  };

  constructor(
    private productFService: ProductosFService,
    private estadosService: EstadosService
  ) {}

  ngOnInit(): void {
    this.transaction = JSON.parse(localStorage.getItem('transaction') || '{}');
    this.user = JSON.parse(localStorage.getItem('user') || '{}');

    const reqProduct = this.productFService.getProductById(
      this.transaction.idProducto!
    );
    const reqTypeProduct = this.productFService.getTypesProduct();
    const reqStatus = this.estadosService.getEstadoById(
      this.transaction.idEstado!
    );

    forkJoin([reqProduct, reqTypeProduct, reqStatus]).subscribe({
      next: ([product, typesProduct, status]) => {
        this.productF = product;
        this.typeProduct = typesProduct.find(
          (tp) => tp.idTipo_Producto === product.idTipo_Producto
        )!;
        this.status = status;
        this.aprobado =
          status.idEstado === this.ID_ESTADO_APROBADO ? true : false;
      },
    });
  }

  descargarVoucher(): void {
    let imageData = '';
    html2canvas(this.voucherContent?.nativeElement).then((canvas) => {
      imageData = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = imageData;
      a.download = 'voucher.png';
      a.click();
    });
  }

  compartirVoucher(): void {
    let imageData = '';
    html2canvas(this.voucherContent?.nativeElement).then((canvas) => {
      imageData = canvas.toDataURL('image/png');
      const arch = fetch(imageData)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], 'voucher.png', { type: 'image/png' });
          const data = { title: 'Voucher', files: [file] };
          if (navigator.share) {
            navigator.share(data)
              .then(() => { console.log('Compartido con exito') })
              .catch((error) => { console.log('Error al compartir', error) });
          } else {
            console.log('No se puede compartir');
          }
        });
    });
  }
}
