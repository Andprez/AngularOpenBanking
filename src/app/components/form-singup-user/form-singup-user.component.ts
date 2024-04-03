import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ciudad } from 'src/app/models/ciudad';
import { Cliente } from 'src/app/models/cliente';
import { TipoIdentificacion } from 'src/app/models/tipo-identificacion';
import { ClientesService } from 'src/app/services/clientes.service';
import { LocalizacionService } from 'src/app/services/localizacion.service';

@Component({
  selector: 'app-form-singup-user',
  templateUrl: './form-singup-user.component.html',
  styleUrls: ['./form-singup-user.component.css'],
})
export class FormSingupUserComponent implements OnInit {
  formUser!: FormGroup;
  ciudades!: Ciudad[];
  tiposIdentificacion!: TipoIdentificacion[];

  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService,
    private localizacionService: LocalizacionService
  ) {}

  ngOnInit(): void {
    this.clientesService.getTiposIdentificacion().subscribe({
      next: (response) => {
        this.tiposIdentificacion = response;
      },
      error: (error) => console.error({ error }),
    });
    this.localizacionService.getCiudades().subscribe({
      next: (response) => {
        this.ciudades = response;
      },
      error: (error) => console.error({ error }),
    });
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
      confirmEmail: ['', [Validators.email, Validators.required]]
    }, {validators: this.compareEmails});
  }

  compareEmails(formUser: FormGroup){
    let email = formUser.get('email')?.value;
    let confirmEmail = formUser.get('confirmEmail')?.value;
    if (email === confirmEmail) {
      formUser.get('confirmEmail')?.setErrors(null);
    } else {
      formUser.get('confirmEmail')?.setErrors({ emailsDiferentes: true });
    }
  }

  createCliente() {
    let newCliente: Cliente = {
      primerNombre: this.formUser.get('primerNombre')?.value,
      segundoNombre: this.formUser.get('segundoNombre')?.value,
      primerApellido: this.formUser.get('primerApellido')?.value,
      segundoApellido: this.formUser.get('segundoApellido')?.value,
      numeroIdentificacion: this.formUser.get('docNumber')?.value,
      idTipoIdentificacion: this.formUser.get('docType')?.value,
      telefono: this.formUser.get('phone')?.value,
      email: this.formUser.get('email')?.value,
      direccion: '',
      idBilleteraCBITBank: undefined,
      fechaNacimiento: this.formUser.get('birthDate')?.value,
      fechaExpedicion: this.formUser.get('docDate')?.value,
      ciudadExpedicion: this.formUser.get('docCity')?.value,
      idAnexos: undefined,
    };
    console.log({ newCliente });
    this.clientesService.registrarCliente(newCliente).subscribe({
      next: (response) => {
        console.log({ response });
      },
      error: (error) => {
        console.error({ error });
      },
    });
  }
}
