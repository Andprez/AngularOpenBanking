import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { RequestBanksService } from 'src/app/services/request-banks.service';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-credit-verify',
  templateUrl: './credit-verify.component.html',
  styleUrls: ['./credit-verify.component.css']
})
export class CreditVerifyComponent {
  datosCredito: any ={};
  resultDataCredito: any ={};
  processBancolombia: any ={};
  cliente!: Cliente;
  routes = {
    back: '/credit/request',
    help: '/help',
    approved: 'credit/approved',
    preapproved:'credit/preapproved',
    noapproved:'credit/reject'
  };

  constructor(
    private router: Router,
    private clienteServices: ClientesService,
    private bankServices: RequestBanksService
  ){}

  ngOnInit(): void{
    this.datosCredito = JSON.parse(localStorage.getItem("creditData")!);
    this.cliente = JSON.parse(localStorage.getItem("user")!);
    console.log("datos cliente: ", this.cliente);
  }
  goToPage(page: string): void {
    this.router.navigate([page]);
  }
  evaluateAppliCredit(): void{
    let creditScore = 0;
    let cupo = 0;
    let resultDocumentsCredit;
    //obtener nombre entidad financiera
    let nombreEntidadF = this.datosCredito.entidadF.nombre;
    let cuotaMensualCredt = this.datosCredito.cuotaMensual;
    this.clienteServices.getStatusDataCredito(this.cliente.numeroIdentificacion).subscribe({
      next:(dataCred)=>{
        this.resultDataCredito = dataCred;
        creditScore = this.resultDataCredito.result.data.experian_score;
        cupo = this.resultDataCredito.result.data.informes.informe.info_agregada.evolucion_deuda.trimestre[0].cupo_total;
        if(cupo > cuotaMensualCredt){
          console.log("cupo datacredito "+cupo+" > cuotaMensual "+cuotaMensualCredt);
          if(nombreEntidadF == "Bancolombia"){
            if(creditScore >= environment.BAN.CREDITO.SCORE_MIN_CRED){
              console.log("score datacredito "+creditScore+" > score_min_banco "+environment.BAN.CREDITO.SCORE_MIN_CRED);
              //llamado al servicio de bancolombia
              this.bankServices.ban_documentsCredit().subscribe({
                next:(bancolombia)=>{
                  resultDocumentsCredit = bancolombia; 
                  console.log("resultado docs bancolombia!!!!!!! ",resultDocumentsCredit);
                  //resultado documentación solicitud crédito 
                  if(resultDocumentsCredit==true){
                    this.goToPage(this.routes.approved);

                  }
                  else{
                    this.goToPage(this.routes.preapproved);
                  }
                },
                error:(e)=>{
                  console.log("Error al ingresar al servicio - documentos crédito bancolombia", e);
                }
              });
            }else{
              this.goToPage(this.routes.preapproved);
            }
          }
          if(nombreEntidadF == "Daviplata"){
            if(creditScore >= environment.DAV.CREDITO.SCORE_MIN_CRED){
              console.log("score datacredito "+creditScore+" > score_min_banco "+environment.BAN.CREDITO.SCORE_MIN_CRED);
              //llamado al servicio de daviplata
              this.bankServices.dav_documentsCredit().subscribe({
                next:(daviplata)=>{
                  resultDocumentsCredit = daviplata; 
                  console.log("resultado docs daviplata!!!!!!! ",resultDocumentsCredit);
                  //resultado documentación solicitud crédito 
                  if(resultDocumentsCredit==true){
                    this.goToPage(this.routes.approved);
                  }
                  else{
                    this.goToPage(this.routes.preapproved);
                  }
                },
                error:(e)=>{
                  console.log("Error al ingresar al servicio - documentos crédito Daviplata", e);
                }
              });
            }else{
              this.goToPage(this.routes.preapproved);
            }
          }
        }else{
          this.goToPage(this.routes.noapproved);
        }
      },
      error:(e)=>{
        console.log("Error al ingresar al servicio data credito", e);
      }
    });    
  }

}
