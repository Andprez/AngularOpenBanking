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
  editPhone: boolean = false;
  phone: string = '';
  otpGenerated: string = '';
  otpUser: string = '';
  otpError: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.phone = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!).telefono
      : '';
    this.otpGenerated = this.generateOtp();
    console.log('OTP generado:', this.otpGenerated);
  }

  changeEditPhone() {
    if (!this.editPhone) this.editPhone = true;
    else {
      let user = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')!)
        : {};
      user.telefono = this.phone;
      localStorage.setItem('user', JSON.stringify(user));
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
      this.router.navigate(['/register/wallet']);
    } else {
      console.log('OTP incorrecto');
      this.otpError = true;
    }
  }
}
