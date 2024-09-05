import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { EntidadFinanciera } from '../models/entidad-financiera';
import { catchError } from 'rxjs/operators';

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
  // getEntitiesFByName(entityName: String): Observable<EntidadFinanciera> {
  //   let headers = this.getHeaders();
  //   let url = `${this.baseUrl}/entidadFinanciera/find`;
  //   return this.httpClient.get<EntidadFinanciera>(url, {
  //     headers: headers,
  //   });
  // }

  getEntityByName(name: string): Observable<EntidadFinanciera> {
    return this.httpClient.post<EntidadFinanciera>(`${this.baseUrl}/entidadFinanciera/find`, { name }) // name se envía en el cuerpo
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrió un error:', error.error.message);
    } else {
      console.error(
        `Backend retornó el código ${error.status}, ` +
        `body fue: ${error.error}`);
    }
    return throwError('Algo malo sucedió; por favor, inténtalo de nuevo más tarde.');
  }
}
