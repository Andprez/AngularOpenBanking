import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-credit-verify',
  templateUrl: './credit-verify.component.html',
  styleUrls: ['./credit-verify.component.css']
})
export class CreditVerifyComponent {
  solicitudData: any={};
  solicitudDataForm: any={};
  routes = {
    back: '/products/transactions',
    help: '/help',
    accept: '',
  };
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('reloaded')) {
      sessionStorage.setItem('reloaded', 'true');
      location.reload();
    }
    //forzar cambios
    // this.cdr.detectChanges();

    // this.creditoData=JSON.parse(localStorage.getItem("detailData")!)
    // console.log("OBJETO CREDITO:::::::",this.creditoData)
    // this.creditDataForm.montoC=this.creditoData.montoCredito;
    // this.creditDataForm.plazoC=this.creditoData.plazo;
    // this.creditDataForm.nombreSubtipoP=this.creditoData.subtipoProducto.nombre;
    // this.creditDataForm.detalleSolicitud=this.creditoData.detallesS;
    // this.creditDataForm.tasaEA=19
    // this.creditDataForm.valorSeguro=2140;
    this.solicitudData = JSON.parse(localStorage.getItem('creditData') || '{}');
    console.log("OBJETO CREDITO:::::::",this.solicitudData); // Acceder a los datos
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
