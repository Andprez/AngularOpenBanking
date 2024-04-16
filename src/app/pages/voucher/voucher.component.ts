import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent {
  @Input() transaction!: Transaction;
  productF!: any; // TODO: Change to Product
  typeProduct!: any; // TODO: Change to TypeProduct
  status!: any; // TODO: Change to Status

  aprobado: boolean = false;
}
