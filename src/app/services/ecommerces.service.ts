import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Ecommerce } from '../models/ecommerce';

@Injectable({
  providedIn: 'root',
})
export class EcommercesService {
  baseUrl: string = environment.URL_BACKEND;
  constructor(private httpClient: HttpClient) {}

  getEcommerces(): Observable<Ecommerce[]> {
    let url = this.baseUrl + '/ecommerce';
    return this.httpClient.get<Ecommerce[]>(url);
  }
}
