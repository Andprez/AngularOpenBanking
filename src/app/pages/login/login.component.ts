import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoIdentificacion } from 'src/app/models/tipo-identificacion';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../templates/background2.css'],
})
export class LoginComponent implements OnInit {
  routes = {
    register: '/register',
    tyc: '/tyc',
    help: '/help',
  };
  formLogin!: FormGroup;
  formPassword!: FormGroup;

  tiposIdentificacion!: TipoIdentificacion[];
  showPasswordForm: boolean = false;
  clienteExiste: boolean = true;
  loading: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientesService.getTiposIdentificacion().subscribe((data) => {
      this.tiposIdentificacion = data;
    });
    this.formLogin = this.formBuilder.group({
      docType: ['', Validators.required],
      docNumber: ['', Validators.required],
    });
    this.formPassword = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  showPassword(): void {
    if (!this.showPasswordForm) this.showPasswordForm = true;
  }

  login(): void {
    let body = {
      idTipoIdentificacion: this.formLogin.get('docType')?.value,
      numeroIdentificacion: this.formLogin.get('docNumber')?.value,
      password: this.formPassword.get('password')?.value,
    };
    this.clientesService.loginCliente(body).subscribe({
      next: (data) => {
        localStorage.setItem('user', JSON.stringify(data.cliente));
        localStorage.setItem('token', data.token);
        if (data.cliente.idAnexos) {
          this.clientesService.getAnexo(data.cliente.idAnexos).subscribe({
            next: (anexo) => {
              if (
                anexo.fotoCliente &&
                anexo.frenteDocIdentidad &&
                anexo.respaldoDocIdentidad
              ) {
                this.goToPage(this.routes.tyc);
              } else {
                this.goToPage(this.routes.register);
              }
            },
          });
        } else {
          this.goToPage(this.routes.register);
        }
      },
      error: (error) => {
        console.log(error);
        this.clienteExiste = false;
        this.formLogin.reset();
        this.formPassword.reset();
        this.showPasswordForm = false;
      },
    });
  }
  registrarse(): void {
    localStorage.removeItem('user');
    this.goToPage(this.routes.register);
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
