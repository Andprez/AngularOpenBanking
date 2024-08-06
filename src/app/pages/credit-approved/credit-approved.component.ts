import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IndicatorComponent } from 'src/app/components/utils/indicator/indicator.component';

@Component({
  selector: 'app-credit-approved',
  templateUrl: './credit-approved.component.html',
  styleUrls: ['./credit-approved.component.css']
})
export class CreditApprovedComponent {
  @ViewChild(IndicatorComponent) indicatorComponent!: IndicatorComponent;
  datosCredito: any = {};
  routes = {
    back: '/credit/verify',
    help: '/help',
    accept: 'credit/select-account-disburse',
  };
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void{
    this.datosCredito = JSON.parse(localStorage.getItem("creditData")!);
  };
  goToPage(page: string): void {
    this.router.navigate([page]);
    this.indicatorComponent.avanzar();
  };
}
