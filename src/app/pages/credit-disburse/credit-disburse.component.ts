import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-credit-disburse',
  templateUrl: './credit-disburse.component.html',
  styleUrls: ['./credit-disburse.component.css']
})
export class CreditDisburseComponent implements OnInit{
  routes = {
    back: '',
    help: '/help',
    accept: '',
  };

  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
