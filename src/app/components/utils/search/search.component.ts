import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Input() placeholder?: string;
  @Output() wordFilter = new EventEmitter<string>();

  emitEvent(event: any): void {
    let valor = event.target.value;
    this.wordFilter.emit(valor);
  }
}
