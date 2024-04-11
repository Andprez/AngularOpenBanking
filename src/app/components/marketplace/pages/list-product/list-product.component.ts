import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  products: Product[] = []
  carrito: Product[] = []

  constructor(
    private marketplaceService: MarketplaceService
  ) { }

  ngOnInit(): void {
    this.marketplaceService.getProducts().subscribe({
      next: data => {
        this.products = data
      }
    })
  }
  agregarAlCarrito(producto: Product) {
    this.carrito.push(producto);
    this.marketplaceService.setShopingCart(this.carrito);
  }
}
