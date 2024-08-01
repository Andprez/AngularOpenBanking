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
    back: '/credit/request',
    help: '/help',
    approved: 'credit/approved',
    preapproved:'credit/preapproved',
    noapproved:'credit/reject'
  };


  evaluateCredit: any ={
    "stateCredit": true,
    "account": true,
  }
  constructor(
    private router: Router
  ){}

  ngOnInit(): void{
    this.datosCredito = JSON.parse(localStorage.getItem("creditData")!);
    console.log("datos credito: ", this.datosCredito);
  }
  goToPage(page: string): void {
    this.router.navigate([page]);
  }
  evaluateAppliCredit(): void{
    if(this.evaluateCredit.stateCredit == true){
      if(this.evaluateCredit.account == true){
        this.goToPage(this.routes.approved);
      }else{
        this.goToPage(this.routes.preapproved);
      }
    }
    else{
      this.goToPage(this.routes.noapproved);
    }
  }
}
