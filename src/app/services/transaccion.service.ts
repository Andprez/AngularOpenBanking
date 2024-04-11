import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  transferenciasArray: number[]=[1,2.3,4.5,5];
  baseUrl: string = environment.URL_BACKEND;
  constructor( private http: HttpClient) {

  }
  getTransaccion(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.baseUrl+'/transaccion');
  }

  createTransaccion(body: Transaction){
    return this.http.post(this.baseUrl+'/transaccion',body);
  }
}
