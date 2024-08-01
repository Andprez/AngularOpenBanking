import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-preapproved',
  templateUrl: './credit-preapproved.component.html',
  styleUrls: ['./credit-preapproved.component.css']
})
export class CreditPreapprovedComponent {
  routes = {
    back: '/credit/verify',
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
