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
  formLogin!: FormGroup;
  tiposIdentificacion!: TipoIdentificacion[];
  clienteExiste: boolean = true;

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
  }

  //accion del btn
  login(): void {
    let cliente = {
      tipoIdentificacion: this.formLogin.get('docType')?.value,
      numeroIdentificacion: this.formLogin.get('docNumber')?.value,
    };
    this.clienteService.getBilletera(cliente).subscribe({
      next: (response) => {
        console.log(response);
        this.clienteExiste = true;
        if (response) {
          this.router.navigate(['/wallet']);
        }
      },
      error: (error) => {
        console.log(error);
        this.clienteExiste = false;
      },
    });
    console.log(this.formLogin.value);
  }
}
