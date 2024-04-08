import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tyc',
  templateUrl: './tyc.component.html',
  styleUrls: ['./tyc.component.css'],
})
export class TycComponent implements OnInit {
  isChecked: boolean = false;
  error: boolean = false;
  mensajeError: string = 'Servicio no disponible en este momento';

  selectedBank?: any = null;
  totalValue: number = 0;
  tipoDocumento: string = '04';
  numeroIdentificacion: string = '1389123506';
  fromTwilio: string = '';
  toTwilio: string = '';
  linkTyCCliente: string = '';
  linkTyCBilletera: string = '';

  constructor(private generalService: GeneralService, private router: Router) {}

  ngOnInit(): void {
    this.selectedBank = this.generalService.getSelectedBank();
    this.totalValue = this.generalService.getTotalValue();
    if (this.selectedBank.name == 'Bancolombia') {
      this.bancolombiaProcess1();
    }

    // this.fromTwilio = environment.twilio.FROM;
    // this.toTwilio = environment.twilio.TO;
  }

  aceptarTyC($event: any) {
    this.isChecked = $event.target.checked;
  }

  verificationCode() {
    if (this.selectedBank.name == 'Daviplata') {
      this.daviplataProcess();
    } else if (this.selectedBank.name == 'Bancolombia') {
      this.bancolombiaProcess2();
    }
  }
  bancolombiaProcess1() {
    try {
      this.generalService.generateTokenBancolombia().subscribe({
        next: (data: any) => {
          console.log('Data generateTokenBancolombia', data);
          this.generalService.setTokenBancolombia(data.access_token);
          this.generalService.getTyCBancolombia(data.access_token).subscribe({
            next: (data: any) => {
              console.log('Data getTyCBancolombia', data);
              this.linkTyCCliente =
                data.data.termsCondition.clausesCustomer.url;
              this.linkTyCBilletera = data.data.termsCondition.walletTerms.url;
            },
            error: (error: any) => {
              this.error = true;
              this.mensajeError = 'Servicio no disponible en este momento';
            },
          });
        },
      });
    } catch (error) {
      this.error = true;
      this.mensajeError = 'Servicio no disponible en este momento';
    }
  }
  bancolombiaProcess2() {
    this.generalService.intencionCompraBan(this.totalValue).subscribe({
      next: (data: any) => {
        if(data.status != 200){
          this.error = true;
          this.mensajeError = 'Servicio no disponible en este momento';
        }
        console.log('Data intencionCompraBan', data);
        console.log('Status', data.status);
      },
    });
  }

  daviplataProcess() {
    this.generalService.generateToken().subscribe({
      next: (data: any) => {
        console.log('Data setTokenDaviplata', data);
        this.generalService.setTokenDaviplata(data.access_token);
        this.generalService
          .intencionCompraDav(
            this.totalValue,
            this.tipoDocumento,
            this.numeroIdentificacion
          )
          .subscribe({
            next: (data: any) => {
              console.log('Data intencionCompra', data);
              this.generalService.setIdSession_Token(data.idSessionToken);
              this.generalService
                .generarOTP(this.tipoDocumento, this.numeroIdentificacion)
                .subscribe({
                  next: (data: any) => {
                    this.router.navigate(['/otp']);
                    console.log('Data generarOTP', data);
                    this.generalService.setOtp(data.otp);
                    let message = `Tu código de verificación es: ${data.otp}`;
                    console.log('message', message);
                    // this.generalService.sendSMS(this.fromTwilio, this.toTwilio, message).subscribe({
                    //   next: (data: any) => {
                    //     console.log('Data sendSMS', data);
                    //   }, error: (error: any) => {
                    //     console.log('Error al enviar SMS', error);
                    //   }
                    // })
                  },
                  error: (error: any) => {
                    console.log('Error al generar OTP', error);
                  },
                });
            },
            error: (error: any) => {
              console.log('Error al generar intencion de compra', error);
            },
          });
      },
      error: (error: any) => {
        console.log('Error al generar token', error);
      },
    });
  }
}
