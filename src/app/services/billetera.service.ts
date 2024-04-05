import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BilleteraService {

  baseUrl: string = environment.URL_BACKEND;

  constructor(public httpClient: HttpClient) { }

  getBilletera(cliente: Cliente): Observable<Cliente> {
    let url = this.baseUrl + '/cliente/find';
    return this.httpClient.post<Cliente>(url, cliente);
  }
}
