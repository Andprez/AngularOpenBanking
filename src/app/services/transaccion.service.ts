import { HttpClient } from '@angular/common/http';
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

  getTransactions(): Observable<Transaction[]> {
    let url = this.baseUrl + '/transaccion';
    return this.http.get<Transaction[]>(url);
  }

  getTransactionsByProduct(idProduct: number): Observable<Transaction[]> {
    let url = this.baseUrl + '/transaccion/product/' + idProduct;
    return this.http.get<Transaction[]>(url);
  }

  getTransactionsByClientId(idClient: number): Observable<Transaction[]> {
    let url = this.baseUrl + '/transaccion/client/' + idClient;
    return this.http.get<Transaction[]>(url);
  }

  getTypesTransactions(): Observable<TipoTransaccion[]>{
    let url = this.baseUrl + '/tipoTransaccion';
    return this.http.get<TipoTransaccion[]>(url);
  }

  createTransaccion(body: Transaction) {
    let url = this.baseUrl + '/transaccion';
    return this.http.post(url, body);
  }
}
