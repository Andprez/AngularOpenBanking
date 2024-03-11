import { Component } from '@angular/core';
import {MatIconModule} from '@';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/menu/core';

@Component({
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class MenuComponent {

}
