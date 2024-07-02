import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Ciudad } from '../models/ciudad';
import { environment } from 'src/environments/environment.development';
import { Departamento } from '../models/departamento';

@Injectable({
  providedIn: 'root',
})
export class LocalizacionService {
  baseUrl: string = environment.URL_BACKEND;
  baseUrl_getIP: string = environment.URL_IP;

  constructor(private httpClient: HttpClient) {}

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return headers;
  }

  getIPAddress() {
    return this.httpClient.get(this.baseUrl_getIP).pipe(
      map((response: any) => response.ip),
      catchError((error) => {
        console.error('Error al obtener la dirección IP:', error);
        return of('');
      })
    );
  }

  getCiudades(): Observable<Ciudad[]> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/ciudad';
    return this.httpClient.get<Ciudad[]>(url, { headers: headers });
  }

  getDepartamentos(): Observable<Departamento[]> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/departamento';
    return this.httpClient.get<Departamento[]>(url, { headers: headers });
  }
}
