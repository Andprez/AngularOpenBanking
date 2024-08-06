import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { Ciudad } from 'src/app/models/ciudad';
import { Departamento } from 'src/app/models/departamento';
import { ClientesService } from 'src/app/services/clientes.service';
import { LocalizacionService } from 'src/app/services/localizacion.service';
import { Tipo_Cliente } from 'src/app/models/tipo-cliente';
import { ProductoF } from 'src/app/models/producto-f';
import { ProductosFService } from 'src/app/services/productos-f.service';
import { DetallesSolicitudP } from 'src/app/models/detallesSolicitudP';
import { IndicatorComponent } from 'src/app/components/utils/indicator/indicator.component';

@Component({
  selector: 'app-credit-request',
  templateUrl: './credit-request.component.html',
  styleUrls: ['./credit-request.component.css']
})
export class CreditRequestComponent implements OnInit {

  tiposCliente!: Tipo_Cliente[];
  ciudades!: Ciudad[];
  ciudadesPorDep!: Ciudad[];
  departamentos!: Departamento[];
  selectedEntity!: EntidadFinanciera;
  isLoading = false;
  formValidation!: FormGroup;
  formSolicitudCredito!: FormGroup;
  savedProduct?: ProductoF;
  detalleSolicitud?: DetallesSolicitudP;
  detallesS: any = {};
  @ViewChild(IndicatorComponent) indicatorComponent!: IndicatorComponent;


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
    const reqCities = this.LocalizacionService.getCiudades();
    const reqDeps = this.LocalizacionService.getDepartamentos();
    forkJoin([ reqCities, reqDeps]).subscribe({
      next: ([ cities, deps]) => {
        this.ciudades = cities;
        this.departamentos = deps;
      },
    });

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
      activEconomica: ['', Validators.required],
      nombreEmpresa: ['', Validators.required],
      ingresosMensuales: [Validators.pattern('^[0-9,$]*$'), Validators.required],
      deptoDomicilio: ['', Validators.required],
      ciudadDomicilio: ['', Validators.required],
      direccionDomicilio: ['', Validators.required],
      aceptaTyC: ['', Validators.required],
    });
  }

  loadCities($event: any): void {
    let idDep = $event.target.value;
    this.ciudadesPorDep = this.ciudades.filter(
      (city) => city.idDepartamento == idDep
    );
    console.log(this.ciudadesPorDep);
  }

  onSubmitCreditRequest(): void {
    this.goToPage(this.routes.creditVerify)
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



