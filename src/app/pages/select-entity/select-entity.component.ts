import { Component } from '@angular/core';

@Component({
  selector: 'app-select-entity',
  templateUrl: './select-entity.component.html',
  styleUrls: ['./select-entity.component.css'],
})
export class SelectEntityComponent {
  txtFilter: string = '';

  routes = {
    back: '/dashboard',
    help: '/help',
  };

  setFilter(txtFilter: string) {
    this.txtFilter = txtFilter;
  }
}
