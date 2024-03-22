import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-logo-cbit',
  templateUrl: './logo-cbit.component.html',
  styleUrls: ['./logo-cbit.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule]
})
export class LogoCbitComponent {
  constructor(){}
  ngOnInit(): void {}
}
