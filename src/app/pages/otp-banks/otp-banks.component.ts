import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { TipoIdentificacion } from 'src/app/models/tipo-identificacion';
import { Transaction } from 'src/app/models/transaction';
import { ClientesService } from 'src/app/services/clientes.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { RequestBanksService } from 'src/app/services/request-banks.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { TwilioService } from 'src/app/services/twilio.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-otp-banks',
  templateUrl: './otp-banks.component.html',
  styleUrls: ['./otp-banks.component.css'],
})
export class OtpBanksComponent implements OnInit {
  isLoading: boolean = false;
  selectedBank: EntidadFinanciera = {} as EntidadFinanciera;
  processPaymentData: any = {};
  typeDocument: TipoIdentificacion = {} as TipoIdentificacion;
  product: any = {};
  user: any = {};
  marketplace: any = {};
  otpUser: string = '';
  otpGenerated: string = '';
  otpError: boolean = false;
  segRestantes!: number;
  minRestantes!: number;
  suscripcionContador!: Subscription;
  twilioActive!: boolean;
  idOrdenCompraG: number=0;
  transaccion: any={}
  routes = {
    back: '/products/transactions',
    help: '/help',
    voucher: '/transaction/voucher',
  };

  constructor(
    private router: Router,
    private banksService: RequestBanksService,
    private twilioService: TwilioService,
    private clientesService: ClientesService,
    private transaccionService: TransaccionService,
    private notifService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.product = JSON.parse(localStorage.getItem('productSelected') || '{}');
    this.idOrdenCompraG = this.product.ordenCompra.idOrdenCompra;
    console.log("idOrdenCompra:::::"+this.idOrdenCompraG)
    this.notifService.loadingEvent.subscribe((event) => {
      this.isLoading = event;
    })
    this.twilioActive = environment.TWILIO_ACTIVE;
    this.user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : {};
    this.redirect();
  }

  redirect() {
    this.marketplace = JSON.parse(localStorage.getItem('marketplace') || '{}');
    this.product = JSON.parse(localStorage.getItem('productSelected') || '{}');
    this.selectedBank = this.product.entidadF;

    this.processPaymentData = JSON.parse(
      localStorage.getItem('processPayment') || '{}'
    );

    switch (this.selectedBank.nombre) {
      case 'Bancolombia':
        this.processBancolombia();
        break;
      case 'Daviplata':
        this.processDaviplata();
        break;
    }
  }

  processBancolombia() {
    console.log('Bancolombia');
  }

  processDaviplata() {
    this.clientesService
      .getTipoIdentificacion(this.user.idTipoIdentificacion)
      .subscribe({
        next: (typeDocument) => {
          this.typeDocument = typeDocument;
          this.banksService
            .dav_generateOtp(
              this.typeDocument.codigo,
              this.user.numeroIdentificacion
            )
            .subscribe({
              next: (res) => {
                this.otpGenerated = res.otp;
                this.sendSms();
              },
            });
        },
      });
  }

  sendSms() {
    console.log('OTP generado', this.otpGenerated);
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
        this.user.phone,
        `Tu código de verificación es: ${this.otpGenerated}`
      );
    }
  }

  setOnDigit(otp: string) {
    this.otpUser = otp;
  }

  verifyOtp() {
    this.processPaymentData = JSON.parse(
      localStorage.getItem('processPayment') || '{}'
    );
    if (this.otpUser === this.otpGenerated) {
      console.log({
        service: 'verifyOtp',
        processPaymentData: this.processPaymentData,
      });
      this.banksService
        .dav_transferConfirm(
          this.processPaymentData.access_token,
          this.otpGenerated,
          this.processPaymentData.idSessionToken
        )
        .subscribe({
          next: (res) => {
            const transaccion:Transaction={
              idTipo_Transaccion: 3, // 1. Transferencia, 2. Pago, 3. Compra, 4. Crédito
              idEstado: res.codigoError ? 2 : 1, // 1: Correcto, 2: Error
              idProducto: this.product.idProducto,
              idOrdenCompra: this.idOrdenCompraG || 1,
              montoTransaccion: this.marketplace.total,
              destinoPago: this.marketplace.destinoPago.nombre,
              motivo: this.marketplace.motivo,
              idTransaccionAutorizador: res.idTransaccionAutorizador || 'NA',
              numeroAprobacion: res.numeroAprobacion || 'NA',
            };
            console.log("datos de transacción ",transaccion);
            this.transaccionService.createTransaccion(transaccion).subscribe({
              next: (transaction) => {
                let trans = { ...transaction };
                localStorage.setItem('transaction', JSON.stringify(trans));
                this.goToPage(this.routes.voucher);
              }, error: e => {
                console.log("Error al crear la transaccion", e);
              }
            });
          },
        });
    } else {
      console.log('OTP incorrecto');
      this.otpError = true;
    }
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
