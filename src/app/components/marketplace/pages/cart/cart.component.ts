import { Component } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  carrito: any[] = []
  total: number = 0;

  constructor(
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    if (this.generalService.getShopingCart().length > 0) {
      this.generalService.getShopingCart().forEach((p: any) => {
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
    this.generalService.setTotalValue(this.total);
  }
}
