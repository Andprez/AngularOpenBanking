import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
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
    back: '/credit/select',
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
   this.listbanks(typeCredit,montoCredit,plazoCredit);   
  };

  listbanks(typeCredit: string, montoCredit: string, plazoCredit: number) {
    forkJoin({
      serviceDaviplata: this.requestsimulation.dav_credit_simulation(typeCredit, montoCredit, plazoCredit),
      serviceBancolombia: this.requestsimulation.ban_simulateCredit(typeCredit, montoCredit, plazoCredit)
    }).subscribe({
      next: (result) => {
        this.entityProposal = [
          {
            nombre: 'Daviplata',
            imagen: '../../../../assets/entidadesF/daviplata.png',
            monto: result.serviceDaviplata.credito.montoCredito,
            tasaMV: result.serviceDaviplata.credito.tmv,
            plazo: result.serviceDaviplata.credito.numeroCuotas,
            cuotaMensual: result.serviceDaviplata.credito.cuotaMensual,
            seguroVida: result.serviceDaviplata.credito.seguroVida
          },
          {
            nombre: 'Bancolombia',
            imagen: '../../../../assets/entidadesF/bancolombia.png',
            monto: result.serviceBancolombia.MontoCredito,
            tasaMV: result.serviceBancolombia.TasaMensualVencida,
            plazo: result.serviceBancolombia.NumeroCuotas,
            cuotaMensual: result.serviceBancolombia.MontoCuotaMensual,
            seguroVida: result.serviceBancolombia.ValorSeguro
          }
        ];
      },
      error: (err) => {
        console.error('Error occurred', err);
      }
    });
  }

  handleContainerClick(entity: any) {
    // Guarda la información en el Local Storage
    console.log("entidad seleccionada okkkaa ",entity)
    let varLocalS= localStorage.setItem('selectedEntity', JSON.stringify(entity));
    this.goToPage(this.routes.request);
    console.log("esto es lo que guardo del proposal:::::::::",varLocalS)

  }
  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
