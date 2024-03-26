import { Component, OnInit } from '@angular/core';
//import { LogoCbitComponent } from '../header/logo-cbit/logo-cbit.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aceptacionterminosycond',
  templateUrl: './aceptacionterminosycond.component.html',
  styleUrls: ['./aceptacionterminosycond.component.css'],

})
export class AceptacionTerminosYCondComponent{
  constructor(private router: Router){
    
  }
}
