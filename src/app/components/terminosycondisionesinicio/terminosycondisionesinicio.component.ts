import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminosycondisionesinicio',
  templateUrl: './terminosycondisionesinicio.component.html',
  styleUrls: ['./terminosycondisionesinicio.component.css'],
})
export class terminosycondisionesinicioComponent {
  constructor(private router: Router){}
  aceptacionterminos(){
    this.router.navigate(['/acepterminos']);
    console.log("Hola mundo.")
  }
}
