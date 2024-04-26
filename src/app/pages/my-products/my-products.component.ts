import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css'],
})
export class MyProductsComponent implements OnInit {
  filterProduct: string = '';
  user: Cliente = {} as Cliente;
  routes = {
    back: '/dashboard',
    help: '/help',
    transactions: '/products/transactions',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    localStorage.removeItem('product');
  }

  setFilterProduct(filter: string) {
    this.filterProduct = filter;
  }

  setProductSelected(product: any) {
    localStorage.setItem('product', JSON.stringify(product));
    this.goToPage(this.routes.transactions);
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
