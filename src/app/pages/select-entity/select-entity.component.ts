import { Component } from '@angular/core';

@Component({
  selector: 'app-select-entity',
  templateUrl: './select-entity.component.html',
  styleUrls: ['./select-entity.component.css']
})
export class SelectEntityComponent {
  textFilter: string = '';

  textoBuscado(textFilter: string){
    this.textFilter = textFilter;
  }
}
