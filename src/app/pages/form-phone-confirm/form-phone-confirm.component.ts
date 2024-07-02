import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { NotificationsService } from 'src/app/services/notifications.service';
import { TwilioService } from 'src/app/services/twilio.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-form-phone-confirm',
  templateUrl: './form-phone-confirm.component.html',
  styleUrls: [
    './form-phone-confirm.component.css',
    '../../templates/background2.css',
  ],
})
export class FormPhoneConfirmComponent implements OnInit {
  isLoading: boolean = false;
  twilioActive!: boolean;
  tiempoRestante!: number;
  suscripcionContador!: Subscription;
  user: any = {};
  phone: string = '';
  editPhone: boolean = false;
  enabledReenviar = true;
  otpGenerated: string = '';
  otpUser: string = '';
  otpError: boolean = false;

  routes = {
    back: '/register/info',
    help: '/help',
    wallet: '/register/wallet',
  };

  constructor(
    private router: Router,
    private twilioService: TwilioService,
    private notifService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.notifService.loadingEvent.subscribe((event) => {
      this.isLoading = event;
    });
    this.twilioActive = environment.TWILIO_ACTIVE;
    this.user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : {};
    this.phone = this.user.telefono;
    this.otpGenerated = this.generateOtp();
    console.log(this.otpGenerated);
    this.sendSms();
  }

  changeEditPhone() {
    if (!this.editPhone) {
      this.editPhone = true;
      this.phone = this.user.telefono;
    } else {
      this.user.telefono = this.phone;
      localStorage.setItem('user', JSON.stringify(this.user));
      this.editPhone = false;
    }
  }

  generateOtp() {
    let otp = Math.floor(10000 + Math.random() * 100000).toString();
    otp = otp.length < 6 ? '0' + otp : otp;
    return otp;
  }
  setOtpUser(otp: string) {
    this.otpUser = otp;
  }
  verifyOtp() {
    if (this.otpUser === this.otpGenerated) {
      console.log('OTP correcto');
      this.goToPage(this.routes.wallet);
    } else {
      console.log('OTP incorrecto');
      this.otpError = true;
    }
  }

  sendSms() {
    this.tiempoRestante = 30;
    const contador = interval(1000);
    this.enabledReenviar = false;
    this.suscripcionContador = contador.subscribe(() => {
      this.tiempoRestante--;
      if (this.tiempoRestante <= 0) {
        this.enabledReenviar = true;
        this.tiempoRestante = 0;
        this.suscripcionContador.unsubscribe();
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

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
