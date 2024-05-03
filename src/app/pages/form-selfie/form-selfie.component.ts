import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-form-selfie',
  templateUrl: './form-selfie.component.html',
  styleUrls: ['./form-selfie.component.css', '../../templates/background2.css'],
})
export class FormSelfieComponent implements OnInit {
  isLoading: boolean = false;
  imageData: string = '';
  showAlert: boolean = false;
  user: any = {};
  routes = {
    back: '/register',
    help: '/help',
    register: '/register',
  };

  constructor(
    private router: Router,
    private clientesService: ClientesService,
    private notifService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.notifService.loadingEvent.subscribe((event) => {
      this.isLoading = event;
    });
    this.user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : {};
    if (this.user) {
      this.clientesService.getCliente(this.user.idCliente).subscribe({
        next: (res) => {
          this.user = res;
          localStorage.setItem('user', JSON.stringify(this.user));
        },
      });
    }
  }

  savePhoto(imageData: string): void {
    const idCliente = this.user.idCliente;
    const idAnexos = this.user.idAnexos;
    const tipoFoto = 'fotoCliente';
    this.imageData = imageData;

    if (this.user.idAnexos) {
      this.clientesService
        .updateAnexo(idAnexos, this.imageData, tipoFoto)
        .subscribe({
          next: (res) => {
            console.log('Imagen guardada');
            this.user = { ...this.user, anexos: res };
            localStorage.setItem('user', JSON.stringify(this.user));
            this.showAlert = true;
          },
          error: (err) => console.log('Error al guardar la imagen:', err),
        });
    } else {
      this.clientesService
        .createAnexo(idCliente, this.imageData, tipoFoto)
        .subscribe({
          next: (res) => {
            console.log('Imagen guardada');
            this.user = { ...this.user, anexos: res };
            localStorage.setItem('user', JSON.stringify(this.user));
            this.showAlert = true;
          },
          error: (err) => console.log('Error al guardar la imagen:', err),
        });
    }
  }
  continue(): void {
    this.goToPage(this.routes.register);
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
