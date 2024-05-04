import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  @Output() onDigit = new EventEmitter<string>();
  inputs: any;
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
    this.inputs = document.querySelectorAll('input');
  }

  onInputDigit(event: any, key: number) {
    const keyName = event.key;
    const digito = event.target.value;
    const valid = /^[0-9]$/.test(digito);

    if (keyName === 'Backspace' && key > 0) {
      this.inputs[key - 1].focus();
    } else if (!valid) {
      event.target.value = digito.replace(/[^0-9]/g, '');
    } else if (keyName >= 0 && keyName <= 9) {
      this.otp[key] = digito;
      this.onDigit.emit(this.otp.join(''));
      if (key < 5) {
        this.inputs[key + 1].focus();
      }
    }

    // if (keyName === 'Backspace' && key > 0) {
    //   this.inputs[key - 1].focus();
    // } else if (keyName >= 0 && keyName <= 9) {
    //   if (!valid && digito !== null) {
    //     event.target.value = digito.replace(/[^0-9]/g, '');
    //   } else {
    //     this.otp[key] = digito;
    //     this.onDigit.emit(this.otp.join(''));
    //     if (key < 5) {
    //       this.inputs[key + 1].focus();
    //     }
    //   }
    // } else if (!valid) {
    //   console.log('Holis');
    // }
  }
}
