  import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

  @Component({
    selector: 'app-indicator',
    templateUrl: './indicator.component.html',
    styleUrls: ['./indicator.component.css'],
  })
  export class IndicatorComponent implements OnInit, OnChanges {
    @Input() completados: number = 1;
    avances: boolean[] = new Array(3).fill(false);

    ngOnInit(): void {
      this.actualizarAvances();
    }

    ngOnChanges(changes: SimpleChanges): void {
      if (changes['completados']) {
        this.actualizarAvances();
      }
    }

    actualizarAvances(): void {
      this.avances.fill(false);
      for (let i = 0; i < this.completados && i < this.avances.length; i++) {
        this.avances[i] = true;
      }
    }

    avanzar(): void {
      if (this.completados < 3) {
        this.completados++;
        this.actualizarAvances();
      }
    }
  }
