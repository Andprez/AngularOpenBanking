import { SubtipoProducto } from './../../models/subtipoProducto';
import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { ProductoF } from 'src/app/models/producto-f';
import { TipoProductoF } from 'src/app/models/tipo-producto-f';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ProductosFService } from 'src/app/services/productos-f.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-select-credit',
  templateUrl: './select-credit.component.html',
  styleUrls: ['./select-credit.component.css']
})
export class SelectCreditComponent implements OnInit {
  typeCredit: any[] = [];
  entityF!: EntidadFinanciera;
  shopping: boolean = false;
  user!: Cliente;
  subtiposProducto!: SubtipoProducto[];
  subtipoProducto?: SubtipoProducto;
  selectedSubtype?: SubtipoProducto;
  savedProduct?: ProductoF;
  selectedEntity!: EntidadFinanciera;
  formCredito!: FormGroup;
  formValidation!: FormGroup;
  showAdditionalFields = false;
  showSuccessMessage = false;
  isLoading = false;
  credit: any = {};

  routes = {
    back: '/products/',
    help: '/help',
    conditions: '/credit/conditions',
  };

  constructor(
    private fb: FormBuilder,
    private productosFService: ProductosFService,
    private router: Router,
    private notifService: NotificationsService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {

    this.notifService.loadingEvent.subscribe((event) => {
      this.isLoading = event;
    })

    this.selectedEntity = JSON.parse(localStorage.getItem('entity') || '{}');

    //Servicio que trae los subtipos de producto filtrando solo los créditos

    //Llama al metodo de productosFService. el .pipe es un operador que nos trae la lista de los subtipos de producto
    this.productosFService.getSubTypesProduct().pipe(
      //map filtra los subtipos y .filter valida que el idTipo_Producto sea igual a 4, el id para los créditos
      map(subtiposProducto => subtiposProducto.filter(subtipo => subtipo.idTipo_Producto === 4))
    ).subscribe({
      next: (subtiposFiltrados) => {
        this.subtiposProducto = subtiposFiltrados;
      },
      error: (error) => {
        console.error(error);
      },
    });

    this.formCredito = this.fb.group({
      credito: ['', Validators.required],
    });

    this.formValidation = this.fb.group({
      montoCredito: [
        null,
        [
          Validators.required,
          Validators.min(2000000), // Monto mínimo de 2.000.000
        ],
      ],
      plazoMeses: [
        null,
        [
          Validators.required,
          Validators.min(6),
          Validators.max(60),
        ],
      ],
    });
  }

  onSubmitCreditType(): void{
    //se definen variables para monto, plazo y tipo crédito relacionadas con el html
    const monto = this.formValidation.value.montoCredito;
    const plazo = this.formValidation.value.plazoMeses;
    const tipoCredito = this.formCredito.value.credito;

    //se llama al servico de obtener subtipo por id para que traiga el nombre del subtipo
    this.productosFService.getSubTypeProductById(tipoCredito).subscribe({
      next: (subtp) =>{
        this.subtipoProducto=subtp;
        this.entityF = JSON.parse(localStorage.getItem('entity')!);
        this.credit = {"montoCredito":monto,"plazo":plazo, "subtipoProductoC": this.subtipoProducto, "entidadF":this.entityF};
        localStorage.setItem("creditData",JSON.stringify(this.credit));
        this.goToPage(this.routes.conditions);
        // console.log("SUBTIPO PRODUCTO::::::::",this.credit);
      },
      error: (e)=>{
        console.error(e)
      },
    });
  }

  onSubmitProduct(): void {
    let idProductSelected = this.formCredito.value.credito;
    this.selectedSubtype = this.subtiposProducto.find(
      (tp) => tp.idSubtipo_Producto == idProductSelected
    );
    this.showAdditionalFields = true;
  }
  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
