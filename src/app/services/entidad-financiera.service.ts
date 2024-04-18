import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { EntidadFinanciera } from '../models/entidad-financiera';

@Injectable({
  providedIn: 'root',
})
export class EntidadFinancieraService {

  baseUrl: string = environment.URL_BACKEND;

  constructor(private httpClient: HttpClient) {}

  getEntidadesFinancieras(): Observable<EntidadFinanciera[]> {
    let url = `${this.baseUrl}/entidadFinanciera`;
    return this.httpClient.get<EntidadFinanciera[]>(url);
  }
}
