import { Component } from '@angular/core';

@Component({
  selector: 'app-form-selfie',
  templateUrl: './form-selfie.component.html',
  styleUrls: ['./form-selfie.component.css', '../../templates/background2.css']
})
export class FormSelfieComponent {
  imageData: string = '';

  savePhoto(imageData: string): void {
    this.imageData = imageData;
    console.log('Imagen guardada:', this.imageData);
  }
}
