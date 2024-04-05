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
  tiposIdentificacion!: TipoIdentificacion[];

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
  }
  login(): void {
    console.log(this.formLogin.value);
  }
}
