import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-select-entity',
  templateUrl: './select-entity.component.html',
  styleUrls: ['./select-entity.component.css'],
})
export class SelectEntityComponent implements OnInit {
  txtFilter: string = '';
  shopping: boolean = false;
  routes = {
    back: '/dashboard',
    help: '/help',
    addProduct: '/products/add/data-product',
    wallet: '/wallet',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.removeItem('entity');
    localStorage.getItem('marketplace')
      ? (this.shopping = true)
      : (this.shopping = false);
  }

  setFilter(txtFilter: string) {
    this.txtFilter = txtFilter;
  }

  selectedEntity(entity: EntidadFinanciera) {
    localStorage.setItem('entity', JSON.stringify(entity));
    this.goToPage(this.routes.addProduct);
  }

  goBack(): void {
    this.shopping
      ? this.goToPage(this.routes.wallet)
      : this.goToPage(this.routes.back);
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
