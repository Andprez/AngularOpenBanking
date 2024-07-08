import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-select-credit',
  templateUrl: './select-credit.component.html',
  styleUrls: ['./select-credit.component.css']
})
export class SelectCreditComponent {
  selectedEntity!: EntidadFinanciera;
  isLoading = false;
  formValidation!: FormGroup;

  routes ={
    back:'/login',
    help:'/help',
  };

  constructor(
    private router: Router,
  ){

  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}