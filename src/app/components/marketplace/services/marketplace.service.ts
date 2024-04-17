import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  // Variables de entorno
  private urlProducts: string = environment.URL_FAKEAPI;

  // Variables
  private shopingCart?: Product[];
  private totalValue: number = 0;

  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    let url = `${this.urlProducts}/products`;
    return this.httpClient.get<Product[]>(url);
  }

  getProduct(id: number): Observable<Product> {
    let url = `${this.urlProducts}/products/${id}`;
    return this.httpClient.get<Product>(url);
  }

  setShopingCart(products: Product[]) {
    this.shopingCart = products;
  }

  getShopingCart(): Product[] {
    return this.shopingCart!;
  }

  setTotalValue(value: number) {
    this.totalValue = value;
  }

  getTotalValue(): number {
    return this.totalValue;
  }
}
