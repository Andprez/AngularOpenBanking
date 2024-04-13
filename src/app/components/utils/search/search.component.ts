import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() placeholder: string = 'Hola, escribe algo...';
  @Output() textFilter = new EventEmitter<string>();

  textoFiltro(event: any) {
    this.textFilter.emit(event.target.value);
  }
}
