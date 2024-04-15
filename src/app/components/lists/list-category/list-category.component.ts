import { Component } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css'],
})
export class ListCategoryComponent {
  // TODO: Definir el tipo de dato de la variable por TipoProducto
  categories: any[] = [
    { name: 'Todas', image: 'expand-outline' },
    { name: 'Cuentas', image: 'wallet-outline' },
    { name: 'CDT', image: 'cash-outline' },
    { name: 'Tarjetas', image: 'card-outline' },
  ];
}
