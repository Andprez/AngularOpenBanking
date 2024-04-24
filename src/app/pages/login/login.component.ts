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
    dashboard: '/dashboard',
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
    private clienteService: ClientesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clienteService.getTiposIdentificacion().subscribe((data) => {
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
    this.clienteService.loginCliente(body).subscribe({
      next: (response) => {
        localStorage.setItem('user', JSON.stringify(response.cliente));
        localStorage.setItem('token', response.token);
        this.goToPage(this.routes.dashboard);
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
