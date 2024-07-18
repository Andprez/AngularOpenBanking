import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { TipoProductoF } from 'src/app/models/tipo-producto-f';
import { EntidadFinancieraService } from 'src/app/services/entidad-financiera.service';
import { ProductosFService } from 'src/app/services/productos-f.service';
import { Router } from '@angular/router';
import { SubtipoProducto } from 'src/app/models/subtipoProducto';

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
  productsBySubtype: any = {};
  entitiesF: EntidadFinanciera[] = [];
  // typesProducts: TipoProductoF[] = [];
  subtypesProducts: SubtipoProducto[] = [];

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
    this.productosFService.getSubTypesProduct().subscribe({
      next: (types) => {
        this.subtypesProducts = types;
      },
      error: (error) => {
        console.error(error);
      }
    })
    this.productosFService.getProductsByClient(this.clientId).subscribe({
      next: (products) => {
        products.forEach((product) => {
          let entidadF = this.entitiesF.find(entity => entity.idEntidadFinanciera === product.idEntidadFinanciera)
          // let tipoProducto = this.typesProducts.find(type => type.idTipo_Producto === product.idTipo_Producto)
          let subtipoProducto = this.subtypesProducts.find(type => type.idSubtipo_Producto === product.idSubtipo_Producto)
          let montoProd = Math.floor(Math.random() * 10000000);
          let newProduct = { ...product, entidadF, subtipoProducto, montoProd };
          this.productsBySubtype[subtipoProducto?.nombre!] = [...(this.productsBySubtype[subtipoProducto?.nombre!] || []), newProduct];
          this.productsByClient.push(newProduct);
          console.log(subtipoProducto)
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
