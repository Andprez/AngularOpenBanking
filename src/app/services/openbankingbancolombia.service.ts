import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenbankingbancolombiaService {
  OpenbankingbancolombiaService: any;
  
   /**
    * 
    * @param http Cliente HTTP para conectar con el back
    */


   constructor(
    private http: HttpClient
  ) { }

  // Este servicio se encarga de realizar el llamado al endpoint de Bancolombia para obtener el token que se usa para consumir las demas apis
  obtenerToken() {
 
    // Define url de la solicitud
    const urlB = 'https://gw-sandbox-qa.apps.ambientesbc.com/public-partner/sb//security/oauth-provider/oauth2/token';
    // Define el cuerpo de la solicitud
    let bodyTest = new URLSearchParams();
    bodyTest.set("grant_type", "client_credentials")
    bodyTest.set("scope", "Transfer-Intention:read:app")
    // Define los headers de la solicitud
    const headersB = new HttpHeaders({
      authorization: 'Basic NTFkYWFlYWIxODM2M2FjZjUyNWU3NDkxMzBkOWE3YTU6Y2JiMmEzN2VhNWU3ODNkZTQxODM1YTgzMzYyZDU4OTc=',
      accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
   
    // se realiza el llamado al endpoint
 
    return this.http.post(urlB, bodyTest.toString(),
      { headers: headersB })
    .subscribe((response: any) => {
        console.log('El siguiente token funcionara por los siguientes 20 minutos:', response.access_token);
      },
      (error) => {
       console.error('Error al enviar datos a la API:', error);
      }
     );      
  }

}
