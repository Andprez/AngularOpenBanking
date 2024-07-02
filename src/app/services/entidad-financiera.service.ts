import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { EntidadFinanciera } from '../models/entidad-financiera';

@Injectable({
  providedIn: 'root',
})
export class EntidadFinancieraService {
  baseUrl: string = environment.URL_BACKEND;
  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return headers;
  }

  constructor(private httpClient: HttpClient) {}

  getEntitiesF(): Observable<EntidadFinanciera[]> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/entidadFinanciera`;
    return this.httpClient.get<EntidadFinanciera[]>(url, {
      headers: headers,
    });
  }
  getEntityFById(entityId: number): Observable<EntidadFinanciera> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/entidadFinanciera/${entityId}`;
    return this.httpClient.get<EntidadFinanciera>(url, {
      headers: headers,
    });
  }
}
