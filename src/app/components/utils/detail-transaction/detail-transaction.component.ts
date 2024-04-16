import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-transaction',
  templateUrl: './detail-transaction.component.html',
  styleUrls: ['./detail-transaction.component.css']
})
export class DetailTransactionComponent {
  @Input() nameEntity: string = 'Bancolombia';
  @Input() date: string = '13-nov-2021 12:00';
  @Input() amount: number = 1000000;
}
