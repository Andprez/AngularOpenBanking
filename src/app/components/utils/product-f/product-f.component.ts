import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-f',
  templateUrl: './product-f.component.html',
  styleUrls: ['./product-f.component.css'],
})
export class ProductFComponent {
  @Input() img!: string;
  @Input() tipoProd!: string;
  @Input() montoProd!: number;
  @Input() mostrarSaldo!: boolean;
}
