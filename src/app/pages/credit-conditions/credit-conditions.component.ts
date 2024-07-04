import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-conditions',
  templateUrl: './credit-conditions.component.html',
  styleUrls: ['./credit-conditions.component.css']
})
export class CreditConditionsComponent {
  routes = {
    back: '/login',
    help: '/help',
    accept: '/tyc/accept',
  };

  constructor(private router: Router) {}

  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
