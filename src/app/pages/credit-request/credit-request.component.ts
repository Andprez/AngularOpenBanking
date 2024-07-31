import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { Ciudad } from 'src/app/models/ciudad';
import { ClientesService } from 'src/app/services/clientes.service';
import { LocalizacionService } from 'src/app/services/localizacion.service';
import { Tipo_Cliente } from 'src/app/models/tipo-cliente';
import { ProductoF } from 'src/app/models/producto-f';
import { ProductosFService } from 'src/app/services/productos-f.service';
import { DetallesSolicitudP } from 'src/app/models/detallesSolicitudP';

@Component({
  selector: 'app-credit-request',
  templateUrl: './credit-request.component.html',
  styleUrls: ['./credit-request.component.css']
})
export class CreditRequestComponent implements OnInit {

  tiposCliente!: Tipo_Cliente[];
  ciudades!: Ciudad[];
  selectedEntity!: EntidadFinanciera;
  isLoading = false;
  formValidation!: FormGroup;
  formSolicitudCredito!: FormGroup;
  savedProduct?: ProductoF;
  detalleSolicitud?: DetallesSolicitudP;
  detallesS: any = {};

  routes = {
    back: '/credit/conditions',
    help: '/help',
    creditVerify: '/credit/verify'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productosFService: ProductosFService,
    private LocalizacionService: LocalizacionService,
    private ClientesService: ClientesService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.ClientesService.getTiposCliente().subscribe((result) => {
      this.tiposCliente = result;
    });

    this.LocalizacionService.getCiudades().subscribe({
      next: (result) => {
        this.ciudades = result;
      }
    });

    this.formSolicitudCredito = this.fb.group({
      activLaboral: ['', Validators.required],
      activEconomica: [Validators.pattern('^[A-Za-z]+$'), Validators.required],
      nombreEmpresa: ['', Validators.required],
      ingresosMensuales: [Validators.pattern('^[0-9,$]*$'), Validators.required],
      ciudadDomicilio: ['', Validators.required],
      direccionDomicilio: ['', Validators.required],
      aceptaTyC: ['', Validators.required],
    });
  }

  

  onSubmitCreditRequest(): void {

    // se definen variables a traer al LocalStorage relacionadas con el html
    const activLaboral = this.formSolicitudCredito.value.activLaboral;
    const activEconomica = this.formSolicitudCredito.value.activEconomica;
    const nombreEmpresa = this.formSolicitudCredito.value.nombreEmpresa;
    const ingresosMensuales = this.formSolicitudCredito.value.ingresosMensuales;
    const ciudadDomicilio = this.formSolicitudCredito.value.ciudadDomicilio;
    const direccionDomicilio = this.formSolicitudCredito.value.direccionDomicilio;
    const aceptaTyC = this.formSolicitudCredito.value.aceptaTyC;

    this.detallesS = {"activLaboral": activLaboral, "activEconomica": activEconomica, "nombreEmpresa": nombreEmpresa, "ingresosMensuales": ingresosMensuales, "ciudadDomicilio": ciudadDomicilio, "direccionDomicilio": direccionDomicilio, "aceptaTyC": aceptaTyC};
    localStorage.setItem("detailData", JSON.stringify(this.detallesS));
    console.log("DETALLE SOLICITUD PRODUCTO::::::::", this.detallesS);

  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}



