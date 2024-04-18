import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  mostrarSaldos: boolean = false;
  idProductSelected: number = 1
  routes = {
    back: '/login',
    help: '/help',
    addProduct: '/products/add/select-entity',
    myProducts: '/products',
    product: '/products/' + this.idProductSelected + '/transactions',
  }

  constructor(private router: Router) {}

  setMostrarSaldo() {
    this.mostrarSaldos = this.mostrarSaldos
      ? !this.mostrarSaldos
      : !this.mostrarSaldos;
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
