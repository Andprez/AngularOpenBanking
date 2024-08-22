import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { RequestBanksService } from 'src/app/services/request-banks.service';

@Component({
  selector: 'app-credit-verify',
  templateUrl: './credit-verify.component.html',
  styleUrls: ['./credit-verify.component.css']
})
export class CreditVerifyComponent {
  evaluateCredit: any = {};
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
