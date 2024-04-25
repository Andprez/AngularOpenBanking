import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { TipoIdentificacion } from '../models/tipo-identificacion';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  baseUrl: string = environment.URL_BACKEND;
  headers: any = {};

  constructor(private httpClient: HttpClient) {
    this.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  }

  // #region CLIENTES
  getCliente(clienteId: number): Observable<Cliente> {
    let url = this.baseUrl + '/cliente/' + clienteId;
    return this.httpClient.get<Cliente>(url, { headers: this.headers });
  }

  registrarCliente(cliente: any): Observable<any> {
    let url = this.baseUrl + '/cliente';
    console.log(cliente);
    return this.httpClient.post<any>(url, cliente);
  }

  loginCliente(body: any): Observable<any> {
    let url = this.baseUrl + '/auth';
    return this.httpClient.post<any>(url, body);
  }

  eliminarCliente(clienteId: number): Observable<any> {
    let url = this.baseUrl + '/cliente/' + clienteId;
    return this.httpClient.delete<any>(url);
  }

  // #region ANEXOS

  getAnexo(anexoId: number): Observable<any> {
    let url = this.baseUrl + '/anexos/' + anexoId;
    return this.httpClient.get<any>(url, { headers: this.headers });
  }

  createAnexo(
    clienteId: number,
    imageData: string,
    typeImage: string
  ): Observable<any> {
    let url = this.baseUrl + '/anexos';
    let body: { [key: string]: string } = {};
    body['idCliente'] = clienteId.toString();
    body[typeImage] = imageData;
    return this.httpClient.post<any>(url, body, { headers: this.headers });
  }

  updateAnexo(
    anexoId: number,
    imageData: string,
    typeImage: string
  ): Observable<any> {
    let url = this.baseUrl + '/anexos/' + anexoId;
    let body: { [key: string]: string } = {};
    body[typeImage] = imageData;
    return this.httpClient.patch<any>(url, body, { headers: this.headers });
  }

  // #region TIPOS DE IDENTIFICACION

  getTiposIdentificacion(): Observable<TipoIdentificacion[]> {
    let url = this.baseUrl + '/tipoIdentificacion';
    return this.httpClient.get<TipoIdentificacion[]>(url, {
      headers: this.headers,
    });
  }

  getTipoIdentificacion(
    tipoIdentificacionId: number
  ): Observable<TipoIdentificacion> {
    let url = this.baseUrl + '/tipoIdentificacion/' + tipoIdentificacionId;
    return this.httpClient.get<TipoIdentificacion>(url, {
      headers: this.headers,
    });
  }

  // #region BILLETERA

  getBilletera(cliente: any): Observable<Cliente> {
    let url = this.baseUrl + '/cliente/find';
    return this.httpClient.post<Cliente>(url, cliente, {
      headers: this.headers,
    });
  }

  createBilletera(billetera: any): Observable<any> {
    let url = this.baseUrl + '/billetera';
    return this.httpClient.post<any>(url, billetera, { headers: this.headers });
  }
}
