import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { RequestBanksService } from 'src/app/services/request-banks.service';

@Component({
  selector: 'app-tyc-banks',
  templateUrl: './tyc-banks.component.html',
  styleUrls: ['./tyc-banks.component.css'],
})
export class TycBanksComponent implements OnInit {
  selectedBank: EntidadFinanciera = {} as EntidadFinanciera;
  customerTerms!: string;
  walletTerms!: string;
  tycAccept: boolean = false;
  routes = {
    back: '/wallet',
    help: '/help',
    summary: '/summary',
  };

  constructor(
    private router: Router,
    private banksService: RequestBanksService
  ) {}

  ngOnInit(): void {
    this.processPayment();
  }

  validateAccept($event: any) {
    this.tycAccept = $event.target.checked;
  }

  processPayment() {
    let product = JSON.parse(localStorage.getItem('productSelected') || '{}');
    this.selectedBank = product.entidadF;
    switch (this.selectedBank.nombre) {
      case 'Bancolombia':
        this.banksService.ban_GetToken().subscribe({
          next: (response) => {
            let access_token = response.access_token;
            let processPayment = { access_token };
            localStorage.setItem(
              'processPayment',
              JSON.stringify(processPayment)
            );
            this.banksService.ban_GetTermsConditions(access_token).subscribe({
              next: (response) => {
                this.customerTerms = response.data.termsCondition.clausesCustomer.url;
                this.walletTerms = response.data.termsCondition.walletTerms.url;
              },
            });
          },
        });
        break;
      case 'Daviplata':
        break;
    }
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
