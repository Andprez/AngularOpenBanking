import { Component, Input } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-list-product-vertical',
  templateUrl: './list-product-vertical.component.html',
  styleUrls: ['./list-product-vertical.component.css'],
})
export class ListProductVerticalComponent {
  // TODO: Definir el tipo de dato de la variable por Producto
  products: any[] = [];
  entity!: EntidadFinanciera;
  // products: any[] = [
  //   {
  //     nameImage: 'bancolombia',
  //     nameEntity: 'Bancolombia',
  //     tipoProductoF: 'Cuenta de Ahorros',
  //     saldo: 123456,
  //   },
  //   {
  //     nameImage: 'daviplata',
  //     nameEntity: 'Daviplata',
  //     tipoProductoF: 'Cuenta Corriente',
  //     saldo: 123456,
  //   },
  //   {
  //     nameImage: 'bancolombia',
  //     nameEntity: 'Bancolombia',
  //     tipoProductoF: 'Cuenta de Ahorros',
  //     saldo: 123456,
  //   },
  //   {
  //     nameImage: 'daviplata',
  //     nameEntity: 'Daviplata',
  //     tipoProductoF: 'Cuenta Corriente',
  //     saldo: 123456,
  //   },
  //   {
  //     nameImage: 'bancolombia',
  //     nameEntity: 'Bancolombia',
  //     tipoProductoF: 'Cuenta de Ahorros',
  //     saldo: 123456,
  //   },
  //   {
  //     nameImage: 'daviplata',
  //     nameEntity: 'Daviplata',
  //     tipoProductoF: 'Cuenta Corriente',
  //     saldo: 123456,
  //   },
  //   {
  //     nameImage: 'bancolombia',
  //     nameEntity: 'Bancolombia',
  //     tipoProductoF: 'Cuenta de Ahorros',
  //     saldo: 123456,
  //   },
  //   {
  //     nameImage: 'daviplata',
  //     nameEntity: 'Daviplata',
  //     tipoProductoF: 'Cuenta Corriente',
  //     saldo: 123456,
  //   },
  //   {
  //     nameImage: 'bancolombia',
  //     nameEntity: 'Bancolombia',
  //     tipoProductoF: 'Cuenta de Ahorros',
  //     saldo: 123456,
  //   },
  //   {
  //     nameImage: 'daviplata',
  //     nameEntity: 'Daviplata',
  //     tipoProductoF: 'Cuenta Corriente',
  //     saldo: 123456,
  //   },
  //   {
  //     nameImage: 'bancolombia',
  //     nameEntity: 'Bancolombia',
  //     tipoProductoF: 'Cuenta de Ahorros',
  //     saldo: 123456,
  //   },
  //   {
  //     nameImage: 'daviplata',
  //     nameEntity: 'Daviplata',
  //     tipoProductoF: 'Cuenta Corriente',
  //     saldo: 123456,
  //   },
  // ];
}
