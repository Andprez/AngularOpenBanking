import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-transaction',
  templateUrl: './detail-transaction.component.html',
  styleUrls: ['./detail-transaction.component.css']
})
export class DetailTransactionComponent {
  @Input() nameEntity!: string;
  @Input() date!: string;
  @Input() amount!: number;
}

