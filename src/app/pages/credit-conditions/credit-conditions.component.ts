import { SubtipoProducto } from './../../models/subtipoProducto';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoF } from 'src/app/models/producto-f';
import { environment } from 'src/environments/environment.development';
import { IconModalComponent } from '../icon-modal/icon-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-credit-conditions',
  templateUrl: './credit-conditions.component.html',
  styleUrls: ['./credit-conditions.component.css']
})
export class CreditConditionsComponent implements OnInit {
  creditoDataForm: any={};
  creditData: any={};
  isLoading = false;
  title = 'modal';

  routes = {
    back: '/credit/select',
    help: '/help',
    continue: '/credit/request',
    info: '/help',
    simulation: '/credit/select',
  };

  constructor(
    private router: Router,
    private _matDialog: MatDialog
  ) {}

  openModal():void{
    this._matDialog.open(IconModalComponent, {
      width: '302px',
      height: '295px',
    })
  }
  ngOnInit(): void {
    // window.location.reload();

    // Recuperar datos del local storage
    let storedData = localStorage.getItem("creditData");
    console.log("data::::::::::::",storedData)

    if (storedData) {
      this.creditData = JSON.parse(storedData);
    } else {
      // Si no hay datos en el local storage, inicializar con valores por defecto
      this.creditData = {
        montoCredito: 0,
        plazo: 0,
        subtipoProducto: '',
        tasaMV: 0,
        tasaEA: 0,
        valorSeguro: 0
      };
    }

    // Asignar y actualizar variables
    this.creditData.tasaMV = environment.TASA_MV;
    this.creditData.tasaEA = environment.TASA_EA;
    this.creditData.valorSeguro = environment.VALOR_SEGURO  ;

    // Realizar cálculos
    this.calcularCuotaMensual();
    this.calcularPagoTotal();
    this.calcularVtua();

    // Guardar datos actualizados en el local storage
    localStorage.setItem('creditData', JSON.stringify(this.creditData));

    // Verificar y mostrar los datos actualizados
    console.log('Datos recuperados del local storage:', storedData);
    console.log('Datos actuales en el componente:', this.creditData);
  }
    //Obtener nombre del subtipo de producto
    get subtipoProductoCNombre(): string {
      return this.creditData?.subtipoProductoC?.nombre || '';
    }
  calcularCuotaMensual(): void {
    const montoCredito = this.creditData.montoCredito;
    const plazo = this.creditData.plazo;
    const tasaMV = this.creditData.tasaMV / 100; // Convertir a decimal
    // Calcular la cuota mensual
    const cuotaMensual = (montoCredito * tasaMV * Math.pow(1 + tasaMV, plazo)) / (Math.pow(1 + tasaMV, plazo) - 1);
    // Asignar la cuota mensual al formulario
    this.creditData.cuotaMensual = cuotaMensual;
    // console.log("Cuota Mensual:", cuotaMensual);
  }
  calcularPagoTotal(): void {
    const plazo = this.creditData.plazo;
    const valorSeguro = this.creditData.valorSeguro;
    // Obtener la cuota mensual calculada previamente
    const cuotaMensual = this.creditData.cuotaMensual;
    // Calcular el pago total
    const pagoTotal = (cuotaMensual * plazo) + (valorSeguro * plazo);
    // Asignar el pago total al formulario
    this.creditData.pagoTotal = pagoTotal;
    // console.log("Pago Total:", pagoTotal);
  }
  calcularVtua(): void {
    const montoCredito = this.creditData.montoCredito;
    const tasaEA = this.creditData.tasaEA / 100; // Convertir a decimal
    // Calcular VTUA
    const vtua = montoCredito * tasaEA;
    this.creditData.vtua = vtua;
    // console.log("VTUA:", vtua);
  }
  guardarDatosCredito(): void {
    // Guardar de nuevo en local storage
    localStorage.setItem('creditData', JSON.stringify(this.creditData));
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
