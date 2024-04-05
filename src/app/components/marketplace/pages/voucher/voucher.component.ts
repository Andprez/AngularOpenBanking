import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit{
  idTransaccion: string = '';
  fechaTransaccion: string = '';
  clientePruebas: any = {};
  comercioPruebas: any = {};
  totalValue: number = 0;
  estado: string = '';
  numAprobacion: string = '';

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    this.idTransaccion = this.generalService.getIdTransaccionAutorizador().toString();
    this.fechaTransaccion = this.generalService.getFechaTransaccion();
    this.clientePruebas = this.generalService.getClientePruebas();
    this.comercioPruebas = this.generalService.getComercioPruebas();
    this.totalValue = this.generalService.getTotalValue();
    this.estado = this.generalService.getEstado();
    this.numAprobacion = this.generalService.getNumAprobacion();
  }
}
