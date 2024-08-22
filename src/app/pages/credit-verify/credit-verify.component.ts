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
    let cuotaMensualCredt = this.datosCredito.cuotaMensual;
    let montoCredit = this.datosCredito.monto_credito;
    if(nombreEntidadF == "Bancolombia"){
      this.bankServices.ban_evaluateCredit(montoCredit,cuotaMensualCredt).subscribe({
        next:(respuesta)=>{
          let evaluateCredit = respuesta;
          console.log("respuesta services evaluateCredit ",evaluateCredit);
        },
        error:(e)=>{
          console.log("Error al llamar el servicio de evaluar credito: ", e);
        }
      });
    }
    if(nombreEntidadF == "Daviplata"){

    } 
  }
}
