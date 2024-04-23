import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-form-selfie',
  templateUrl: './form-selfie.component.html',
  styleUrls: ['./form-selfie.component.css', '../../templates/background2.css'],
})
export class FormSelfieComponent implements OnInit {
  imageData: string = '';
  user: any = {};
  routes = {
    back: '/register',
    help: '/help',
    register: '/register',
  };

  constructor(private router: Router, private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : {};
  }

  savePhoto(imageData: string): void {
    this.imageData = imageData;
    if (this.user.idAnexos) {
      this.clientesService.updateAnexo(this.user.idAnexos, this.imageData, 'fotoCliente').subscribe({
        next: (res) => {
          console.log('Imagen guardada')
          this.user = { ...this.user, anexos: res };
          localStorage.setItem('user', JSON.stringify(this.user));
        },
        error: (err) => console.log('Error al guardar la imagen:', err),
      });
    }
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
