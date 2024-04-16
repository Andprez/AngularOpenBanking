import { Component } from '@angular/core';

@Component({
  selector: 'app-form-document',
  templateUrl: './form-document.component.html',
  styleUrls: [
    './form-document.component.css',
    '../../templates/background2.css',
  ],
})
export class FormDocumentComponent {
  postCard: boolean = false;
  imageData: string = '';
  titulo: string = 'Ubique el documento dentro del marco';

  savePhoto(imageData: string): void {
    this.imageData = imageData;
    console.log('Imagen guardada:', this.imageData); // TODO: Guardar imagen en BD
  }

  saveData(): void {
    if (!this.postCard) {
      this.imageData = '';
      this.postCard = true;
      this.titulo = 'Ahora ubique la parte de atrás de su documento';
    }
  }
}
