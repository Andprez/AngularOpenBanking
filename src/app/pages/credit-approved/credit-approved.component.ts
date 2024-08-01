import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-credit-approved',
  templateUrl: './credit-approved.component.html',
  styleUrls: ['./credit-approved.component.css']
})
export class CreditApprovedComponent {
  datosCredito: any = {};
  routes = {
    back: '/credit/verify',
    help: '/help',
    accept: '/credit/disburse',
  };
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void{
    this.datosCredito = JSON.parse(localStorage.getItem("creditData")!);
    this.datosCredito = {...this.datosCredito,}
    console.log("datos credito: ", this.datosCredito);
  }
  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
