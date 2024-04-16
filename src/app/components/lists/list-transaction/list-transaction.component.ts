import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css'],
})
export class ListTransactionComponent {
  @Input() accountNumber: string = '';
  movs: any[] = [
    {
      comercio: 'Marketplace1',
      fecha: '25 nov 2023 15:30',
      monto: 1345678,
    },
    {
      comercio: 'Marketplace2',
      fecha: '25 nov 2023 15:30',
      monto: 456789,
    },
    {
      comercio: 'Marketplace3',
      fecha: '25 nov 2023 15:30',
      monto: 316457,
    },
    {
      comercio: 'Marketplace4',
      fecha: '25 nov 2023 15:30',
      monto: 794654,
    },
    {
      comercio: 'Marketplace3',
      fecha: '25 nov 2023 15:30',
      monto: 316457,
    },
    {
      comercio: 'Marketplace4',
      fecha: '25 nov 2023 15:30',
      monto: 794654,
    },
    {
      comercio: 'Marketplace3',
      fecha: '25 nov 2023 15:30',
      monto: 316457,
    },
    {
      comercio: 'Marketplace4',
      fecha: '25 nov 2023 15:30',
      monto: 794654,
    },
    {
      comercio: 'Marketplace3',
      fecha: '25 nov 2023 15:30',
      monto: 316457,
    },
    {
      comercio: 'Marketplace4',
      fecha: '25 nov 2023 15:30',
      monto: 794654,
    },
  ];
}
