import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PreApprovedComponent } from 'src/app/components/modals/pre-approved/pre-approved.component';
import { IndicatorComponent } from 'src/app/components/utils/indicator/indicator.component';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { RequestBanksService } from 'src/app/services/request-banks.service';
import { environment } from 'src/environments/environment.development';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

interface CreditRequestResponse {
  message: string;
}

@Component({
  selector: 'app-credit-verify',
  templateUrl: './credit-verify.component.html',
  styleUrls: ['./credit-verify.component.css']
})
export class CreditVerifyComponent {
  datosCredito: any = {};
  resultDataCredito: any = {};
  processBancolombia: any = {};
  evaluateCredit: any = {};
  creditSelected: any={};
  cliente!: Cliente;
  routes = {
    back: '/credit/request',
    help: '/help',
    approved: 'credit/approved',
    preapproved: 'credit/preapproved',
    noapproved: 'credit/reject'
  };
  @ViewChild(IndicatorComponent) indicatorComponent!: IndicatorComponent;

  constructor(
    private router: Router,
    private clienteServices: ClientesService,
    private bankServices: RequestBanksService,
    private _matDialog: MatDialog,
    private http: HttpClient
  ){}

  openModal(): void {
    this._matDialog.open(PreApprovedComponent, {
      width: '302px',
      height: '295px',
    })
  }

  ngOnInit(): void {
    this.creditSelected = JSON.parse(localStorage.getItem("creditSelected")!);
    this.datosCredito = JSON.parse(localStorage.getItem("creditData")!);
    this.cliente = JSON.parse(localStorage.getItem("user")!);
    console.log("datos cliente: ", this.cliente);
  }

  // enviarDatos() {
  //   // Obtener los datos del local storage
  //   let cCredito = JSON.parse(localStorage.getItem('cCredito') || '{}');
  //   fetch('/api/submit-data', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(dataToSend)
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Success:', data);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);  

  //   });
  // }


  goToPage(page: string): void {
    this.router.navigate([page]);
    this.indicatorComponent.avanzar();
  }

//   cuota() {
//     // Obtener los datos del local storage
//     let datos = JSON.parse(localStorage.getItem('creditData') || '{}');

//     // Hacer la petición POST
//     this.http.post('http://localhost:3002/miRuta', cuota)
//       .subscribe(
//         (response) => {
//           console.log('Respuesta del servidor:', response);
//         },
//         (error) => {
//           console.error('Error al enviar datos:', error);
//         }
//       );
//   }

onSubmit() {
    let datosCredito = JSON.parse(localStorage.getItem('creditData') || '{}');

  fetch('http://localhost:4001/cuota', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosCredito)
  })
  .then(response => response.json())
  .then(datosCredito   => {
    console.log('Success:', datosCredito);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  }
  evaluateAppliCredit(): void{
    //obtener nombre entidad financiera
    let nombreEntidadF = this.datosCredito.entidadF.nombre;
    let numIdentificacion = this.cliente.numeroIdentificacion;
    let cuotaMensualCredt = this.datosCredito.cuotaMensual;
    console.log("nombre banco ",nombreEntidadF);
    if(nombreEntidadF == "Bancolombia"){
      this.bankServices.ban_evaluateCredit(cuotaMensualCredt, numIdentificacion).subscribe({
        next:(respuesta)=>{
          this.evaluateCredit = respuesta;
          console.log("respuesta services evaluateCredit ",this.evaluateCredit.codResponse);
          this.directPage(this.evaluateCredit.codResponse);
        },
        error:(e)=>{
          console.log("Error al llamar el servicio de evaluar credito: ", e);
        }
      });
    }
    if(nombreEntidadF == "Daviplata"){
      this.bankServices.dav_evaluateCredit(cuotaMensualCredt, numIdentificacion).subscribe({
        next:(respuesta)=>{
          this.evaluateCredit = respuesta;
          console.log("respuesta services evaluateCredit ",this.evaluateCredit.codResponse);
          this.directPage(this.evaluateCredit.codResponse);
        },
        error:(e)=>{
          console.log("Error al llamar el servicio de evaluar credito: ", e);
        }
      });
    }
  }
  directPage(codigoRespuesta: string): void {
    switch (codigoRespuesta) {
      case "R-01":
        this.goToPage(this.routes.approved);
        break;
      case "R-02":
        this.goToPage(this.routes.preapproved);
        break;
      case "R-03":
        this.goToPage(this.routes.noapproved);
        break;
      default:
        console.log("Código de respuesta no reconocido: ", codigoRespuesta);
        break;
    }
  }
}

    /*evaluateAppliCredit(): void {
      let creditScore = 0;
      let cupo = 0;
      let resultDocumentsCredit;
      //obtener nombre entidad financiera
      let nombreEntidadF = this.datosCredito.entidadF.nombre;
      let cuotaMensualCredt = this.datosCredito.cuotaMensual;
      this.clienteServices.getStatusDataCredito(this.cliente.numeroIdentificacion).subscribe({
        next: (dataCred) => {
          this.resultDataCredito = dataCred;
          creditScore = this.resultDataCredito.result.data.experian_score;
          cupo = this.resultDataCredito.result.data.informes.informe.info_agregada.evolucion_deuda.trimestre[0].cupo_total;
          if (cupo > cuotaMensualCredt) {
            console.log("cupo datacredito " + cupo + " > cuotaMensual " + cuotaMensualCredt);
            if (nombreEntidadF == "Bancolombia") {
              if (creditScore >= environment.BAN.CREDITO.SCORE_MIN_CRED) {
                console.log("score datacredito " + creditScore + " > score_min_banco " + environment.BAN.CREDITO.SCORE_MIN_CRED);
                //llamado al servicio de bancolombia
                this.bankServices.ban_documentsCredit().subscribe({
                  next: (bancolombia) => {
                    resultDocumentsCredit = bancolombia;
                    console.log("resultado docs bancolombia!!!!!!! ", resultDocumentsCredit);
                    //resultado documentación solicitud crédito
                    if (resultDocumentsCredit == true) {
                      this.goToPage(this.routes.approved);

                    }
                    else {
                      this.goToPage(this.routes.preapproved);
                    }
                  },
                  error: (e) => {
                    console.log("Error al ingresar al servicio - documentos crédito bancolombia", e);
                  }
                });
              } else {
                this.goToPage(this.routes.preapproved);
              }
            }
            if (nombreEntidadF == "Daviplata") {
              if (creditScore >= environment.DAV.CREDITO.SCORE_MIN_CRED) {
                console.log("score datacredito " + creditScore + " > score_min_banco " + environment.BAN.CREDITO.SCORE_MIN_CRED);
                //llamado al servicio de daviplata
                this.bankServices.dav_documentsCredit().subscribe({
                  next: (daviplata) => {
                    resultDocumentsCredit = daviplata;
                    console.log("resultado docs daviplata!!!!!!! ", resultDocumentsCredit);
                    //resultado documentación solicitud crédito
                    if (resultDocumentsCredit == true) {
                      this.goToPage(this.routes.approved);
                    }
                    else {
                      this.goToPage(this.routes.preapproved);
                    }
                  },
                  error: (e) => {
                    console.log("Error al ingresar al servicio - documentos crédito Daviplata", e);
                  }
                });
              } else {
                // Open pre-approved modal if documents are not valid
                this.openModal();
              }
            }
          } else {
            this.goToPage(this.routes.noapproved);
          }
        },
        error: (e) => {
          console.log("Error al ingresar al servicio data credito", e);
        }
      });
    }*/



