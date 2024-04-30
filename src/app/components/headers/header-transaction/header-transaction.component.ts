import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-header-transaction',
  templateUrl: './header-transaction.component.html',
  styleUrls: ['./header-transaction.component.css']
})
export class HeaderTransactionComponent {
  @Input() entity!: EntidadFinanciera;
  @Input() typeProduct: string = '';
  @Input() accountNumber!: string;
  @Output() onClickEventBack = new EventEmitter();

  setClickBack(): void {
    this.onClickEventBack.emit();
  }
}
