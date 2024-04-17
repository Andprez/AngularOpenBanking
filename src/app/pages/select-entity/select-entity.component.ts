import { Component } from '@angular/core';

@Component({
  selector: 'app-select-entity',
  templateUrl: './select-entity.component.html',
  styleUrls: ['./select-entity.component.css']
})
export class SelectEntityComponent {
  textoRecibido: string="";

  recibirMensaje(texto:string){
    this.textoRecibido = texto;
  }
}
