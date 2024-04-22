import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-document',
  templateUrl: './form-document.component.html',
  styleUrls: [
    './form-document.component.css',
    '../../templates/background2.css',
  ],
})
export class FormDocumentComponent implements OnInit {
  postCard: boolean = false;
  activeBtn: boolean = false;
  user: any = {};
  isComplete: boolean = false;
  titulo: string = 'Ubique el documento dentro del marco';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : {};
  }

  savePhoto(imageData: string): void {
    if (!this.postCard) {
      this.activeBtn = true;
      this.user = { ...this.user, frontDocument: imageData };
    } else {
      this.activeBtn = true;
      this.user = { ...this.user, backDocument: imageData };
      this.isComplete = true;
    }
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  saveData(): void {
    if (!this.postCard) {
      this.postCard = true;
      this.titulo = 'Ahora ubique la parte de atrás de su documento';
      this.activeBtn = false;
    } else if (this.isComplete){
      console.log('Imagenes guardadas');
      this.router.navigate(['/register']);
    }
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
