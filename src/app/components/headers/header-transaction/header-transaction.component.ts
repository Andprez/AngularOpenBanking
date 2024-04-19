import { Component, Input } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-header-transaction',
  templateUrl: './header-transaction.component.html',
  styleUrls: ['./header-transaction.component.css']
})
export class HeaderTransactionComponent {
  @Input() routerLinkBack!: string;
  @Input() entity!: EntidadFinanciera;
  @Input() typeProduct: string = '';
  @Input() accountNumber!: string;
}
