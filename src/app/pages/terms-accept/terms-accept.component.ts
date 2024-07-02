import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-accept',
  templateUrl: './terms-accept.component.html',
  styleUrls: [
    './terms-accept.component.css',
    '../../templates/background2.css',
  ],
})
export class TermsAcceptComponent implements OnInit {
  formTerms!: FormGroup;
  termsAccepted: boolean = false;
  routes = {
    back: '/tyc',
    dashboard: '/dashboard',
  };

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.formTerms = this.formBuilder.group({
      accept: [false, Validators.requiredTrue],
    });
  }
  acceptTerms() {
    this.termsAccepted = this.formTerms.value.accept;
  }
  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
