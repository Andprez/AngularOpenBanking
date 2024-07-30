import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ProductoF } from 'src/app/models/producto-f';
import { SubtipoProducto } from 'src/app/models/subtipoProducto';

@Component({
  selector: 'app-credit-conditions',
  templateUrl: './credit-conditions.component.html',
  styleUrls: ['./credit-conditions.component.css']
})
export class CreditConditionsComponent implements OnInit {
  creditoData: any={};
  creditDataForm!: ProductoF;
  tipoCredito!: SubtipoProducto;
  form!: FormGroup;
  routes = {
    back: '/credit/select',
    help: '/help',
    accept: '',
    dashboard: '',
    info: '/help',
    simulation: '/help',
  };

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.creditoData=JSON.parse(localStorage.getItem("creditData")!)
    console.log("OBJETO CREDITO:::::::",this.creditoData)
    this.creditDataForm.montoCredito=this.creditoData.montoCredito;
    this.creditDataForm.plazo=this.creditoData.plazo;
    this.creditDataForm.idSubtipo_Producto=this.creditoData.subtipoProducto.nombre;
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}

