import { Component } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransaccionService } from 'src/app/services/transaccion.service';
import Chart from 'chart.js/auto';
import { TipoTransaccion } from 'src/app/models/tipo-transaccion';
import { forkJoin } from 'rxjs';
import { ProductoF } from 'src/app/models/producto-f';
import { ProductosFService } from 'src/app/services/productos-f.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css'],
})
export class FinanceComponent {
  productsByClient: ProductoF[] = [];
  transactions: Transaction[] = [];
  typesTransactions: TipoTransaccion[] = [];
  transactionsByType: any = {};
  totalByType: any = {};
  user: Cliente = {} as Cliente;

  constructor(
    private transactionsService: TransaccionService,
    private productsFService: ProductosFService
  ) {}

  public chart: any;
  public montoTransacciones: number = 0;
  public montoCompras: number = 0;
  public montoCreditos: number = 0;
  public montoServiciosPub: number = 0;
  public montoPagos: number = 0;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.getTransactionsByClientId(this.user.idCliente!);
  }

  getTransactionsByClientId(userId: number){
    const reqTransactions = this.transactionsService.getTransactionsByClientId(userId);
    const reqTypesTransactions = this.transactionsService.getTypesTransactions();

    forkJoin([reqTransactions, reqTypesTransactions]).subscribe({
      next: ([transactions, types]) => {
        this.transactions = transactions;
        this.typesTransactions = types;

        transactions.forEach( transaction => {
          let type = this.typesTransactions.find(tt => tt.idTipo_Transaccion === transaction.idTipo_Transaccion);
          this.transactionsByType[type?.nombreTipo!] = (this.transactionsByType[type?.nombreTipo!] || 0) + transaction.montoTransaccion;
        })
        this.crearPie();
      },
    });
  }

  crearPie() {
    this.chart = new Chart('myChart', {
      type: 'doughnut',
      data: {
        labels: Object.keys(this.transactionsByType),
        datasets: [
          {
            label: 'Tus Gastos',
            data: Object.values(this.transactionsByType),
            backgroundColor: [
              'rgb(115,220,248)',
              'rgb(70, 188, 219)',
              'rgb(42, 117, 165)',
              'rgb(6, 67, 106)',
            ],
            hoverOffset: 4,
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });
  }
}
