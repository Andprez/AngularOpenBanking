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

  registrarCliente(cliente: Cliente): Observable<Cliente> {
    let url = this.baseUrl + '/cliente';
    return this.httpClient.post<Cliente>(url, cliente);
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

  getTiposIdentificacion(): Observable<TipoIdentificacion[]> {
    let url = this.baseUrl + '/tipoIdentificacion';
    return this.httpClient.get<TipoIdentificacion[]>(url);
  }

  getBilletera(cliente: any): Observable<Cliente> {
    let url = this.baseUrl + '/cliente/find';
    return this.httpClient.post<Cliente>(url, cliente);
  }
}
