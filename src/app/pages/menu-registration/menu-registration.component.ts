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
  passwordComplete: boolean = true;
  selfieComplete: boolean = true;
  documentComplete: boolean = true;

  constructor(private router: Router) {}
  routes = {
    info: '/register/info',
    password: '/register/phone-confirm',
    selfie: '/register/selfie',
    document: '/register/document',
    products: '/products',
  };

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
