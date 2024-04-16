import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent {
  products: Product[] = [];
  carrito: Product[] = [];

  constructor(private marketplaceService: MarketplaceService) {}

  ngOnInit(): void {
    localStorage.getItem('cart')
      ? (this.carrito = JSON.parse(localStorage.getItem('cart')!))
      : (this.carrito = []);

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
    localStorage.setItem('cart', JSON.stringify(this.carrito));
  }
}
