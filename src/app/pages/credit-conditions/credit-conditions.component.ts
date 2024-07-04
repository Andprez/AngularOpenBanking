import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-credit-conditions',
  templateUrl: './credit-conditions.component.html',
  styleUrls: ['./credit-conditions.component.css']
})
export class CreditConditionsComponent implements OnInit{
  routes = {
    back: '/login',
    help: '/help',
    accept: '/tyc/accept',
  };

  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // goToPage(page: string) {
  //   this.router.navigate([page]);
  // }
  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
