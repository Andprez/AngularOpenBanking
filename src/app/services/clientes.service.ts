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

  constructor(private httpClient: HttpClient) {}

    // #region CLIENTES
  registrarCliente(cliente: any): Observable<any> {
    let url = this.baseUrl + '/cliente';
    console.log(cliente);
    return this.httpClient.post<any>(url, cliente);
  }

  eliminarCliente(clienteId: number): Observable<any> {
    let url = this.baseUrl + '/cliente/' + clienteId;
    return this.httpClient.delete<any>(url);
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
    return this.httpClient.post<any>(url, body);
  }

  // #region ANEXOS

  updateAnexo(
    anexoId: number,
    imageData: string,
    typeImage: string
  ): Observable<any> {
    let url = this.baseUrl + '/anexos/' + anexoId;
    let body: { [key: string]: string } = {};
    body[typeImage] = imageData;
    return this.httpClient.patch<any>(url, body);
  }

  // #region TIPOS DE IDENTIFICACION

  getTiposIdentificacion(): Observable<TipoIdentificacion[]> {
    let url = this.baseUrl + '/tipoIdentificacion';
    return this.httpClient.get<TipoIdentificacion[]>(url);
  }

  // #region BILLETERA

  getBilletera(cliente: any): Observable<Cliente> {
    let url = this.baseUrl + '/cliente/find';
    return this.httpClient.post<Cliente>(url, cliente);
  }

  createBilletera(billetera: any): Observable<any> {
    let url = this.baseUrl + '/billetera';
    return this.httpClient.post<any>(url, billetera);
  }
}
