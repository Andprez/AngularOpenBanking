import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-disburse',
  templateUrl: './credit-disburse.component.html',
  styleUrls: ['./credit-disburse.component.css']
})
export class CreditDisburseComponent implements OnInit{
  creditData: any={};
  fechaHoraActual: String = '';
  routes = {
    back: 'credit/select-account-disburse',
    help: '/help',
    continue: '/dashboard'
  }
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {
    //Obtener fecha/hora actual
    this.fechaHoraActual=this.obtenerFechaHoraActual();
    // Recuperar datos del local storage
    this.creditData = JSON.parse(localStorage.getItem("creditData")!);

    console.log("esta es la data que llega de selctAccount:::::",this.creditData)
  }
  //Obtener nombre del subtipo de producto
  get subtipoProductoCNombre(): string {
    return this.creditData?.subtipoProductoC?.nombre || '';
  }
  //obtener el número de cuenta
  get numeroCuenta(): string {
    return this.creditData?.accountDisburse?.numeroCuenta || '';
  }

  obtenerFechaHoraActual() {
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    const anio = fecha.getFullYear();
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = String(fecha.getSeconds()).padStart(2, '0');

    return `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;
  }
  cleanLocalStorage(): void{
        //borrar dataCredit y detailData
        localStorage.removeItem('creditData');
        localStorage.removeItem('detailData');
  }
  goToPage(page: string): void {
    this.router.navigate([page]);
  }

}
