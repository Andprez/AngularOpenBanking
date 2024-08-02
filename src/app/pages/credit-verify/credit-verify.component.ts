import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
@Component({
  selector: 'app-credit-verify',
  templateUrl: './credit-verify.component.html',
  styleUrls: ['./credit-verify.component.css']
})
export class CreditVerifyComponent {
  datosCredito: any ={};
  resultDataCredito: any ={};
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
    private clienteServices: ClientesService
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
    this.clienteServices.getStatusDataCredito(this.cliente.numeroIdentificacion).subscribe({
      next:(dataCred)=>{
        this.resultDataCredito = dataCred;
        console.log("resultado data credito!!!!!!! ",this.resultDataCredito);
        let creditScore = this.resultDataCredito.result.data.experian_score;
        let cupo = this.resultDataCredito.result.data.informes.informe.info_agregada.evolucion_deuda.trimestre.cupo_total;
        console.log("resultado score!!!!!!! ",creditScore);
        console.log("resultado cupo!!!!!!! ",cupo);
       /* if(this.this.resultDataCredito.stateCredit == true){
          if(this.evaluateCredit.account == true){
            this.goToPage(this.routes.approved);
          }else{
            this.goToPage(this.routes.preapproved);
          }
        }
        else{
          this.goToPage(this.routes.noapproved);
        }
*/
      },
      error:(e)=>{
        console.log("Error al ingresar al servicio data credito", e);
      }
    });
    
  }

}
