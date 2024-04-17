import { Component } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransaccionService } from 'src/app/services/transaccion.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent {
  //acceder al servicio finanzas
  constructor(
    private transfers: TransaccionService) { }

  public chart: any;
  public montoTransacciones: number = 0;
  // 'Otros', 'Pagos', 'Transferencias', 'Compras'
  public montoCompras: number = 0;
  public montoCreditos: number = 0;
  public montoServiciosPub: number = 0;
  public montoPagos: number = 0;

  ngOnInit(): void {
    this.obtenerTransferencia();
  }

  obtenerTransferencia() {
    this.transfers.getTransaccion().subscribe({
      next: transacciones => {
        transacciones.forEach((transaccion: Transaction) => {
          this.montoTransacciones += transaccion.montoTransaccion;
          let tipo = transaccion.idTipo_Transaccion
          if (tipo == 1) { this.montoCompras += transaccion.montoTransaccion }
          if (tipo == 2) { this.montoCreditos += transaccion.montoTransaccion }
          if (tipo == 3) { this.montoServiciosPub += transaccion.montoTransaccion }
          if (tipo == 4) { this.montoPagos += transaccion.montoTransaccion }
        });
        console.log("Valores", this.montoCompras, this.montoCreditos, this.montoServiciosPub, this.montoPagos);
        this.crearPie();
      },
      error: (err) => {
        console.log("Ocurrió un error")
      }
    });
}
crearPie() {
  this.chart = new Chart('myChart', {
    type: 'doughnut',
    data: {

      //Compras, Retiros, Transferencias, otros(4*1000/cuota de manejo),Pagos()
      //movimientos Egreso (Tarjetacredito, cuentas (ahorros, moviles(monederos), corrientes), )
      labels: ['Otros', 'Créditos', 'Servicios públicos', 'Pagos'],
      datasets: [{
        label: 'Tus Gastos',
        data: [
          this.montoCompras,
          this.montoCreditos,
          this.montoServiciosPub,
          this.montoPagos
        ],
        backgroundColor: [
          'rgb(115,220,248)',
          'rgb(70, 188, 219)',
          'rgb(42, 117, 165)',
          'rgb(6, 67, 106)',
        ],
        hoverOffset: 4,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
}
