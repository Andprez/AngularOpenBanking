import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-registration',
  templateUrl: './menu-registration.component.html',
  styleUrls: [
    './menu-registration.component.css',
    '../../templates/background1.css',
  ],
})
export class MenuRegistrationComponent {
  infoPersonalComplete: boolean = true;
  selfieComplete: boolean = true;
  documentComplete: boolean = true;
  routes = {
    back: '/login',
    help: '/help',
    info: '/register/info',
    selfie: '/register/selfie',
    document: '/register/document',
    products: '/dashboard',
  };

  constructor(private router: Router) {}

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
