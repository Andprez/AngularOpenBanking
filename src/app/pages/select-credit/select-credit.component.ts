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
  selector: 'app-select-credit',
  templateUrl: './select-credit.component.html',
  styleUrls: ['./select-credit.component.css']
})
export class SelectCreditComponent implements OnInit {
  shopping: boolean = false;
  user!: Cliente;
  subtiposProducto!: SubtipoProducto[];
  selectedSubtype?: SubtipoProducto;
  savedProduct?: ProductoF;
  selectedEntity!: EntidadFinanciera;
  formCredito!: FormGroup;
  formValidation!: FormGroup;
  showAdditionalFields = false;
  showSuccessMessage = false;
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
    //Servicio que trae los subtipos de producto
    this.productosFService.getSubTypesProduct().subscribe({
      next: (result) => {
        this.subtiposProducto = result;
      },
      error: (error) => {
        console.error(error);
      },
    });

    this.formCredito = this.fb.group({
      subtipoProduct: ['', Validators.required],
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
    let idProductSelected = this.formCredito.value.subtipoProduct;
    this.selectedSubtype = this.subtiposProducto.find(
      (tp) => tp.idTipo_Producto == idProductSelected
    );
    this.showAdditionalFields = true;
  }
  // onSubmitValidation(): void {
    // let productF: ProductoF = {
    //   idTipo_Producto: this.selectedProduct?.idTipo_Producto!,
    //   idEntidadFinanciera: this.selectedEntity.idEntidadFinanciera!,
    //   numeroProducto: this.formValidation.value.numeroProducto,
    //   password: this.formValidation.value.password,
    //   idBilletera_CBITBank: this.user.idBilleteraCBITBank!,
    //   idEstado: 1,
    //   usuario: this.user.numeroIdentificacion,
    // };
    
  //   this.productosFService.createProductF(productF).subscribe({
  //     next: (result) => {
  //       this.savedProduct = result;
  //       localStorage.setItem('product', JSON.stringify(this.savedProduct));
  //       this.showSuccessMessage = true;
  //     },
  //     error: (error) => {
  //       console.error(error);
  //     },
  //   });
  // }

  // continue(): void {

  //   goToPage(page: string): void {
  //    this.router.navigate([page]);
  //  }
}

