import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment.development';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  // Variables iniciales
  private productDetail?: Product;
  private shopingCart?: Product[];
  // private selectedBank?: any = null;
  private selectedBank?: any = {
    balance: 537692,
    img: '../../assets/LogoBancolombia.png',
    name: 'Bancolombia',
    product: 'Ahorro a la mano',
  };

  // Variables de configuración
  private urlProducts: string = 'https://fakestoreapi.com';
  private urlDaviplata: string = '';
  private urlBancolombia: string = '';
  private DAV_GRANT_TYPE: string = '';
  private DAV_CLIENT_ID: string = '';
  private DAV_CLIENT_SECRET: string = '';
  private DAV_SCOPE: string = '';
  private BAN_GRANT_TYPE: string = '';
  private BAN_CLIENT_ID: string = '';
  private BAN_CLIENT_SECRET: string = '';
  private BAN_SCOPE: string = '';
  private ACCOUNT_TWILIO: string = '';
  private tokenTwilio: string = '';

  // Variables de uso
  private tokenDaviplata: string = '';
  private tokenBancolombia: string = '';
  private otp: string = '';
  private idSession_Token: string = '';
  private notification_type: string = 'API_DAVIPLATA';
  private idComercio: string = '0010203040';
  private idTerminal: string = 'ESB10934';
  private totalValue: number = 0;

  // Variables de respuesta autorización
  private transaction?: Transaction;

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
  ) {
    this.urlProducts = environment.url.products;
    this.urlDaviplata = environment.url.daviplata;
    this.urlBancolombia = environment.url.bancolombia;
    this.DAV_GRANT_TYPE = environment.dav.GRANT_TYPE;
    this.DAV_CLIENT_ID = environment.dav.CLIENT_ID;
    this.DAV_CLIENT_SECRET = environment.dav.CLIENT_SECRET;
    this.DAV_SCOPE = environment.dav.SCOPE;
    this.BAN_GRANT_TYPE = environment.ban.GRANT_TYPE;
    this.BAN_CLIENT_ID = environment.ban.CLIENT_ID;
    this.BAN_CLIENT_SECRET = environment.ban.CLIENT_SECRET;
    this.BAN_SCOPE = environment.ban.SCOPE;
    this.ACCOUNT_TWILIO = environment.twilio.ACCOUNT;
    this.tokenTwilio = environment.twilio.TOKEN;
  }

  setClienteBilletera(cliente: any) {
    this.cliente.tipoDocumento = cliente.idTipoIdentificacion;
    this.cliente.numeroIdentificacion = cliente.numeroIdentificacion;
    this.cliente.nombre = cliente.primerNombre + ' ' + cliente.segundoNombre + ' ' + cliente.primerApellido + ' ' + cliente.segundoApellido;
    this.cliente.email = cliente.email;
  }

  getClienteBilletera(): Observable<any> {
    return new Observable((observer) => {
      observer.next(this.cliente);
      observer.complete();
    })
  }

  setTotalValue(total: number) {
    this.totalValue = total;
  }

  getTotalValue(): number {
    return this.totalValue;
  }

  setTransaccion(transaction: Transaction) {
    this.transaction = transaction;
  }

  getTransaccion(): Transaction {
    return this.transaction!;
  }

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

  setTokenBancolombia(token: string) {
    this.tokenBancolombia = token;
  }

  getTokenBancolombia(): string {
    return this.tokenBancolombia;
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

  setIdTerminal(idTerminal: string) {
    this.idTerminal = idTerminal;
  }

  getIdTerminal(): string {
    return this.idTerminal;
  }

  getClientePruebas() {
    return this.cliente;
  }

  getComercioPruebas() {
    return this.comercio;
  }

  getProducts(): Observable<Product[]> {
    let url = `${this.urlProducts}/products`;
    return this.httpClient.get<Product[]>(url);
  }

  getProduct(id: number): Observable<Product> {
    let url = `${this.urlProducts}/products/${id}`;
    return this.httpClient.get<Product>(url);
  }

  generateToken(): Observable<any> {
    let url = `${this.urlDaviplata}/generarToken`;
    let body = {
      grant_type: this.DAV_GRANT_TYPE,
      client_id: this.DAV_CLIENT_ID,
      client_secret: this.DAV_CLIENT_SECRET,
      scope: this.DAV_SCOPE,
    };
    return this.httpClient.post<any>(url, body);
  }

  intencionCompraDav(
    total: number,
    tipoDocumento: string,
    numeroIdentificacion: string
  ): Observable<any> {
    // token_prov, CLIENT_ID, "50", numeroIdentificacion, tipoDocumento
    let url = `${this.urlDaviplata}/intencionCompra`;
    let body = {
      token: this.getTokenDaviplata(),
      customer_key: this.DAV_CLIENT_ID,
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
      customer_key: this.DAV_CLIENT_ID,
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
      customer_key: this.DAV_CLIENT_ID,
      idComercio: idComercio,
      idTerminal: idTerminal,
      idTransaccion: idTransaccion,
    };
    return this.httpClient.post<any>(url, body);
  }

  generateTokenBancolombia(): Observable<any> {
    let url = `${this.urlBancolombia}/tokenBancolombia`;
    let body = {
      grant_type: this.BAN_GRANT_TYPE,
      client_id: this.BAN_CLIENT_ID,
      client_secret: this.BAN_CLIENT_SECRET,
      scope: this.BAN_SCOPE,
    };
    return this.httpClient.post<any>(url, body);
  }

  getTyCBancolombia(access_token: string): Observable<any> {
    let url = `${this.urlBancolombia}/tyc`;
    let body = {
      access_token: access_token
    }
    return this.httpClient.post<any>(url, body);
  }

  intencionCompraBan(totalValue: number): Observable<any>{
    let url = `${this.urlBancolombia}/intencionCompra`;
    let body = {
      valorCompra: this.totalValue,
    }
    let headers = {
      'access_token': this.getTokenBancolombia()
    }
    return this.httpClient.post<any>(url, body, {headers: headers});
  }

}
