import { Component } from '@angular/core';

@Component({
  selector: 'app-form-document',
  templateUrl: './form-document.component.html',
  styleUrls: ['./form-document.component.css', '../../templates/background2.css']
})
export class FormDocumentComponent {

  texto: string = 'Continuar'
  postCard: boolean = false

  saveData() {
    if (!this.postCard) {
      this.postCard = true
    }
    else {
      console.log ("Guardando datos")
    }
  }

}
