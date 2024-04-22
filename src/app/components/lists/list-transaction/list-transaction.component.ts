import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { ProductosFService } from 'src/app/services/productos-f.service';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css'],
})
export class ListTransactionComponent implements OnInit {
  @Input() productId!: number;
  @Output() onTransactionSelected = new EventEmitter<Transaction>();
  transactions: Transaction[] = [];

  constructor(private productosFService: ProductosFService) {}

  ngOnInit(): void {
    this.productosFService.getTransactionsByProduct(this.productId).subscribe({
      next: (transactions) => {
        this.transactions = transactions;
      },
    });
  }

  setTransactionSelected(transaction: Transaction) {
    this.onTransactionSelected.emit(transaction);
  }
}
