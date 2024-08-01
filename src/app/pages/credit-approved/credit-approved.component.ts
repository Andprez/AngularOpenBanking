import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    accept: '',
  };
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void{
    this.datosCredito = JSON.parse(localStorage.getItem("creditData")!);
  }
  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
