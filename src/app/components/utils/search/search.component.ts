import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Input() placeholder: string = 'Escribe algo...';
  @Output() filterEntity = new EventEmitter<string>();

  textoFiltro(event: any) {
    this.filterEntity.emit(event.target.value);
  }
}
