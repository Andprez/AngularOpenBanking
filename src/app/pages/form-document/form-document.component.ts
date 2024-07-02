import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-form-document',
  templateUrl: './form-document.component.html',
  styleUrls: [
    './form-document.component.css',
    '../../templates/background2.css',
  ],
})
export class FormDocumentComponent implements OnInit {
  isLoading: boolean = false;
  frontDocument: boolean = true;
  activeBtn: boolean = false;
  showAlert: boolean = false;
  user: any = {};
  isComplete: boolean = false;
  titulo: string = 'Ubique el documento dentro del marco';
  routes = {
    back: '/register',
    help: '/help',
  };

  constructor(
    private router: Router,
    private clientesService: ClientesService,
    private notifService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.notifService.loadingEvent.subscribe((event) => {
      this.isLoading = event;
    })
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
    const tipoFoto = this.frontDocument
      ? 'frenteDocIdentidad'
      : 'respaldoDocIdentidad';
    const req = idAnexos
      ? this.clientesService.updateAnexo(idAnexos, imageData, tipoFoto)
      : this.clientesService.createAnexo(idCliente, imageData, tipoFoto);

    req.subscribe({
      next: (res) => {
        console.log('Imagen guardada');
        this.showAlert = true;
        this.user = { ...this.user, anexos: res };
        localStorage.setItem('user', JSON.stringify(this.user));
        this.activeBtn = true;
        this.frontDocument
          ? (this.isComplete = false)
          : (this.isComplete = true);
      },
    });
  }

  continue(): void {
    if (!this.isComplete) {
      this.frontDocument = false;
      this.titulo = 'Ahora ubique la parte de atrás de su documento';
      this.showAlert = false;
      this.activeBtn = false;
    } else {
      console.log('Imagenes guardadas');
      this.router.navigate(['/register']);
    }
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
