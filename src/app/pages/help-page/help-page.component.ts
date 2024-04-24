import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css'],
})
export class HelpPageComponent {
  constructor(private router: Router, private location: Location) {}

  goBack() {
    this.location.back();
  }
}
