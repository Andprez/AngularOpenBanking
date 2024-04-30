import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent {
  marketplace: any = {};
  products: Product[] = [];
  carrito: Product[] = [];
  routes = {
    cart: '/ecommerce/cart',
  };

  constructor(private marketplaceService: MarketplaceService) {}

  ngOnInit(): void {
    this.marketplace = localStorage.getItem('marketplace')
      ? JSON.parse(localStorage.getItem('marketplace')!)
      : {};
    this.carrito = this.marketplace.cart || [];

    this.marketplaceService.getProducts().subscribe({
      next: (data) => {
        this.carrito.forEach((c) => {
          let product = data.find((p) => p.id == c.id);
          if (product) {
            product.quantity = c.quantity;
          }
        });
        this.products = data;
      },
    });
  }
  agregarAlCarrito(producto: Product) {
    if (producto.quantity) return;
    this.carrito.push(producto);
    producto.quantity = 1;
    this.marketplace.cart = this.carrito;
    localStorage.setItem('marketplace', JSON.stringify(this.marketplace));
  }
}
