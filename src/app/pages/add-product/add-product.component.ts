import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css', '../../templates/background3.css']
})
export class AddProductComponent {
  products: string[] = ['Cuenta Ahorros Móvil', 'Crédito Móvil', 'Tarjeta de Crédito'];
  selectedProduct: string = '';

  formProducto!: FormGroup;
  formValidation!: FormGroup;
  showAdditionalFields = false;
  showSuccessMessage = false;

  constructor(private fb: FormBuilder) {
    this.formProducto = this.fb.group({
      product: ['', Validators.required]
    });
    this.formValidation = this.fb.group({
      numCuenta: ['', [Validators.pattern('^[0-9]+$'), Validators.required]],
      clave: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  onSubmitProduct(): void {
    console.log('Formulario producto:', this.formProducto.value);
    this.selectedProduct = this.formProducto.get('product')?.value;
    this.showAdditionalFields = true;

  }
  onSubmitValidation(): void {
    console.log('Formulario validación:', this.formValidation.value);
    this.showSuccessMessage = true;
  }
}
