import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent { 
  title = 'CBIT'
  welcome ='Bienvenido a mi primer proyecto';
  tasks = [
    'Instalar el angular Cli',
    'Creara proyecto',
    'Crear componeres',
    'crear servicio'
  ]
}
