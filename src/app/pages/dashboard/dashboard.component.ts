import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../templates/background3.css'],
})
export class DashboardComponent {
  mostrarSaldos: boolean = false;
  routes = {
    back: '/login',
    help: '/help',
    addProduct: '/products/add/select-entity',
    myProducts: '/products',
    product: '/products/transactions',
  }

  constructor(private router: Router) {}

  setMostrarSaldo() {
    this.mostrarSaldos = this.mostrarSaldos
      ? !this.mostrarSaldos
      : !this.mostrarSaldos;
  }

  setProductSelected(product: any) {
    localStorage.setItem('product', JSON.stringify(product));
    this.goToPage(this.routes.product);
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
