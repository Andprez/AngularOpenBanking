import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator-signin-user',
  templateUrl: './indicator-signin-user.component.html',
  styleUrls: ['./indicator-signin-user.component.css']
})
export class IndicatorSigninUserComponent implements OnInit{
  avances: boolean[] = new Array(4);
  completados: number = 3;

  ngOnInit(): void {
    for (let i = 0; i < this.completados; i++) {
      if (this.completados <= 4){
        this.avances[i] = true;
      }
    }
  }
}
