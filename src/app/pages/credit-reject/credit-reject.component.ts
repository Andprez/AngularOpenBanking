import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-reject',
  templateUrl: './credit-reject.component.html',
  styleUrls: ['./credit-reject.component.css']
})
export class CreditRejectComponent implements OnInit{
  routes = {
    back: '/credit/verify',
    help: '/help',
    accept: '',
  };

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void{
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }


}

