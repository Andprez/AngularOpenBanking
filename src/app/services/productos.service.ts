import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoProductoF } from '../models/tipo-producto-f';
import { environment } from 'src/environments/environment.development';
import { ProductoF } from '../models/producto-f';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  baseUrl: string = environment.URL_BACKEND;
  constructor(private httpClient: HttpClient) {}

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return headers;
  }

  getTypesProduct(): Observable<TipoProductoF[]> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/tipoProducto`;
    return this.httpClient.get<TipoProductoF[]>(url, { headers: headers });
  }

  getProductById(id: number): Observable<ProductoF> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/producto/${id}`;
    return this.httpClient.get<ProductoF>(url, { headers: headers });
  }
}
