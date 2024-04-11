import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  carrito: any[] = []
  total: number = 0;

  constructor(
    private marketplaceService: MarketplaceService
  ) { }

  ngOnInit(): void {
    if (this.marketplaceService.getShopingCart().length > 0) {
      this.marketplaceService.getShopingCart().forEach((p: any) => {
        p.quantity = 1;
        this.carrito.push(p);
      });
      this.calcularTotal();
    }
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
  calcularTotal(){
    this.total = 0;
    this.carrito.forEach((p: any) => {
      this.total += p.price * p.quantity;
    })
    this.marketplaceService.setTotalValue(this.total);
  }
}
