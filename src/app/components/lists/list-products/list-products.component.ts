import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  @Input() mostrarSaldo!:boolean;
  products: any[] = [
    {
      img: '../../../../assets/entidadesF/daviplata.png',
      tipoProd: 'Tarjeta de Crédito',
      montoProd: 3209434
    },
    {
      img: '../../../../assets/entidadesF/ban-bogota.png',
      tipoProd: 'Cuenta de Ahorros',
      montoProd: 3209434
    },
    {
      img: '../../../../assets/entidadesF/bancolombia.png',
      tipoProd: 'Cuenta Corriente',
      montoProd: 3209434
    },
    {
      img: '../../../../assets/entidadesF/nubank.png',
      tipoProd: 'Crédito de Vivienda',
      montoProd: 3209434
    },
    {
      img: '../../../../assets/entidadesF/pibank.png',
      tipoProd: 'Crédito de Vehículo',
      montoProd: 3209434
    }
  ];
}
