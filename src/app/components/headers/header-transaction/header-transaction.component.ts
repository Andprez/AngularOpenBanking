import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-transaction',
  templateUrl: './header-transaction.component.html',
  styleUrls: ['./header-transaction.component.css']
})
export class HeaderTransactionComponent {
  @Input() nameEntity!: string;
  @Input() nameImage!: string;
  @Input() typeProduct!: string;
  @Input() accountNumber!: string;
}
