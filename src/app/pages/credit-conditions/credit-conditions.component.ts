import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoF } from 'src/app/models/producto-f';

@Component({
  selector: 'app-credit-conditions',
  templateUrl: './credit-conditions.component.html',
  styleUrls: ['./credit-conditions.component.css']
})
export class CreditConditionsComponent implements OnInit {
  creditoData: any={};
  creditDataForm: any={};
  routes = {
    back: '/credit/select',
    help: '/help',
    continue: '/credit/request',
    info: '/help',
    simulation: '/credit/select',
  };

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {

    this.cdr.detectChanges();

    // this.creditoData=JSON.parse(localStorage.getItem("creditData")!)
    this.creditoData=JSON.parse(sessionStorage.getItem("creditData")!)
    console.log("OBJETO CREDITO:::::::",this.creditoData)
    this.creditDataForm.montoC=this.creditoData.montoCredito;
    this.creditDataForm.plazoC=this.creditoData.plazo;
    this.creditDataForm.nombreSubtipoP=this.creditoData.subtipoProducto.nombre;
    this.creditDataForm.tasaMV=1.46
    this.creditDataForm.tasaEA=19
    this.creditDataForm.valorSeguro=2140;
    this.calcularCuotaMensual();
    this.calcularPagoTotal();
    this.calcularVtua();
  }

  calcularCuotaMensual(): void {
    const montoCredito = this.creditDataForm.montoC;
    const plazo = this.creditDataForm.plazoC;
    const tasaMV = this.creditDataForm.tasaMV / 100; // Convertir a decimal
    // Calcular la cuota mensual
    const cuotaMensual = (montoCredito * tasaMV * Math.pow(1 + tasaMV, plazo)) / (Math.pow(1 + tasaMV, plazo) - 1);
    // Asignar la cuota mensual al formulario
    this.creditDataForm.cuotaMensual = cuotaMensual;
    console.log("Cuota Mensual:", cuotaMensual);
  }
  calcularPagoTotal(): void {
    const plazo = this.creditDataForm.plazoC;
    const valorSeguro = this.creditDataForm.valorSeguro;
    // Obtener la cuota mensual calculada previamente
    const cuotaMensual = this.creditDataForm.cuotaMensual;
    // Calcular el pago total
    const pagoTotal = (cuotaMensual * plazo) + valorSeguro;
    // Asignar el pago total al formulario
    this.creditDataForm.pagoTotal = pagoTotal;
    console.log("Pago Total:", pagoTotal);
  }
  calcularVtua(): void {
    const montoCredito = this.creditDataForm.montoC;
    const tasaEA = this.creditDataForm.tasaEA / 100; // Convertir a decimal
    // Calcular VTUA
    const vtua = montoCredito * tasaEA;
    this.creditDataForm.vtua = vtua;
    console.log("VTUA:", vtua);
  }


  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
