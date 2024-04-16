import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent {

  movs: any[] = [
    {
      comercio: 'Marketplace1',
      fecha: '25 nov 2023 15:30',
      monto: 1345678
    },
    {
      comercio: 'Marketplace2',
      fecha: '25 nov 2023 15:30',
      monto: 456789
    },
    {
      comercio: 'Marketplace3',
      fecha: '25 nov 2023 15:30',
      monto: 316457
    },
    {
      comercio: 'Marketplace4',
      fecha: '25 nov 2023 15:30',
      monto: 794654
    },
    {
      comercio: 'Marketplace3',
      fecha: '25 nov 2023 15:30',
      monto: 316457
    },
    {
      comercio: 'Marketplace4',
      fecha: '25 nov 2023 15:30',
      monto: 794654
    },
    {
      comercio: 'Marketplace3',
      fecha: '25 nov 2023 15:30',
      monto: 316457
    },
    {
      comercio: 'Marketplace4',
      fecha: '25 nov 2023 15:30',
      monto: 794654
    },
    {
      comercio: 'Marketplace3',
      fecha: '25 nov 2023 15:30',
      monto: 316457
    },
    {
      comercio: 'Marketplace4',
      fecha: '25 nov 2023 15:30',
      monto: 794654
    },

  ]
}


