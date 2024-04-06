import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  otp: Array<string> = ['', '', '', '', '', ''];
  formDigits!: FormGroup;
  elementos!: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formDigits = this.formBuilder.group({
      digito1: [''],
      digito2: [''],
      digito3: [''],
      digito4: [''],
      digito5: [''],
      digito6: [''],
    });
  }

  validarSoloNumeros(event: KeyboardEvent, key: number) {
    const digito = event.key;
    if (
      isNaN(parseInt(digito)) ||
      this.formDigits.get('digito' + key)?.value.length == 1
    ) {
      event.preventDefault();
    } else {
      this.otp[key - 1] = digito;
      console.log(this.otp);
    }
  }
}
