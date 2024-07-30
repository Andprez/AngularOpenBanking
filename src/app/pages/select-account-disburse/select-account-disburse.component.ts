import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { ProductoF } from 'src/app/models/producto-f';
import { SubtipoProducto } from 'src/app/models/subtipoProducto';
import { TipoProductoF } from 'src/app/models/tipo-producto-f';
import { EntidadFinancieraService } from 'src/app/services/entidad-financiera.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ProductosFService } from 'src/app/services/productos-f.service';


@Component({
  selector: 'app-select-account-disburse',
  templateUrl: './select-account-disburse.component.html',
  styleUrls: ['./select-account-disburse.component.css']
})
export class SelectAccountDisburseComponent implements OnInit {
  shopping: boolean = false;
  user!: Cliente;
  subTiposProducto!: SubtipoProducto[];
  productosUser: any[] = [];
  entidadesF: EntidadFinanciera[] = [];
  subtipoProducto: any[] = [];
  selectedProduct?: SubtipoProducto;
  savedProduct?: ProductoF;
  selectedEntity!: EntidadFinanciera;
  formProducto!: FormGroup;
  formValidation!: FormGroup;
  isLoading = false;

  routes = {
    back: '/products/add/select-entity',
    help: '/help',
    transactions: '/products/transactions',
    dashboard: '/dashboard',
    wallet: '/wallet',
  };

  constructor(
    private fb: FormBuilder,
    private productosFService: ProductosFService,
    private router: Router,
    private notifService: NotificationsService,
    private entidadesFService: EntidadFinancieraService
  ) {}

  ngOnInit(): void {
    this.notifService.loadingEvent.subscribe((event) => {
      this.isLoading = event;
    })
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.selectedEntity = JSON.parse(localStorage.getItem('entity') || '{}');
    localStorage.getItem('marketplace')
      ? (this.shopping = true)
      : (this.shopping = false);
    this.productosFService.getSubTypesProduct().subscribe({
      next: (result) => {
        this.subTiposProducto = result;
      },
      error: (error) => {
        console.error(error);
      },
    });
    this.entidadesFService.getEntitiesF().subscribe({
      next: (entidades) => {
        this.entidadesF = entidades;
      }
    })

    let idCliente: number = this.user.idCliente!;
    //let idCliente = 15
    this.productosFService.getProductsByClient(idCliente).subscribe({
      next: (products : any[]) => {
        products.forEach((producto) => {
          // Filtrar productos que sean Cuenta de ahorros o Corriente (Subtipos 19 - 20)
          if(producto.idSubtipo_Producto == 19 || producto.idSubtipo_Producto == 20){
            // Encontrar la entidad financiera del producto
            let entidad = this.entidadesF.find(
              entidad => entidad.idEntidadFinanciera == producto.idEntidadFinanciera)
              // Traer el nombre de la entidad y guardarlo en una nueva llave en producto
            producto["nombreEntidadF"] = entidad?.nombre
              // Asignar el nombre del subtipo en una nueva llave en producto
            producto["nombreSubtipo"] = producto.idSubtipo_Producto == 19 ? "Ahorros" : "Corriente"
            // Agregar el producto actual en el arreglo de productos del usuario
            this.productosUser.push(producto)
          }
        })
      }
    })
    this.formProducto = this.fb.group({
      product: ['', Validators.required],
    });
    this.formValidation = this.fb.group({
      numeroProducto: [
        '',
        [Validators.pattern('^[0-9]+$'), Validators.required],
      ],
      password: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  onSubmitProduct(): void {
    let idProductSelected = this.formProducto.value.product;
    this.selectedProduct = this.subTiposProducto.find(
      (tp) => tp.idTipo_Producto == idProductSelected
    );
    //this.clientHasAccounts = true;
  }
  onSubmitValidation(): void {
    let productF: ProductoF = {
      idSubtipo_Producto: this.selectedProduct?.idSubtipo_Producto!,
      idEntidadFinanciera: this.selectedEntity.idEntidadFinanciera!,
      numeroCuenta: this.formValidation.value.numeroCuenta,
      password: this.formValidation.value.password,
      idBilletera_CBITBank: this.user.idBilleteraCBITBank!,
      idEstado: 1,
      usuario: this.user.numeroIdentificacion,
    };
    this.productosFService.createProductF(productF).subscribe({
      next: (result) => {
        this.savedProduct = result;
        localStorage.setItem('product', JSON.stringify(this.savedProduct));
        //this.showSuccessMessage = true;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  continue(): void {
    localStorage.removeItem('entity');
    this.shopping
      ? this.goToPage(this.routes.wallet)
      : this.goToPage(this.routes.transactions);
  }
  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}





