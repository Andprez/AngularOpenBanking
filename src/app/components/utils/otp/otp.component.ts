import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  @Output() onDigit = new EventEmitter<string>();
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

  validarSoloNumeros(event: any, key: number) {
    const digito = event.data;
    const valid = /^[0-9]$/.test(digito);
    if (!valid && digito !== null) {
      event.target.value = digito.replace(/[^0-9]/g, '');
    } else {
      this.otp[key - 1] = digito;
      this.onDigit.emit(this.otp.join(''));
    }
    // if (
    //   isNaN(parseInt(digito)) ||
    //   this.formDigits.get('digito' + key)?.value.length == 1
    // ) {
    //   event.preventDefault();
    // } else {
    //   this.otp[key - 1] = digito;
    //   console.log(this.otp.join(''));
    // }
  }
}
