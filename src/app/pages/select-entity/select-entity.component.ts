import { Component } from '@angular/core';

@Component({
  selector: 'app-select-entity',
  templateUrl: './select-entity.component.html',
  styleUrls: ['./select-entity.component.css'],
})
export class SelectEntityComponent {
  wordFilter: string = '';
  imprimir(wordFilter: any) {
    this.wordFilter = wordFilter;
  }
}
