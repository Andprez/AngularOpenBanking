import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-approved',
  templateUrl: './credit-approved.component.html',
  styleUrls: ['./credit-approved.component.css']
})
export class CreditApprovedComponent {
  routes = {
    back: '/products/transactions',
    help: '/help',
    accept: '',
  };
  constructor(
    private router: Router
  ) {}
  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
