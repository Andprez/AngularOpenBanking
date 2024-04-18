import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-select-entity',
  templateUrl: './select-entity.component.html',
  styleUrls: ['./select-entity.component.css'],
})
export class SelectEntityComponent {
  txtFilter: string = '';

  constructor(private router: Router) {}

  routes = {
    back: '/dashboard',
    help: '/help',
    addProduct: '/products/add/data-product',
  };

  setFilter(txtFilter: string) {
    this.txtFilter = txtFilter;
  }

  selectedEntity(entity: EntidadFinanciera) {
    localStorage.setItem('entity', JSON.stringify(entity));
    this.goToPage(this.routes.addProduct);
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
