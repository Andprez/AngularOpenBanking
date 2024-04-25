import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tyc-banks',
  templateUrl: './tyc-banks.component.html',
  styleUrls: ['./tyc-banks.component.css'],
})
export class TycBanksComponent implements OnInit {
  selectedBank: any = {};
  tycAccept: boolean = false;
  routes = {
    back: '/wallet',
    help: '/help',
    otp: '/register/phone-confirm',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectedBank = JSON.parse(
      localStorage.getItem('productSelected') || '{}'
    );
    this.selectedBank = this.selectedBank.entidadF;
  }

  validateAccept($event: any) {
    this.tycAccept = $event.target.checked;
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
