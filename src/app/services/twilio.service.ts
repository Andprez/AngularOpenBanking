import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TwilioService {
  baseUrl: string = environment.URL_BACKEND;
  headers: any = {};

  constructor(private httpClient: HttpClient) {
    this.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  }

  sendSMS(phone: any, message: any) {
    let url = this.baseUrl + '/sms';
    const body = {
      to: phone,
      message: message,
    };
    return this.httpClient.post(url, body, { headers: this.headers });
  }
}
