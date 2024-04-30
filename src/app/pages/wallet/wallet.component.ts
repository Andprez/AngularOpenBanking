import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css', '../../templates/background3.css'],
})
export class WalletComponent implements OnInit {
  productSelected: any = {};
  user: any = {};

  routes = {
    back: '/ecommerce/cart',
    help: '/help',
    addProduct: '/products/add/select-entity',
  };

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    localStorage.removeItem('processPayment');
    localStorage.removeItem('productSelected');
  }

  constructor(private router: Router) {}

  setProductSelected(product: any) {
    this.productSelected = product;
    if (
      this.productSelected.entidadF.nombre == 'Bancolombia' ||
      this.productSelected.entidadF.nombre == 'Daviplata'
    ) {
      localStorage.setItem(
        'productSelected',
        JSON.stringify(this.productSelected)
      );
      this.router.navigate(['/tyc/banks']);
    }
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
