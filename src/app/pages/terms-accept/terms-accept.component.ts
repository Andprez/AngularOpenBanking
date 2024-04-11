import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-terms-accept',
  templateUrl: './terms-accept.component.html',
  styleUrls: ['./terms-accept.component.css', '../../templates/background2.css']
})
export class TermsAcceptComponent implements OnInit{
  formTerms!: FormGroup;

  // @Input() img: string = '../../../assets/daviplata.png';
  @Input() img: string = '../../../assets/Nequi.jpg';
  @Input() tipoProd: string = 'Cuenta de ahorros';
  @Input() montoProd: string = '123456';

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formTerms = this.formBuilder.group({
      accept: [false, Validators.requiredTrue]
    });
  }
  acceptTerms() {
    console.log('aceptar terminos: ' + this.formTerms.value.accept);
  }
}
