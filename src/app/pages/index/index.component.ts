import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css', '../../templates/background2.css'],
})
export class IndexComponent {
  routes = {
    login: '/login',
    marketplace: '/ecommerce',
    help: '/help',
  };
  constructor(private router: Router) {}

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
