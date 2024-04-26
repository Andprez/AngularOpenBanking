import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { TwilioService } from 'src/app/services/twilio.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-otp-banks',
  templateUrl: './otp-banks.component.html',
  styleUrls: ['./otp-banks.component.css'],
})
export class OtpBanksComponent implements OnInit {
  entity: EntidadFinanciera = {} as EntidadFinanciera;
  user: any = {};
  phone: string = '';
  otpUser: string = '';
  otpGenerated: string = '';
  otpError: boolean = false;
  segRestantes!: number;
  minRestantes!: number;
  suscripcionContador!: Subscription;
  twilioActive!: boolean;
  routes = {
    back: '/products/transactions',
    help: '/help',
    voucher: '/transaction/voucher',
  };

  constructor(private router: Router, private twilioService: TwilioService) {}

  ngOnInit(): void {
    this.twilioActive = environment.TWILIO_ACTIVE;
    this.user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : {};
    this.phone = this.user.telefono;
    this.entity = localStorage.getItem('entity')
      ? JSON.parse(localStorage.getItem('entity')!)
      : {};
    this.sendSms();
  }

  setOnDigit(otp: string) {
    this.otpUser = otp;
  }

  sendSms() {
    this.minRestantes = 1;
    this.segRestantes = 59;
    const contador = interval(1000);
    this.suscripcionContador = contador.subscribe(() => {
      this.segRestantes--;
      if (this.segRestantes < 0) {
        this.segRestantes = 59;
        this.minRestantes--;
        if (this.minRestantes < 0) {
          this.minRestantes = 0;
          this.segRestantes = 0;
          this.suscripcionContador.unsubscribe();
        }
      }
    });

    if (this.twilioActive) {
      console.log('Enviando Mensaje');
      this.twilioService.sendSMS(
        this.phone,
        `Tu código de verificación es: ${this.otpGenerated}`
      );
    }
  }

  verifyOtp() {
    if (this.otpUser === this.otpGenerated) {
      console.log('OTP correcto');
      this.goToPage(this.routes.voucher);
    } else {
      console.log('OTP incorrecto');
      this.otpError = true;
    }
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
