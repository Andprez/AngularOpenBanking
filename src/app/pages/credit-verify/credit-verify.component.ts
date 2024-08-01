import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-credit-verify',
  templateUrl: './credit-verify.component.html',
  styleUrls: ['./credit-verify.component.css']
})
export class CreditVerifyComponent {
  datosCredito: any ={};
  routes = {
    back: '/products/transactions',
    help: '/help',
    accept: '',
  };
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void{
    this.datosCredito = JSON.parse(localStorage.getItem("creditData")!);
    console.log("datos credito: ", this.datosCredito);
  }
  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
