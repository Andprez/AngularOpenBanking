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
  infoPersonalComplete: boolean = false;
  passwordComplete: boolean = false;
  selfieComplete: boolean = false;
  documentComplete: boolean = false;

  constructor(private router: Router) {}
  routes = {
    info: 'info',
    password: 'phone-confirm',
    selfie: 'selfie',
    document: 'document',
  };

  goToNextPage(): void {
    this.router.navigate(['/products']);
  }
}
