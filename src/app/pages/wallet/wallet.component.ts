import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css', '../../templates/background3.css'],
})
export class WalletComponent implements OnInit {
  productSelected: any = {};
  user: any = {};

  routes = {
    back: '/',
    help: '/help',
    addProduct: '/products/add/data-product',
  };

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  constructor() {}

  setProductSelected(product: any) {
    this.productSelected = product;
    console.log(this.productSelected);
  }
}
