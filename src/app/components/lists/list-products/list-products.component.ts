import { Component, Input, OnInit } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { TipoProductoF } from 'src/app/models/tipo-producto-f';
import { EntidadFinancieraService } from 'src/app/services/entidad-financiera.service';
import { ProductosFService } from 'src/app/services/productos-f.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  @Input() mostrarSaldo!: boolean;
  @Input() clientId: number = 3;
  productsByClient: any[] = [];
  entitiesF: EntidadFinanciera[] = [];
  typesProducts: TipoProductoF[] = [];

  constructor(
    private productosFService: ProductosFService,
    private entidadFinancieraService: EntidadFinancieraService
  ) {}

  ngOnInit(): void {
    this.entidadFinancieraService.getEntidadesFinancieras().subscribe({
      next: (entities) => {
        this.entitiesF = entities;
      },
    });
    this.productosFService.getTipoProductos().subscribe({
      next: (types) => {
        this.typesProducts = types;
      },
      error: (error) => {
        console.error(error);
      }
    })
    this.productosFService.getProductosByClient(this.clientId).subscribe({
      next: (products) => {
        products.forEach((product) => {
          let entidadF = this.entitiesF.find(entity => entity.idEntidadFinanciera === product.idEntidadFinanciera)
          let tipoProducto = this.typesProducts.find(type => type.idTipo_Producto === product.idTipo_Producto)
          let montoProd = Math.floor(Math.random() * 10000000);
          let newProduct = { ...product, entidadF, tipoProducto, montoProd };
          this.productsByClient.push(newProduct);
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  products: any[] = [
    {
      img: '../../../../assets/entidadesF/daviplata.png',
      tipoProd: 'Tarjeta de Crédito',
      montoProd: 3209434,
    },
    {
      img: '../../../../assets/entidadesF/ban-bogota.png',
      tipoProd: 'Cuenta de Ahorros',
      montoProd: 3209434,
    },
    {
      img: '../../../../assets/entidadesF/bancolombia.png',
      tipoProd: 'Cuenta Corriente',
      montoProd: 3209434,
    },
    {
      img: '../../../../assets/entidadesF/nubank.png',
      tipoProd: 'Crédito de Vivienda',
      montoProd: 3209434,
    },
    {
      img: '../../../../assets/entidadesF/pibank.png',
      tipoProd: 'Crédito de Vehículo',
      montoProd: 3209434,
    },
  ];
}
