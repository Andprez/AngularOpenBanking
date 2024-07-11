import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { TipoProductoF } from 'src/app/models/tipo-producto-f';
import { EntidadFinancieraService } from 'src/app/services/entidad-financiera.service';
import { ProductosFService } from 'src/app/services/productos-f.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product-vertical',
  templateUrl: './list-product-vertical.component.html',
  styleUrls: ['./list-product-vertical.component.css'],
})
export class ListProductVerticalComponent {

  @Input() clientId!: number;
  @Input() txtFilterProduct: string = '';
  @Input() categorySelected: TipoProductoF = {} as TipoProductoF;
  @Output() onProductSelected = new EventEmitter<any>();
  productsByClient: any[] = [];
  productsByType: any = {};
  entitiesF: EntidadFinanciera[] = [];
  typesProducts: TipoProductoF[] = [];

  constructor(
    private productosFService: ProductosFService,
    private entidadFinancieraService: EntidadFinancieraService,
    private router:Router
  ) {}

  routes = {
    back: '/dashboard',
    help: '/help',
    transactions: '/products/transactions',
    requestProduct: '/products/add/select-entity',
  };
  ngOnInit(): void {
    this.entidadFinancieraService.getEntitiesF().subscribe({
      next: (entities) => {
        this.entitiesF = entities;
      },
    });
    this.productosFService.getTypesProduct().subscribe({
      next: (types) => {
        this.typesProducts = types;
      },
      error: (error) => {
        console.error(error);
      }
    })
    this.productosFService.getProductsByClient(this.clientId).subscribe({
      next: (products) => {
        products.forEach((product) => {
          let entidadF = this.entitiesF.find(entity => entity.idEntidadFinanciera === product.idEntidadFinanciera)
          let tipoProducto = this.typesProducts.find(type => type.idTipo_Producto === product.idTipo_Producto)
          let montoProd = Math.floor(Math.random() * 10000000);
          let newProduct = { ...product, entidadF, tipoProducto, montoProd };
          this.productsByType[tipoProducto?.nombreTipo!] = [...(this.productsByType[tipoProducto?.nombreTipo!] || []), newProduct];
          this.productsByClient.push(newProduct);
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  setProductSelected(product: any) {
    this.onProductSelected.emit(product);
  }
  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
