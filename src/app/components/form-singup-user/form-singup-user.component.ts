import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-singup-user',
  templateUrl: './form-singup-user.component.html',
  styleUrls: ['./form-singup-user.component.css']
})
export class FormSingupUserComponent implements OnInit{

  formUser!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      birthDate: ['', Validators.required],
      docType: ['', Validators.required],
      docNumber: ['', Validators.required],
      docDate: ['', Validators.required],
      docCity: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      confirmEmail: ['', [Validators.email, Validators.required]],
    });
  }

  registraUsuario(){
    console.log(this.formUser.value);
  }
}
