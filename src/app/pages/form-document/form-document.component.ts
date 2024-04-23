import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpenbankingbancolombiaService } from 'src/app/services/openbankingbancolombia.service';

@Component({
  selector: 'app-form-document',
  templateUrl: './form-document.component.html',
  styleUrls: ['./form-document.component.css', '../../templates/background2.css']
})
export class FormDocumentComponent {

  constructor(
    private OpenbankingbancolombiaService: OpenbankingbancolombiaService
  ){}

  ngOnInit(): void {
    //this.OpenbankingbancolombiaService.obtenerToken()
  }

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
