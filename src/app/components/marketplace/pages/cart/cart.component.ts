import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  marketplace: any = {};
  carrito: any[] = [];
  total: number = 0;
  routes = {
    back: '/ecommerce',
    login: '/login',
  };

  constructor() {}

  ngOnInit(): void {
    this.marketplace = localStorage.getItem('marketplace')
      ? JSON.parse(localStorage.getItem('marketplace')!)
      : {};
    this.carrito = this.marketplace.cart || [];
    this.calcularTotal();
  }
  restarCantidad(producto: Product) {
    let productCard = this.carrito.find((p: Product) => p.id === producto.id);
    if (productCard.quantity > 0) productCard.quantity--;
    this.calcularTotal();
  }
  sumarCantidad(producto: Product) {
    let productCard = this.carrito.find((p: Product) => p.id === producto.id);
    productCard.quantity++;
    this.calcularTotal();
  }
  calcularTotal() {
    this.total = 0;
    this.carrito.forEach((p: any) => {
      if (p.quantity === 0) this.carrito.splice(this.carrito.indexOf(p), 1);
      this.total += p.price * p.quantity;
    });
    this.marketplace.cart = this.carrito;
    this.marketplace.total = this.total.toString();
    localStorage.setItem('marketplace', JSON.stringify(this.marketplace));
  }
}
