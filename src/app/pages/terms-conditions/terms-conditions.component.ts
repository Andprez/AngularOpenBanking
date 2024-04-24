import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: [
    './terms-conditions.component.css',
    '../../templates/background3.css',
  ],
})
export class TermsConditionsComponent {
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
