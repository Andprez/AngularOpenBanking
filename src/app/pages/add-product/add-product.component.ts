import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { ProductoF } from 'src/app/models/producto-f';
import { TipoProductoF } from 'src/app/models/tipo-producto-f';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ProductosFService } from 'src/app/services/productos-f.service';
import { SubtipoProducto } from 'src/app/models/subtipoProducto';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css', '../../templates/background3.css'],
})
export class AddProductComponent implements OnInit {
  shopping: boolean = false;
  user!: Cliente;
  tiposProducto!: TipoProductoF[];
  subtipoProducto!: SubtipoProducto[];
  subtipoPXTipoP!: SubtipoProducto[];
  // selectedProduct?: TipoProductoF;
  selectedProduct?: SubtipoProducto;
  savedProduct?: ProductoF;
  selectedEntity!: EntidadFinanciera;
  formProducto!: FormGroup;
  formValidation!: FormGroup;
  showAdditionalFields = false;
  showSuccessMessage = false;
  isLoading = false;

  routes = {
    back: '/dashboard',
    help: '/help',
    transactions: '/products/transactions',
    wallet: '/wallet',
  };

  constructor(
    private fb: FormBuilder,
    private productosFService: ProductosFService,
    private router: Router,
    private notifService: NotificationsService
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
    //Servicio que trae los tipos de producto
    this.productosFService.getTypesProduct().subscribe({
      next: (result) => {
        this.tiposProducto = result;
      },
      error: (error) => {
        console.error(error);
      },
    });
    //Servicio que trae los subtipos de producto
    this.productosFService.getSubTypesProduct().subscribe({
      next: (result) => {
        this.subtipoProducto = result;
      },
      error: (error) => {
        console.error(error)
      },
    })
    
    this.formProducto = this.fb.group({
      subtipoProduct: ['', Validators.required],
    });
    this.formValidation = this.fb.group({
      numeroCuenta: [
        '',
        [Validators.pattern('^[0-9]+$'), Validators.required],
      ],
      password: ['', [Validators.minLength(8), Validators.required]],
    });
  }
  
  loadSubproducts($event: any): void {
    let idTipoP = $event.target.value;
    this.subtipoPXTipoP = this.subtipoProducto.filter(
      (subTipoP) => subTipoP.idTipo_Producto == idTipoP
    );
    console.log(this.subtipoPXTipoP);
  }

  onSubmitProduct(): void {
    // let idProductSelected = this.formProducto.value.product;
    let idProductSelected = this.formProducto.value.subtipoProduct;
    console.log("producto selecc: ",idProductSelected)
    // this.selectedProduct = this.tiposProducto.find(
      this.selectedProduct = this.subtipoProducto.find(
      // (tp) => tp.idTipo_Producto == idProductSelected
      (tp) => tp.idSubtipo_Producto == idProductSelected
    );
    this.showAdditionalFields = true;
  }
  onSubmitValidation(): void {
    let productF: ProductoF = {
      // idTipo_Producto: this.selectedProduct?.idTipo_Producto!,
      idSubtipo_Producto: this.selectedProduct?.idSubtipo_Producto!,
      idEntidadFinanciera: this.selectedEntity.idEntidadFinanciera!,
      numeroCuenta: this.formValidation.value.numeroCuenta,
      password: this.formValidation.value.password,
      idBilletera_CBITBank: this.user.idBilleteraCBITBank!,
      idEstado: 1,
      usuario: this.user.numeroIdentificacion,
    };
    console.log("producto financiero: ",productF)
    this.productosFService.createProductF(productF).subscribe({
      next: (result) => {
        this.savedProduct = result;
        localStorage.setItem('product', JSON.stringify(this.savedProduct));
        this.showSuccessMessage = true;
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
