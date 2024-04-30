import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-menu-registration',
  templateUrl: './menu-registration.component.html',
  styleUrls: [
    './menu-registration.component.css',
    '../../templates/background1.css',
  ],
})
export class MenuRegistrationComponent implements OnInit {
  infoPersonalComplete: boolean = false;
  selfieComplete: boolean = false;
  documentComplete: boolean = false;
  routes = {
    back: '/login',
    help: '/help',
    info: '/register/info',
    selfie: '/register/selfie',
    document: '/register/document',
    products: '/dashboard',
  };

  constructor(
    private router: Router,
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    let user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : {};
    if (user.idCliente) {
      this.clientesService.getCliente(user.idCliente).subscribe({
        next: (res) => {
          this.infoPersonalComplete = true;
        },
      });
      if (user.idAnexos) {
        this.clientesService.getAnexo(user.idAnexos).subscribe({
          next: (res) => {
            if (res.fotoCliente) {
              this.selfieComplete = true;
            }
            if (res.frenteDocIdentidad && res.respaldoDocIdentidad) {
              this.documentComplete = true;
            }
          },
        });
      }
    }
    this.infoPersonalComplete = user.primerNombre ? true : false;
    if (user.anexos) {
      this.selfieComplete = user.anexos.fotoCliente ? true : false;
      this.documentComplete =
        user.anexos.frenteDocIdentidad && user.anexos.respaldoDocIdentidad
          ? true
          : false;
    }
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
