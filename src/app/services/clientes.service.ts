import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { TipoIdentificacion } from '../models/tipo-identificacion';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl: string = environment.URL_BACKEND;

  constructor(
    private httpClient: HttpClient
  ) { }

  registrarCliente(cliente: Cliente): Observable<Cliente> {
    let url = this.baseUrl + '/cliente';
    return this.httpClient.post<Cliente>(url, cliente);
  }

  getTiposIdentificacion(): Observable<TipoIdentificacion[]> {
    let url = this.baseUrl + '/tipoIdentificacion';
    return this.httpClient.get<TipoIdentificacion[]>(url);
  }

  getBilletera(cliente: any): Observable<Cliente> {
    let url = this.baseUrl + '/cliente/find';
    return this.httpClient.post<Cliente>(url, cliente);
  }
}
