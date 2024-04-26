import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { ProductoF } from 'src/app/models/producto-f';
import { TipoProductoF } from 'src/app/models/tipo-producto-f';
import { ProductosFService } from 'src/app/services/productos-f.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css', '../../templates/background3.css'],
})
export class AddProductComponent implements OnInit {
  shopping: boolean = false;
  user!: Cliente;
  tiposProducto!: TipoProductoF[];
  selectedProduct?: TipoProductoF;
  savedProduct?: ProductoF;
  selectedEntity!: EntidadFinanciera;
  formProducto!: FormGroup;
  formValidation!: FormGroup;
  showAdditionalFields = false;
  showSuccessMessage = false;

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.selectedEntity = JSON.parse(localStorage.getItem('entity') || '{}');
    localStorage.getItem('marketplace')
      ? (this.shopping = true)
      : (this.shopping = false);
    this.productosFService.getTypesProduct().subscribe({
      next: (result) => {
        this.tiposProducto = result;
      },
      error: (error) => {
        console.error(error);
      },
    });
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
    this.selectedProduct = this.tiposProducto.find(
      (tp) => tp.idTipo_Producto == idProductSelected
    );
    this.showAdditionalFields = true;
  }
  onSubmitValidation(): void {
    let productF: ProductoF = {
      idTipo_Producto: this.selectedProduct?.idTipo_Producto!,
      idEntidadFinanciera: this.selectedEntity.idEntidadFinanciera!,
      numeroProducto: this.formValidation.value.numeroProducto,
      password: this.formValidation.value.password,
      idBilletera_CBITBank: this.user.idBilleteraCBITBank!,
      idEstado: 1,
      usuario: this.user.numeroIdentificacion,
    };
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
    localStorage.removeItem('product');
    this.shopping
      ? this.goToPage(this.routes.wallet)
      : this.goToPage(this.routes.transactions);
  }
  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
