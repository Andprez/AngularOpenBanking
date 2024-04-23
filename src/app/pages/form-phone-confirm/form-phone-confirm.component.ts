import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-phone-confirm',
  templateUrl: './form-phone-confirm.component.html',
  styleUrls: [
    './form-phone-confirm.component.css',
    '../../templates/background2.css',
  ],
})
export class FormPhoneConfirmComponent implements OnInit {
  user: any = {};
  phone: string = '';
  editPhone: boolean = false;
  otpGenerated: string = '';
  otpUser: string = '';
  otpError: boolean = false;

  routes = {
    back: '/register/info',
    help: '/help',
    wallet: '/register/wallet',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : {};
    this.phone = this.user.telefono;
    this.otpGenerated = this.generateOtp();
    console.log('OTP generado:', this.otpGenerated);
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

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
