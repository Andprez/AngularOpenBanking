import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../models/estado';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EstadosService {
  constructor(private httpClient: HttpClient) {}

  baseUrl: string = environment.URL_BACKEND;
  headers: any = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  getEstados(): Observable<Estado[]> {
    let url = `${this.baseUrl}/estado`;
    return this.httpClient.get<Estado[]>(url, { headers: this.headers });
  }

  getEstadoById(id: number): Observable<Estado> {
    let url = `${this.baseUrl}/estado/${id}`;
    return this.httpClient.get<Estado>(url, { headers: this.headers });
  }
}
