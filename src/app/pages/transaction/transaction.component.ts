import { Component } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  accountNumber: string = '123456789';
  typeProduct: string = 'Cuenta Corriente';
  entity!: EntidadFinanciera;
}
