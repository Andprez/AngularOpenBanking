import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { RequestBanksService } from 'src/app/services/request-banks.service';
@Component({
  selector: 'app-credit-simulation',
  templateUrl: './credit-simulation.component.html',
  styleUrls: ['./credit-simulation.component.css']
})
export class CreditSimulationComponent implements OnInit {
  selectedEntity!: EntidadFinanciera;
  isLoading = false;
  formValidation!: FormGroup;
  typeCredit:any ={};

  routes ={
    back:'/login',
    help:'/help',
  };

  constructor(
    private router: Router,
    private requestsimulation: RequestBanksService,
    private fb: FormBuilder
  ){}
  ngOnInit(): void {
    this.formValidation = this.fb.group({
      montoCredito: ['', Validators.required],
      plazo: ['', Validators.required]
    });
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
  onSubmit() {
    if (this.formValidation.invalid) return;
    this.typeCredit = JSON.parse(localStorage.getItem('creditData')!);
    let { montoCredito, plazo } = this.formValidation.value;
console.log("data credito", this.typeCredit.subtipoProductoC.nombre)
    // this.requestsimulation.ban_simulateCredit(montoCredito, plazo)

  }

}
