import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoProductoF } from '../models/tipo-producto-f';
import { environment } from 'src/environments/environment.development';
import { ProductoF } from '../models/producto-f';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl: string = environment.URL_BACKEND;

  constructor(private httpClient: HttpClient) { }

  getTypesProduct(): Observable<TipoProductoF[]> {
    let url = `${this.baseUrl}/tipoProducto`;
    return this.httpClient.get<TipoProductoF[]>(url);
  }

  getProductById(id: number): Observable<ProductoF> {
    let url = `${this.baseUrl}/producto/${id}`;
    return this.httpClient.get<ProductoF>(url);
  }
}
