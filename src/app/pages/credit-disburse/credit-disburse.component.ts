import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-disburse',
  templateUrl: './credit-disburse.component.html',
  styleUrls: ['./credit-disburse.component.css']
})
export class CreditDisburseComponent implements OnInit{
  creditData: any={};



  ngOnInit(): void {
    // Recuperar datos del local storage
    this.creditData = JSON.parse(localStorage.getItem("creditData")!);


    // Obtener variables con datos de los componentes anteriores por medio de local storage

  }

}
