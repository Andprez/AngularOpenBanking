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
      console.log("datos: "+data);
    });
    
    this.formLogin = this.formBuilder.group({
      docType: ['', Validators.required],
      docNumber: ['', Validators.required]
    });
  }

  //accion del btn
  login(): void {
    let cliente: any;
    cliente ={
      tipoIdentificacion: this.formLogin.get('docType')?.value,
      numeroIdentificacion: this.formLogin.get('docNumber')?.value
    }
    this.clienteService.getBilletera(cliente).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    });
    console.log(this.formLogin.value);
  }
}
