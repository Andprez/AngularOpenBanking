import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-registration',
  templateUrl: './menu-registration.component.html',
  styleUrls: ['./menu-registration.component.css', '../../templates/background1.css']
})
export class MenuRegistrationComponent {
  infoPersonalComplete: boolean = false;
  passwordComplete: boolean = false;
  selfieComplete: boolean = false;
  documentComplete: boolean = false;
}
