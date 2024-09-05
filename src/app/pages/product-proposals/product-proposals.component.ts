import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { EntidadFinancieraService } from 'src/app/services/entidad-financiera.service';
import { RequestBanksService } from 'src/app/services/request-banks.service';
@Component({
  selector: 'app-product-proposals',
  templateUrl: './product-proposals.component.html',
  styleUrls: ['./product-proposals.component.css']
})
export class ProductProposalsComponent implements OnInit{
  creditData: any={};
  entidadesF: any={};
  entityProposal: any=[];
  routes={
    back: '/credit/select',
    help: '/help',
    request: '/credit/request',
  }

  constructor(
    private router: Router,
    private requestsimulation: RequestBanksService,
    private entidadServices: EntidadFinancieraService
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
            cuotaMensual: result.serviceDaviplata.credito.cuotaMensual,
            montoFinal: result.serviceDaviplata.credito.montoFinal,
            plazo: result.serviceDaviplata.credito.numeroCuotas,
            tasaEA: result.serviceDaviplata.credito.tea,
            tasaMV: result.serviceDaviplata.credito.tmv,
            vtua: result.serviceDaviplata.credito.vtua,
            seguroVida: result.serviceDaviplata.credito.seguroVida,
          },
          {
            nombre: 'Bancolombia',
            imagen: '../../../../assets/entidadesF/bancolombia.png',
            monto: result.serviceBancolombia.credito.montoCredito,
            cuotaMensual: result.serviceBancolombia.credito.cuotaMensual,
            montoFinal: result.serviceBancolombia.credito.montoFinal,
            plazo: result.serviceBancolombia.credito.numeroCuotas,
            tasaEA: result.serviceBancolombia.credito.tea,
            tasaMV: result.serviceBancolombia.credito.tmv,
            vtua: result.serviceBancolombia.credito.vtua,
            seguroVida: result.serviceBancolombia.credito.seguroVida,
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
    this.entidadServices.getEntitiesF().subscribe({
      next:(resp)=>{
        this.entidadesF = resp;
      },
      error:(err)=>{
        console.log("Error al llamar al servicio de obtener bancos ", err);
      }
    });
    entity = {entity}
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    let detallesSolicitudP = JSON.parse(localStorage.getItem('detailData') || '{}');
    this.creditData = {...this.creditData, "entidadF": entity.entity, user ,detallesSolicitudP};
    let varLocalS= localStorage.setItem('selectedEntity', JSON.stringify(this.creditData));
    this.goToPage(this.routes.request);
    console.log("esto es lo que guardo del proposal:::::::::",varLocalS)

  }
  goToPage(page: string) {
    this.router.navigate([page]);
  }
}