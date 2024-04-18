import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-selfie',
  templateUrl: './form-selfie.component.html',
  styleUrls: ['./form-selfie.component.css', '../../templates/background2.css'],
})
export class FormSelfieComponent implements OnInit {
  imageData: string = '';
  user: any = {};
  routes = {
    back: '/register',
    help: '/help',
    register: '/register',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : {};
  }

  savePhoto(imageData: string): void {
    this.imageData = imageData;
    console.log('Imagen guardada:');
    this.user = { ...this.user, selfie: this.imageData };
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
