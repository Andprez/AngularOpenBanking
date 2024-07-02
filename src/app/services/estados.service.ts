import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return headers;
  }

  getEstados(): Observable<Estado[]> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/estado`;
    return this.httpClient.get<Estado[]>(url, { headers: headers });
  }

  getEstadoById(id: number): Observable<Estado> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/estado/${id}`;
    return this.httpClient.get<Estado>(url, { headers: headers });
  }
}
