import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: [
    './form-password.component.css',
    '../../templates/background2.css',
  ],
})
export class FormPasswordComponent implements OnInit {
  formPassword!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.formPassword = this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      { validators: this.comparePasswords });
  }

  comparePasswords(formPassword: FormGroup) {
    let password = formPassword.get('password')?.value;
    let confirmPassword = formPassword.get('confirmPassword')?.value;
    if (password === confirmPassword) {
      formPassword.get('confirmPassword')?.setErrors(null);
    } else {
      formPassword.get('confirmPassword')?.setErrors({ notEqual: true });
    }
  }

  registrarPassword() {
    console.log(this.formPassword.value);
  }
}
