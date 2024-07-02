import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TwilioService {
  baseUrl: string = environment.URL_BACKEND;

  constructor(private httpClient: HttpClient) {}

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return headers;
  }

  sendSMS(phone: any, message: any) {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/sms';
    const body = {
      to: phone,
      message: message,
    };
    return this.httpClient.post(url, body, { headers: headers });
  }
}
