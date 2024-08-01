import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-credit-simulation',
  templateUrl: './credit-simulation.component.html',
  styleUrls: ['./credit-simulation.component.css']
})
export class CreditSimulationComponent {
  selectedEntity!: EntidadFinanciera;
  isLoading = false;
  formValidation!: FormGroup;

  routes ={
    back:'/login',
    help:'/help',
  };

  constructor(
    private router: Router,
  ){}

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
