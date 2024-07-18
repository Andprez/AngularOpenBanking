import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  implements OnInit {
    routes = {
    back: '/login',
    help: '/help',
  };

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void { }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }


}
