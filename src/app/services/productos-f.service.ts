import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { TipoProductoF } from '../models/tipo-producto-f';
import { ProductoF } from '../models/producto-f';

@Injectable({
  providedIn: 'root',
})
export class ProductosFService {
  baseUrl: string = environment.URL_BACKEND;

  constructor(private httpClient: HttpClient) {}

  createProductoF(product: ProductoF): Observable<ProductoF> {
    let url = `${this.baseUrl}/producto`;
    return this.httpClient.post<ProductoF>(url, product);
  }

  getTipoProductos(): Observable<TipoProductoF[]> {
    let url = `${this.baseUrl}/tipoProducto`;
    return this.httpClient.get<TipoProductoF[]>(url);
  }

  getProductosByClient(clientId: number): Observable<ProductoF[]> {
    let url = `${this.baseUrl}/producto/user/${clientId}`;
    return this.httpClient.get<ProductoF[]>(url);
  }
}
