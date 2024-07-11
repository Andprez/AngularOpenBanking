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
  private getPrevPage: string | undefined;
  routes = {
    back: '/dashboard',
    help: '/help',
    addProduct: '/products/add/data-product',
    createProduct: 'credit/select',
    wallet: '/wallet',
  };

  constructor(
    private router: Router,    
  ) {
    let page = this.router.getCurrentNavigation()?.previousNavigation?.finalUrl?.toString();
    this.getPrevPage = page
    console.log(this.getPrevPage);
  }

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
    let addProduct
    if(this.getPrevPage=="/dashboard"){
      this.goToPage(this.routes.addProduct);
    } else if (this.getPrevPage=="/products") {
      this.goToPage(this.routes.createProduct);
    }
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
