import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit{
  transaccion!: Transaction;
  clientePruebas: any;
  comercioPruebas: any;

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    this.transaccion = this.generalService.getTransaccion();
    this.clientePruebas = this.generalService.getClientePruebas();
    this.comercioPruebas = this.generalService.getComercioPruebas();
  }
}
