import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Ciudad } from 'src/app/models/ciudad';
import { Cliente } from 'src/app/models/cliente';
import { TipoIdentificacion } from 'src/app/models/tipo-identificacion';
import { ClientesService } from 'src/app/services/clientes.service';
import { LocalizacionService } from 'src/app/services/localizacion.service';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: [
    './form-registration.component.css',
    '../../templates/background2.css',
  ],
})
export class FormRegistrationComponent {
  formUser!: FormGroup;
  ciudades!: Ciudad[];
  tiposIdentificacion!: TipoIdentificacion[];
  routes = {
    back: '/register',
    help: '/help',
    phoneConfirm: '/register/phone-confirm',
  };

  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService,
    private localizacionService: LocalizacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const reqDocumentTypes = this.clientesService.getTiposIdentificacion();
    const reqLocalizations = this.localizacionService.getCiudades();
    forkJoin([reqDocumentTypes, reqLocalizations]).subscribe({
      next: ([documentTypes, localizations]) => {
        this.tiposIdentificacion = documentTypes;
        this.ciudades = localizations;
      },
    });
    this.formUser = this.formBuilder.group(
      {
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
        address: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        confirmEmail: ['', [Validators.email, Validators.required]],
      },
      { validators: this.compareEmails }
    );
  }

  compareEmails(formUser: FormGroup) {
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
      telefono: '+57' + this.formUser.get('phone')?.value,
      email: this.formUser.get('email')?.value,
      direccion: this.formUser.get('address')?.value,
      fechaNacimiento: this.formUser.get('birthDate')?.value,
      fechaExpedicion: this.formUser.get('docDate')?.value,
      ciudadExpedicion: this.formUser.get('docCity')?.value,
    };
    localStorage.setItem('user', JSON.stringify(newCliente));
    this.goToPage(this.routes.phoneConfirm);
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
