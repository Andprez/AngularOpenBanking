import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { TipoIdentificacion } from '../models/tipo-identificacion';
import { environment } from 'src/environments/environment.development';
import {Tipo_Cliente } from '../models/tipo-cliente';
@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  baseUrl: string = environment.URL_BACKEND;
  urlDataCred: string = environment.URL_CENTRAL_R;

  constructor(private httpClient: HttpClient) {}

  getHeadersCentralR(): HttpHeaders {
    let header = new HttpHeaders({
      'Access-Control-Allow-Origin':'http://127.0.0.1:4002',
      'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE',
      'Access-Control-Allow-Headers': 'Content-type, x-auth-token, origin, Autorization',
      'x-api-key': 'ESTAESMIAPIKEY',
    });
    return header;
  }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return headers;
  }
  
  // #region CLIENTES
  getCliente(clienteId: number): Observable<Cliente> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/cliente/' + clienteId;
    return this.httpClient.get<Cliente>(url, { headers: headers });
  }

  getTiposCliente(): Observable<Tipo_Cliente[]> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/tipoCliente/';
    return this.httpClient.get<Tipo_Cliente[]>(url, { headers: headers });
  }

  registrarCliente(cliente: any): Observable<any> {
    let url = this.baseUrl + '/cliente';
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
    let headers = this.getHeaders();
    let url = this.baseUrl + '/anexos/' + anexoId;
    return this.httpClient.get<any>(url, { headers: headers });
  }

  createAnexo(
    clienteId: number,
    imageData: string,
    typeImage: string
  ): Observable<any> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/anexos';
    let body: { [key: string]: string } = {};
    body['idCliente'] = clienteId.toString();
    body[typeImage] = imageData;
    return this.httpClient.post<any>(url, body, { headers: headers });
  }

  updateAnexo(
    anexoId: number,
    imageData: string,
    typeImage: string
  ): Observable<any> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/anexos/' + anexoId;
    let body: { [key: string]: string } = {};
    body[typeImage] = imageData;
    return this.httpClient.patch<any>(url, body, { headers: headers });
  }

  // #region TIPOS DE IDENTIFICACION

  getTiposIdentificacion(): Observable<TipoIdentificacion[]> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/tipoIdentificacion';
    return this.httpClient.get<TipoIdentificacion[]>(url, {
      headers: headers,
    });
  }

  getTipoIdentificacion(
    tipoIdentificacionId: number
  ): Observable<TipoIdentificacion> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/tipoIdentificacion/' + tipoIdentificacionId;
    return this.httpClient.get<TipoIdentificacion>(url, {
      headers: headers,
    });
  }

  // #region BILLETERA

  getBilletera(cliente: any): Observable<Cliente> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/cliente/find';
    return this.httpClient.post<Cliente>(url, cliente, {
      headers: headers,
    });
  }

  createBilletera(billetera: any): Observable<any> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/billetera';
    return this.httpClient.post<any>(url, billetera, { headers: headers });
  }

  /**
   * Metodo que obtiene respuestas del servicio de data crédito muck
   * @param clienteId es el número de idenfiticacion de la persona 
   * @returns 
   */
  getStatusDataCredito(clienteId: string): Observable<any>{
    let headers = this.getHeadersCentralR();
    let url = this.urlDataCred+'/api/datacredito/'+clienteId;
    console.log("URL DATACREDITO #########", url)
    return this.httpClient.get<Cliente>(url, { headers: headers });
  }
}
