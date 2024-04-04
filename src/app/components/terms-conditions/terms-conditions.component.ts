import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css'],
})
export class termsConditionsComponent{
  constructor(private router: Router){}
  aceptacionterminos(){
    this.router.navigate(['/acepterminos']);
    console.log("Hola mundo.")
  }
}
