import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-preapproved',
  templateUrl: './credit-preapproved.component.html',
  styleUrls: ['./credit-preapproved.component.css']
})
export class CreditPreapprovedComponent {
  datosCredito: any ={};
  routes = {
    back: '/credit/verify',
    help: '/help',
    accept: '',
  };
  constructor(

    private router: Router
  ) {}
  ngOnInit(): void{
    this.datosCredito = JSON.parse(localStorage.getItem("selectedEntity")!);
    console.log("datos credito: ", this.datosCredito);
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
