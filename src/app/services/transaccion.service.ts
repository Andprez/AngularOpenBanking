import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Transaction } from '../models/transaction';
import { TipoTransaccion } from '../models/tipo-transaccion';

@Injectable({
  providedIn: 'root',
})
export class TransaccionService {
  baseUrl: string = environment.URL_BACKEND;
  constructor(private http: HttpClient) {}

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return headers;
  }

  getTransactions(): Observable<Transaction[]> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/transaccion';
    return this.http.get<Transaction[]>(url, { headers: headers });
  }

  getTransactionsByProduct(idProduct: number): Observable<Transaction[]> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/transaccion/product/' + idProduct;
    return this.http.get<Transaction[]>(url, { headers: headers });
  }

  getTransactionsByClientId(idClient: number): Observable<Transaction[]> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/transaccion/client/' + idClient;
    return this.http.get<Transaction[]>(url, { headers: headers });
  }

  getTypesTransactions(): Observable<TipoTransaccion[]> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/tipoTransaccion';
    return this.http.get<TipoTransaccion[]>(url, { headers: headers });
  }

  createTransaccion(body: Transaction): Observable<any> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/transaccion';
    return this.http.post<any>(url, body, { headers: headers });
  }
}
