import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-f',
  templateUrl: './product-f.component.html',
  styleUrls: ['./product-f.component.css'],
})
export class ProductFComponent {
  @Input() product!: any;
  @Input() mostrarSaldo!: boolean;
  @Output() onProductSelected = new EventEmitter<any>();

  setProductSelected(){
    this.onProductSelected.emit(this.product);
  }
}
