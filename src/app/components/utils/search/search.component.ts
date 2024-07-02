import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Input() placeholder: string = 'Escribe algo...';
  @Output() onTxtFilter = new EventEmitter<string>();

  setTxtFilter(event: any) {
    this.onTxtFilter.emit(event.target.value);
  }
}
