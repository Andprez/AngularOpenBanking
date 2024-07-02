import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css'],
})
export class IndicatorComponent implements OnInit {
  avances: boolean[] = new Array(3);
  completados: number = 1;

  ngOnInit(): void {
    let user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : {};

    for (let i = 0; i < this.completados; i++) {
      if (this.completados <= 3) {
        this.avances[i] = true;
      }
    }
  }
}
