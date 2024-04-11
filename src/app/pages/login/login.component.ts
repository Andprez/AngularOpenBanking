import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoIdentificacion } from 'src/app/models/tipo-identificacion';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../templates/background2.css']
})
export class LoginComponent implements OnInit{
  formLogin!: FormGroup;
  formPassword!: FormGroup;

  tiposIdentificacion!: TipoIdentificacion[];
  showPasswordForm: boolean = false;
  clienteExiste: boolean = true;
  loading: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClientesService
  ) {}

  ngOnInit(): void {
    this.clienteService.getTiposIdentificacion().subscribe((data) => {
      this.tiposIdentificacion = data;
    });
    this.formLogin = this.formBuilder.group({
      docType: ['', Validators.required],
      docNumber: ['', Validators.required]
    });
    this.formPassword = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login(): void {
    let cliente = {
      tipoIdentificacion: this.formLogin.get('docType')?.value,
      numeroIdentificacion: this.formLogin.get('docNumber')?.value,
    };
    this.clienteService.getBilletera(cliente).subscribe({
      next: (response) => {
        console.log(response);
        this.clienteExiste = true;
        // if (response) {
        //   this.generalService.setClienteBilletera(response);
        // }
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
  showPassword(): void {
    this.showPasswordForm = true;
  }
}
