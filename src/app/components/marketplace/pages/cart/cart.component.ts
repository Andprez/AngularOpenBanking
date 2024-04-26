import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  carrito: any[] = [];
  total: number = 0;
  routes = {
    back: '/ecommerce',
    login: '/login',
  }

  constructor() {}

  ngOnInit(): void {
    localStorage.getItem('cart')
      ? (this.carrito = JSON.parse(localStorage.getItem('cart')!))
      : (this.carrito = []);
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
    localStorage.setItem('cart', JSON.stringify(this.carrito));
    localStorage.setItem('totalValue', this.total.toString());
  }
}
