import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  mostrarSaldos: boolean=false;

  setMostrarSaldo(){
    //Operador ternario
    this.mostrarSaldos = this.mostrarSaldos? !this.mostrarSaldos:!this.mostrarSaldos;
  }
}
