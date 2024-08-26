import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IndicatorComponent } from 'src/app/components/utils/indicator/indicator.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-credit-verify',
  templateUrl: './credit-verify.component.html',
  styleUrls: ['./credit-verify.component.css']
})
export class CreditVerifyComponent {
  datosCredito: any ={};
  cCredito: any ={};
  routes = {
    back: '/credit/request',
    help: '/help',
    approved: 'credit/approved',
    preapproved:'credit/preapproved',
    noapproved:'credit/reject'
  };
  @ViewChild(IndicatorComponent) indicatorComponent!: IndicatorComponent;


  evaluateCredit: any ={
    "stateCredit": true,
    "account": true,
  }
  constructor(
    private router: Router,
    private http: HttpClient
  ){}

  ngOnInit(): void{
    this.datosCredito = JSON.parse(localStorage.getItem("creditData")!);
    console.log("datos credito: ", this.datosCredito);
  }

  // enviarDatos() {
  //   // Obtener los datos del local storage
  //   let cCredito = JSON.parse(localStorage.getItem('cCredito') || '{}');
  //   fetch('/api/submit-data', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(dataToSend)
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Success:', data);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);  

  //   });
  // }

  goToPage(page: string): void {
    this.router.navigate([page]);
    this.indicatorComponent.avanzar();

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
