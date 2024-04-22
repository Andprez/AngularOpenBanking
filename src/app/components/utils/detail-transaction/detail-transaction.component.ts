import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-detail-transaction',
  templateUrl: './detail-transaction.component.html',
  styleUrls: ['./detail-transaction.component.css']
})
export class DetailTransactionComponent {
  @Input() transaction: Transaction = {} as Transaction;
  @Output() onTransactionSelected = new EventEmitter<Transaction>();

  setTransactionSelected() {
    this.onTransactionSelected.emit(this.transaction);
  }
}
