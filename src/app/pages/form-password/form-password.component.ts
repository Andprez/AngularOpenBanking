import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: [
    './form-password.component.css',
    '../../templates/background2.css',
  ],
})
export class FormPasswordComponent implements OnInit {
  isLoading: boolean = false;
  cliente: any = {};
  formPassword!: FormGroup;
  routes = {
    back: '/register/phone-confirm',
    help: '/help',
    register: '/register',
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clientesService: ClientesService,
    private notifService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.notifService.loadingEvent.subscribe((event) => {
      this.isLoading = event;
    })
    this.cliente = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : {};
    this.formPassword = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      { validators: this.comparePasswords }
    );
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
    if (this.formPassword.valid) {
      console.log('Contraseñas válidas');
      this.clientesService.registrarCliente(this.cliente).subscribe({
        next: (res) => {
          console.log('Cliente registrado');
          localStorage.setItem('user', JSON.stringify(res.cliente));
          localStorage.setItem('token', res.token);
          let body = {
            idCliente: res.cliente.idCliente,
            password: this.formPassword.get('password')?.value,
          };
          this.clientesService.createBilletera(body).subscribe({
            next: (res) => {
              console.log('Billetera creada');
              this.goToPage(this.routes.register);
            },
            error: (err) => {
              this.clientesService.eliminarCliente(res.cliente.idCliente);
            },
          });
        },
        error: (err) => {
          console.log('Error al registrar cliente');
        },
      });
    } else {
      console.log('Contraseñas inválidas');
    }
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
