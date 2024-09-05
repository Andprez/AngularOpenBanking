import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { OrdenCompra } from '../models/ordenCompra';

@Injectable({
  providedIn: 'root',
})
export class RequestBanksService {
  constructor(private httpClient: HttpClient) {}

  // VARIABLES
  private DAV = environment.DAV;
  private BAN = environment.BAN;
  private apiUrl = 'http://localhost:3000/api/ordenCompra';

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

  ban_evaluateCredit(cuota_mensual: string, num_identificacion: string): Observable<any>{
    let url = `${this.BAN.BASEURL}/evaluateCredit/${num_identificacion}`;
    let headers: HttpHeaders = new HttpHeaders({
      "x-api-key": environment.LLAVE_API_CENTRALES_R,
    });
    let body = {
      "cuotaMensual": cuota_mensual,
    };
    return this.httpClient.post<any>(url,body,{headers})
  }

  //#servicio de simulacion de tipocredito
  ban_simulateCredit( tipoCredito: string, montoCredito: string, plazoCredito: number,): Observable<any>{
    let url = `${this.BAN.BASEURL}/simulateCredit`;
    console.log("Url bancolombia simulate credit ", url);
    let headers: HttpHeaders = new HttpHeaders({
      "x-api-key": environment.LLAVE_API_CENTRALES_R,
    });
    let body = {
      "tipoCredito": tipoCredito,
      "montoCredito": montoCredito,
      "numeroCuotas": plazoCredito
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
  dav_evaluateCredit(cuota_mensual: string, num_identificacion: string): Observable<any>{
    let url = `${this.DAV.BASEURL}/evaluateCredit/${num_identificacion}`;
    let headers: HttpHeaders = new HttpHeaders({
      "x-api-key": environment.LLAVE_API_CENTRALES_R,
    });
    let body = {
      "cuotaMensual": cuota_mensual,
    };
    return this.httpClient.post<any>(url,body,{headers})
  }
  dav_credit_simulation(tipocredito: string, montoCredito: string, plazo:number): Observable<any>{
    let url = `${this.DAV.BASEURL}/creditSimulation`;
    console.log("url daviplata ", url)
    let headers: HttpHeaders = new HttpHeaders({
      "x-api-key": environment.LLAVE_API_CENTRALES_R,
    });
    let body = {
      "montoCredito": montoCredito,
      "plazo": plazo,
      "tipoCredito": tipocredito
    };
    return this.httpClient.post<any>(url,body,{headers})
  };
  // Obtener el consecutivo de idOrdenCompra
  async getConsecutiveOrder(): Promise<number> {
    try {
        const url = `${this.apiUrl}/consecutiveOrder`;
        const nextIdOrdenCompra = await this.httpClient.get<number>(url).toPromise();

        if (nextIdOrdenCompra === undefined) {
            // Si no se encontró una última orden, comenzamos desde 1
            return 1;
        }

        return nextIdOrdenCompra;
    } catch (error) {
        console.error("Error al obtener el consecutivo de la orden de compra:", error);
        throw new Error("Error del servidor");
    }
}
  createOrdenCompra(orden: OrdenCompra): Observable<any>{
    return this.httpClient.post<OrdenCompra>(this.apiUrl, orden);
  };
}

