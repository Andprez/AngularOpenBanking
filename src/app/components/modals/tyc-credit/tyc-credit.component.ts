import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tyc-credit',
  templateUrl: './tyc-credit.component.html',
  styleUrls: ['./tyc-credit.component.css']
})
export class TycCreditComponent {

  constructor(
    public _MatDialogRef: MatDialogRef<TycCreditComponent>
  ){}
}
