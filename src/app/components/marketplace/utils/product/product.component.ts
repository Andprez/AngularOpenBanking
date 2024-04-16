import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() agregar = new EventEmitter<Product>();
  agregado: boolean = false;

  ngOnInit(): void {
    if (this.product.quantity! > 0) {
      this.agregado = true;
    }
  }

  agregarAlCarrito() {
    this.agregar.emit(this.product);
    this.agregado = true;
  }
}
