import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-product-proposals',
  templateUrl: './product-proposals.component.html',
  styleUrls: ['./product-proposals.component.css']
})
export class ProductProposalsComponent implements OnInit{
  creditData: any={};
  entityProposal = [
    {
      nombre: 'daviplata',
      imagen: '../../../../assets/entidadesF/daviplata.png',
      monto: 2700000,
      tasaMV: 1.78,
      plazo: 48,
      cuotaMensual: 84131,
    },
    {
      nombre: 'banco de bogotá',
      imagen: "../../../../assets/entidadesF/ban-bogota.png",
      monto: 2700000,
      tasaMV: 1.48,
      plazo: 48,
      cuotaMensual: 85148,
    },
    {
      nombre: 'pibank',
      imagen: "../../../../assets/entidadesF/pibank.png",
      monto: 2700000,
      tasaMV: 1.86,
      plazo: 48,
      cuotaMensual: 246920,
    }
  ];

  routes={
    back: '/dashboard',
    help: '/help',
    request: '/credit/request',
  }

  constructor(
    private router: Router
  ) {

  }
  ngOnInit(): void {
   this.creditData=JSON.parse(localStorage.getItem('creditData')!);
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
