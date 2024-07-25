import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { ProductoF } from 'src/app/models/producto-f';
import { TipoProductoF } from 'src/app/models/tipo-producto-f';
import { SubtipoProducto } from 'src/app/models/subtipoProducto';
import { Transaction } from 'src/app/models/transaction';
import { EntidadFinancieraService } from 'src/app/services/entidad-financiera.service';
import { ProductosFService } from 'src/app/services/productos-f.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  product: ProductoF = {} as ProductoF;
  typeProduct: TipoProductoF = {} as TipoProductoF;
  subtypeProduct: SubtipoProducto = {} as SubtipoProducto;
  entity: EntidadFinanciera = {} as EntidadFinanciera;

  routes = {
    back: '/products',
    voucher: '/transaction/voucher',
  };

  constructor(
    private entityFService: EntidadFinancieraService,
    private productFService: ProductosFService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.product = JSON.parse(localStorage.getItem('product') || '{}');
    localStorage.removeItem('transaction');
    this.productFService.getProductById(this.product.idProducto!).subscribe({
      next: (product) => {
        this.product = product;
        const reqSubTypeProducts = this.productFService.getSubTypeProductById(
          product.idSubtipo_Producto
        );
        const reqEntities = this.entityFService.getEntityFById(
          product.idEntidadFinanciera
        );

        forkJoin([reqSubTypeProducts, reqEntities]).subscribe({
          next: ([subtypes, entities]) => {
            this.subtypeProduct = subtypes;
            this.entity = entities;
          },
        });
      },
    });
  }

  setTransactionSelected(transaction: Transaction) {
    localStorage.setItem('transaction', JSON.stringify(transaction));
    this.goToPage(this.routes.voucher);
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
