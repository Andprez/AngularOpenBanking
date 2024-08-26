import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pre-approved',
  templateUrl: './pre-approved.component.html',
  styleUrls: ['./pre-approved.component.css']
})
export class PreApprovedComponent {
  constructor(
    public _MatDialogRef: MatDialogRef<PreApprovedComponent>
  ){}
}
