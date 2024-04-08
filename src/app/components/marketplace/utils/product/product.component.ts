import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() agregar: EventEmitter<Product> = new EventEmitter();
  agregado: boolean = false;

  agregarAlCarrito() {
    this.agregar.emit(this.product);
    this.agregado = true;
  }
}
