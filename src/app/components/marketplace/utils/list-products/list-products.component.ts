import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products: Product[] = []
  carrito: Product[] = []

  constructor(
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.generalService.getProducts().subscribe({
      next: data => {
        this.products = data
      }
    })
  }
  agregarAlCarrito(producto: Product) {
    this.carrito.push(producto);
    // this.obService.setShopingCart(this.carrito);
  }
}
