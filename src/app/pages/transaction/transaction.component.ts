import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  accountNumber: string = '123456789';
  typeProduct: string = 'Cuenta Corriente';
  nameEntity: string = 'Bancolombia';
  nameImage: string = 'bancolombia';
}
