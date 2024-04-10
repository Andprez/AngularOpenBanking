import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

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
      telefono: ['', [Validators.pattern('[0-9]{10}'), Validators.required]],
      clave: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  ngOnInit(): void { }

  onSubmitProduct(): void {

    // Enviar datos al servidor (reemplazar con tu implementación real)
    console.log('Formulario producto:', this.formProducto.value);

    // Actualizar la propiedad selectedProduct
    this.selectedProduct = this.formProducto.get('product')?.value;
    this.showAdditionalFields = true; 
    // Limpiar el formulario (opcional)
    // this.form.reset();

  }
  onSubmitValidation(): void {
    console.log('Formulario producto:', this.formProducto.value);

    // Actualizar la propiedad selectedProduct
    this.selectedProduct = this.formProducto.get('product')?.value;
    this.showSuccessMessage = true;


    
    // Ocultar campos adicionales después del envío
  }
}

