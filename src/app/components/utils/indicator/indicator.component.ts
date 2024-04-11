import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit{
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
