import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { Ciudad } from 'src/app/models/ciudad';
import { ClientesService} from 'src/app/services/clientes.service';
import { LocalizacionService } from 'src/app/services/localizacion.service';
import { Tipo_Cliente } from 'src/app/models/tipo-cliente';

@Component({
  selector: 'app-credit-request',
  templateUrl: './credit-request.component.html',
  styleUrls: ['./credit-request.component.css']
})
export class CreditRequestComponent {

  tiposCliente!: Tipo_Cliente[];
  ciudades!: Ciudad[];
  selectedEntity!: EntidadFinanciera;
  isLoading = false;
  formValidation!: FormGroup;
  formSolicitudCredito!: FormGroup;

  routes ={
    back:'/login',
    help:'/help',
    creditVerify: '../credit-verify'
  };
  constructor(
    private router: Router,
    private LocalizacionService: LocalizacionService,
    private ClientesService: ClientesService 
  ){}

  ngOnInit(): void {

    this.ClientesService.getTiposCliente().subscribe((result) =>{
        this.tiposCliente = result;
    });

    this.LocalizacionService.getCiudades().subscribe({
      next: (result) =>{
        this.ciudades = result;
      }
    })
}

  goToPage(page: string): void {
    this.router.navigate([page]);
  };

}
