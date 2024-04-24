import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionService {

  baseUrl: string = environment.URL_BACKEND;
  headers: any = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getCiudades(): Observable<Ciudad[]> {
    let url = this.baseUrl + '/ciudad';
    return this.httpClient.get<Ciudad[]>(url, { headers: this.headers });
  }
}
