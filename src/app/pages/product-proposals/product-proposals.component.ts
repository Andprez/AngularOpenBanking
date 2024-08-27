import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { RequestBanksService } from 'src/app/services/request-banks.service';
@Component({
  selector: 'app-product-proposals',
  templateUrl: './product-proposals.component.html',
  styleUrls: ['./product-proposals.component.css']
})
export class ProductProposalsComponent implements OnInit{
  creditData: any={};
  entityProposal: any=[];



  routes={
    back: '/dashboard',
    help: '/help',
    request: '/credit/request',
  }

  constructor(
    private router: Router,
    private requestsimulation: RequestBanksService,
  ) {

  }
  ngOnInit(): void {
   this.creditData=JSON.parse(localStorage.getItem('creditData')!);
   let typeCredit = this.creditData.subtipoProductoC.nombre;
   let montoCredit = this.creditData.montoCredito;
   let plazoCredit = this.creditData.plazo;

   this.requestsimulation.ban_simulateCredit(typeCredit, montoCredit, plazoCredit).subscribe({
    next:(res) =>{
      let result = res;
      this.entityProposal =[
        {
          nombre: 'Bancolombia',
          imagen: '../../../../assets/entidadesF/bancolombia.png',
          monto: result.MontoCredito,
          tasaMV: result.TasaMensualVencida,
          plazo: result.NumeroCuotas,
          cuotaMensual: result.MontoCuotaMensual,
          seguroVida:result.ValorSeguro,
        }
      ]
    },
    error:(err) =>{
      console.log("Error al llamar el servicio SimulateCredit",err)
    },
   });
   //servicio simulacion credit daviplata
   this.requestsimulation.dav_simulateCredit(typeCredit, montoCredit, plazoCredit).subscribe({
    next:(res) =>{
      let result = res;
      this.entityProposal =[
        {
          nombre: 'Daviplata',
          imagen: '../../../../assets/entidadesF/daviplata.png',
          monto: result.credito.montoCredito,
          tasaMV: result.tmv,
          plazo: result.NumeroCuotas,
          cuotaMensual: result.cuotaMensual,
          seguroVida:result.seguroVida,
        }
      ]
    },
    error:(err) =>{
      console.log("Error al llamar el servicio SimulateCredit",err)
    },
   });
  };
  handleContainerClick(entity: any) {
    // Guarda la información en el Local Storage
    let varLocalS=localStorage.setItem('selectedEntity', JSON.stringify(entity));
    this.goToPage(this.routes.request);
    console.log("esto es lo que guardo del proposal:::::::::",varLocalS)

  }
  goToPage(page: string) {
    this.router.navigate([page]);
  }

}
