import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent {
  @Input() filterProduct: string = '';
  routes = {
    back: '/dashboard',
  }

  setFilterProduct(filter: string) {
    this.filterProduct = filter;
  }
}
