import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  // Variables iniciales
  private productDetail?: Product;
  private shopingCart?: Product[];
  private totalValue: number = 0;
  private selectedBank?: any = null;

  // Variables de configuración
  private urlProducts: string = '';
  private urlDaviplata: string = '';
  private GRANT_TYPE: string = '';
  private CLIENT_ID: string = '';
  private CLIENT_SECRET: string = '';
  private SCOPE: string = '';
  private ACCOUNT_TWILIO: string = '';
  private tokenTwilio: string = '';

  // Variables de uso
  private tokenDaviplata: string = '';
  private otp: string = '';
  private idSession_Token: string = '';
  private notification_type: string = 'API_DAVIPLATA';
  private idComercio: string = '0010203040';
  private idTransaccion: number = 0;
  private idTerminal: string = 'ESB10934';

  // Variables de respuesta autorización
  private fechaTransaccion: string = '';
  private numAprobacion: string = '';
  private estado: string = '';
  private idTransaccionAutorizador: string = '';

  // Variables aleatorias para pruebas
  private cliente = {
    tipoDocumento: '',
    numeroIdentificacion: '',
    nombre: '',
    email: '',
  };
  private comercio = {
    idComercio: '',
    razonSocial: '',
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  setProductDetail(product: Product) {
    this.productDetail = product;
  }

  getProductDetail(): Product {
    return this.productDetail!;
  }

  setShopingCart(products: Product[]) {
    this.shopingCart = products;
  }

  getShopingCart(): Product[] {
    return this.shopingCart!;
  }

  setTotalValue(value: number) {
    this.totalValue = value;
  }

  getTotalValue(): number {
    return this.totalValue;
  }

  setSelectedBank(bank: any) {
    this.selectedBank = bank;
  }

  getSelectedBank(): any {
    return this.selectedBank;
  }

  setTokenDaviplata(token: string) {
    this.tokenDaviplata = token;
  }

  getTokenDaviplata(): string {
    return this.tokenDaviplata;
  }

  setOtp(otp: string) {
    this.otp = otp;
  }

  getOtp(): string {
    return this.otp;
  }

  setIdSession_Token(idSession_Token: string) {
    this.idSession_Token = idSession_Token;
  }

  getIdSession_Token(): string {
    return this.idSession_Token;
  }

  setNotification_type(notification_type: string) {
    this.notification_type = notification_type;
  }

  getNotification_type(): string {
    return this.notification_type;
  }

  setIdComercio(idComercio: string) {
    this.idComercio = idComercio;
  }

  getIdComercio(): string {
    return this.idComercio;
  }

  setIdTransaccion() {
    this.idTransaccion = Math.floor(Math.random() * 1000000);
  }

  getIdTransaccion(): number {
    this.setIdTransaccion();
    return this.idTransaccion;
  }

  setIdTerminal(idTerminal: string) {
    this.idTerminal = idTerminal;
  }

  getIdTerminal(): string {
    return this.idTerminal;
  }

  setFechaTransaccion(fechaTransaccion: string) {
    this.fechaTransaccion = fechaTransaccion;
  }

  getFechaTransaccion(): string {
    return this.fechaTransaccion;
  }

  setNumAprobacion(numAprobacion: string) {
    this.numAprobacion = numAprobacion;
  }

  getNumAprobacion(): string {
    return this.numAprobacion;
  }

  setEstado(estado: string) {
    this.estado = estado;
  }

  getEstado(): string {
    return this.estado;
  }

  setIdTransaccionAutorizador(idTransaccionAutorizador: string) {
    this.idTransaccionAutorizador = idTransaccionAutorizador;
  }

  getIdTransaccionAutorizador(): string {
    return this.idTransaccionAutorizador;
  }

  getClientePruebas() {
    return this.cliente;
  }

  getComercioPruebas() {
    return this.comercio;
  }

  getProducts(): Observable<Product[]> {
    let url = `${this.urlProducts}/products`;
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProduct(id: number): Observable<Product> {
    let url = `${this.urlProducts}/products/${id}`;
    return this.httpClient.get<Product>(url);
  }

  generateToken(): Observable<any> {
    let url = `${this.urlDaviplata}/generarToken`;
    let body = {
      grant_type: this.GRANT_TYPE,
      client_id: this.CLIENT_ID,
      client_secret: this.CLIENT_SECRET,
      scope: this.SCOPE,
    };
    return this.httpClient.post<any>(url, body);
  }

  intencionCompra(
    total: number,
    tipoDocumento: string,
    numeroIdentificacion: string
  ): Observable<any> {
    // token_prov, CLIENT_ID, "50", numeroIdentificacion, tipoDocumento
    let url = `${this.urlDaviplata}/intencionCompra`;
    let body = {
      token: this.getTokenDaviplata(),
      customer_key: this.CLIENT_ID,
      valor: total.toString(),
      tipoDocumento: tipoDocumento,
      numeroIdentificacion: numeroIdentificacion,
    };
    return this.httpClient.post<any>(url, body);
  }

  generarOTP(
    tipoDocumento: string,
    numeroIdentificacion: string
  ): Observable<any> {
    // CLIENT_ID, notification_type, numeroIdentificacion, tipoDocumento
    let url = `${this.urlDaviplata}/generarOTP`;
    let body = {
      customer_key: this.CLIENT_ID,
      notification_type: this.notification_type,
      tipoDocumento: tipoDocumento,
      numeroIdentificacion: numeroIdentificacion,
    };
    return this.httpClient.post<any>(url, body);
  }

  // sendSMS(
  //   fromTwilio: string,
  //   toTwilio: string,
  //   messageTwilio: string
  // ): Observable<any> {
  //   console.log(messageTwilio);
  //   let url = `${this.urlDaviplata}/sendSMS`;
  //   let body = {
  //     accountSid: this.ACCOUNT_TWILIO,
  //     authToken: this.tokenTwilio,
  //     from: fromTwilio,
  //     to: toTwilio,
  //     body: messageTwilio,
  //   };
  //   console.log('Data sendSMS', body);
  //   return this.httpClient.post<any>(url, body);
  // }

  autorizacionCompra(
    idComercio: string,
    idTransaccion: number,
    idTerminal: string
  ): Observable<any> {
    //token_prov, otp, idSession_Token, CLIENT_ID, idComercio, idTerminal, idTransaccion
    let url = `${this.urlDaviplata}/autorizacionCompra`;
    let body = {
      token: this.getTokenDaviplata(),
      otp: this.getOtp(),
      idSession_Token: this.getIdSession_Token(),
      customer_key: this.CLIENT_ID,
      idComercio: idComercio,
      idTerminal: idTerminal,
      idTransaccion: idTransaccion,
    };
    return this.httpClient.post<any>(url, body);
  }
}
