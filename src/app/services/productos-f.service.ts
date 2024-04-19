import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { TipoProductoF } from '../models/tipo-producto-f';
import { ProductoF } from '../models/producto-f';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class ProductosFService {
  baseUrl: string = environment.URL_BACKEND;

  constructor(private httpClient: HttpClient) {}

  getTypesProduct(): Observable<TipoProductoF[]> {
    let url = `${this.baseUrl}/tipoProducto`;
    return this.httpClient.get<TipoProductoF[]>(url);
  }

  getTypeProductById(typeProductId: number): Observable<TipoProductoF> {
    let url = `${this.baseUrl}/tipoProducto/${typeProductId}`;
    return this.httpClient.get<TipoProductoF>(url);
  }

  createProductF(product: ProductoF): Observable<ProductoF> {
    let url = `${this.baseUrl}/producto`;
    return this.httpClient.post<ProductoF>(url, product);
  }

  getProductById(productId: number): Observable<ProductoF> {
    let url = `${this.baseUrl}/producto/${productId}`;
    return this.httpClient.get<ProductoF>(url);
  }

  getProductsByClient(clientId: number): Observable<ProductoF[]> {
    let url = `${this.baseUrl}/producto/user/${clientId}`;
    return this.httpClient.get<ProductoF[]>(url);
  }

  getTransactionsByProduct(productId: number): Observable<Transaction[]> {
    let url = `${this.baseUrl}/transaccion/product/${productId}`;
    return this.httpClient.get<Transaction[]>(url);
  }
}
