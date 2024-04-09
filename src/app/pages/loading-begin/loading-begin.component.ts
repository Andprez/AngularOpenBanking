import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoIdentificacion } from 'src/app/models/tipo-identificacion';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-loading-begin',
  templateUrl: './loading-begin.component.html',
  styleUrls: ['./loading-begin.component.css']
})
export class LoadingBeginComponent {
  formLogin!: FormGroup;
  tiposIdentificacion!: TipoIdentificacion[];
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
        // if (response) {
        //   this.generalService.setClienteBilletera(response);
        // }
      },
      error: (error) => {
        console.log(error);
        this.clienteExiste = false;
      },
    });
    console.log(this.formLogin.value);
  }
}
