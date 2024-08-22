import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RequestBanksService {
  constructor(private httpClient: HttpClient) {}

  // VARIABLES
  private DAV = environment.DAV;
  private BAN = environment.BAN;

  //#region Bancolombia

  ban_GetToken(): Observable<any> {
    let url = `${this.BAN.BASEURL}/auth/token`;
    let body = {
      grant_type: this.BAN.GRANT_TYPE,
      client_id: this.BAN.CLIENT_ID,
      client_secret: this.BAN.CLIENT_SECRET,
      scope: this.BAN.SCOPE,
    };
    return this.httpClient.post<any>(url, body);
  }

  ban_GetTermsConditions(access_token: string): Observable<any> {
    let url = `${this.BAN.BASEURL}/termsConditions`;
    console.log("URL:::: ",url)
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: access_token,
    });
    return this.httpClient.get<any>(url, { headers });
  }

  ban_transferIntention(
    access_token: string,
    transferAmount: string,
    transferDescription: string
  ): Observable<any> {
    let url = `${this.BAN.BASEURL}/transfer-intention`;
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: access_token,
    });
    let body = {
      transferAmount,
      commerceUrl: this.BAN.COMMERCE_URL,
      confirmationURL: this.BAN.CONFIRMATION_URL,
      transferDescription,
    };
    return this.httpClient.post<any>(url, body, { headers });
  }

  ban_documentsCredit(): Observable<any> {
    let url = `${this.BAN.BASEURL}/doc-validation`;
    return this.httpClient.get<any>(url);
  } 

  ban_evaluateCredit(monto_credito: string, cuota_mensual: string): Observable<any>{
    let url = `${this.BAN.BASEURL}/transfer-intention`;
    let headers: HttpHeaders = new HttpHeaders({
      "x-api-key": environment.LLAVE_API_CENTRALES_R,
    });
    let body = {
      monto_credito,
      cuota_mensual,
    };
    return this.httpClient.post<any>(url,body,{headers})
  }
  //#region Daviplata

  dav_getToken(): Observable<any> {
    let url = `${this.DAV.BASEURL}/auth/token`;
    let body = {
      grant_type: this.DAV.GRANT_TYPE,
      client_id: this.DAV.CLIENT_ID,
      client_secret: this.DAV.CLIENT_SECRET,
      scope: this.DAV.SCOPE,
    };
    return this.httpClient.post<any>(url, body);
  }

  dav_transferIntention(
    access_token: string,
    valorCompra: string,
    tipoDocumento: string,
    numDocumento: string
  ): Observable<any> {
    let url = `${this.DAV.BASEURL}/transfer-intention`;
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: access_token,
      customer_key: this.DAV.CLIENT_ID,
    });
    let body = {
      valor: valorCompra,
      numeroIdentificacion: this.DAV.USER_TEST.numeroDocumento,
      tipoDocumento: this.DAV.USER_TEST.tipoDocumento,
    };
    return this.httpClient.post<any>(url, body, { headers });
  }

  dav_generateOtp(
    typeDocument: string,
    numberDocument: string
  ): Observable<any> {
    let url = `${this.DAV.BASEURL}/generate-otp`;
    let headers: HttpHeaders = new HttpHeaders({
      customer_key: this.DAV.CLIENT_ID,
    });
    let body = {
      notificationType: this.DAV.NOTIFICATION_TYPE,
      typeDocument: this.DAV.USER_TEST.tipoDocumento,
      numberDocument: this.DAV.USER_TEST.numeroDocumento,
    };
    return this.httpClient.post<any>(url, body, { headers });
  }

  dav_transferConfirm(
    access_token: string,
    otp: string,
    idSession_Token: string
  ): Observable<any> {
    let url = `${this.DAV.BASEURL}/transfer-confirm`;
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: access_token,
      customer_key: this.DAV.CLIENT_ID,
    });
    let body = {
      otp,
      idSession_Token,
      idComercio: this.DAV.COMERCIO_ID,
      idTerminal: this.DAV.TERMINAL_ID,
    };
    return this.httpClient.post<any>(url, body, { headers });
  }

  dav_documentsCredit(): Observable<any> {
    let url = `${this.DAV.BASEURL}/doc-validation`;
    return this.httpClient.get<any>(url);
  } 
}
