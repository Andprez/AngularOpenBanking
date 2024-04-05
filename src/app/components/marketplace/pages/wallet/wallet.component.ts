import { Component } from '@angular/core';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  selectedBank?: any = null;
  total: number = 0;

  //----------Provisionales----------------
  tipoDocumento: string = "01";
  numeroIdentificacion: string = "1134568019";
  idComercio: string = "0010203040";
  idTransaccion: string = "";
  //---------------------------------------

  banks: any[] = [
    {
      name: 'Daviplata',
      img: '../../assets/LogoDaviplata.png',
      balance: Math.floor(Math.random() * 1000000),
      product: 'Pagos daviplata',
    },
    {
      name: 'Bancolombia',
      img: '../../assets/LogoBancolombia.png',
      balance: Math.floor(Math.random() * 1000000),
      product: 'Ahorro a la mano',
    }
  ]

  constructor(
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.total = this.generalService.getTotalValue();
  }

  selectBank(bank: any){
    this.selectedBank = bank;
    this.generalService.setSelectedBank(bank);
  }

  // solicitarOTP(){
  //   this.generalService.generateToken().subscribe({
  //     next: (data: any) => {
  //       this.generalService.setTokenDaviplata(data.access_token);
  //       this.generalService.intencionCompra(this.total, this.tipoDocumento, this.numeroIdentificacion).subscribe({
  //         next: (data: any) => {
  //           this.generalService.setIdSession_Token(data.idSessionToken);
  //           this.generalService.generarOTP(this.tipoDocumento, this.numeroIdentificacion).subscribe({
  //             next: (data: any) => {
  //               this.generalService.setOtp(data.otp);
  //             },
  //             error: (error: any) => {
  //               console.log('Error al generar OTP', error);
  //             }
  //           })
  //         },
  //         error: (error: any) => {
  //           console.log('Error al generar intencion de compra', error);
  //         }
  //       })
  //     },
  //     error: (error: any) => {
  //       console.log('Error al generar token', error);
  //     }
  //   })
  // }
  // generarToken(){
  //   this.generalService.generateToken().subscribe({
  //     next: (data: any) => {
  //       this.generalService.setTokenDaviplata(data.access_token);
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     }
  //   })
  // }

  // intencionCompra(){
  //   this.generalService.intencionCompra(this.total, this.tipoDocumento, this.numeroIdentificacion).subscribe({
  //     next: (data: any) => {
  //       this.generalService.setIdSession_Token(data.idSessionToken);
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     }
  //   })
  // }

  // generarOTP(){
  //   this.generalService.generarOTP(this.tipoDocumento, this.numeroIdentificacion).subscribe({
  //     next: (data: any) => {
  //       this.generalService.setOtp(data.otp);
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     }
  //   })
  // }

  // autorizacionCompra(){
  //   this.idTransaccion = Math.floor(Math.random() * 1000000).toString();
  //   this.generalService.autorizacionCompra(this.idComercio, this.idTransaccion).subscribe({
  //     next: (data: any) => {
  //       console.log(data);
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     }
  //   })
  // }
}
