import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent {
  idComercio: string = '';
  idTransaccion: number = 0;
  idTerminal: string = '';
  error: boolean = false;
  mensajeError: string = '';

  formOTP: FormGroup = new FormGroup({
    otp: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^[0-9]*$'),
    ]),
  });
  get otp() {
    return this.formOTP.get('otp');
  }

  constructor(private generalService: GeneralService, private router: Router) {}

  ngOnInit() {
    this.idComercio = '0010203040';
    this.idTransaccion = Math.floor(Math.random() * 1000000);
    this.idTerminal = 'ESB10934';
  }

  validarSoloNumeros(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
    if (
      !/^\d+$/.test(inputChar) ||
      this.formOTP.get('otp')?.value.length == 6
    ) {
      event.preventDefault();
    }
  }

  confirmarCodigo() {
    let otpUser = this.formOTP.get('otp')?.value;
    let otpSystem = this.generalService.getOtp();
    if (otpUser != otpSystem) {
      this.error = true;
      this.mensajeError = 'El código ingresado no es correcto';
      this.formOTP.setValue({ otp: '' });
      return;
    } else {
      this.error = false;
      this.formOTP.setValue({ otp: '' });
      this.generalService
        .autorizacionCompra(
          this.idComercio,
          this.idTransaccion,
          this.idTerminal
        )
        .subscribe({
          next: (data: any) => {
            if (data.estado) {
              this.generalService.setFechaTransaccion(data.fechaTransaccion);
              this.generalService.setNumAprobacion(data.numAprobacion);
              this.generalService.setEstado(data.estado);
              this.generalService.setIdTransaccionAutorizador(
                data.idTransaccionAutorizador
              );
              this.router.navigate(['/voucher']);
            } else {
              this.error = true;
              this.mensajeError = data.error;
            }
            console.log('Data autorizacionCompra', data);
          },
          error: (error: any) => {
            this.error = true;
            this.mensajeError = "Error al autorizar la compra";
            console.log(error);
          },
        });
    }
  }
}
