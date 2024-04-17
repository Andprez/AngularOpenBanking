import { Component, Input } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-grid-entity',
  templateUrl: './grid-entity.component.html',
  styleUrls: ['./grid-entity.component.css'],
})
export class GridEntityComponent {
  @Input() filterEntityGrid: string = '';
  entities: EntidadFinanciera[] = [];

  // entities: EntidadFinanciera[] = [
  //   {
  //     nombre: 'Banco Agrario',
  //     nit: '    899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'ban-agrario',
  //   },
  //   {
  //     nombre: 'Bancamía',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'bancamia',
  //   },
  //   {
  //     nombre: 'Banco AV Villas',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'ban-avvillas',
  //   },
  //   {
  //     nombre: 'Banco de Bogotá',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'ban-bogota',
  //   },
  //   {
  //     nombre: 'Bancolombia',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'bancolombia',
  //   },
  //   {
  //     nombre: 'Banco Caja Social BCSC',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'ban-cajasocial',
  //   },
  //   {
  //     nombre: 'Bancoomeva',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'bancoomeva',
  //   },
  //   {
  //     nombre: 'Banco Davivienda',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'ban-davivienda',
  //   },
  //   {
  //     nombre: 'BBVA Colombia',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'bbva',
  //   },
  //   {
  //     nombre: 'Banco Falabella',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'ban-falabella',
  //   },
  //   {
  //     nombre: 'Daviplata',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 2,
  //     imagen: 'daviplata',
  //   },
  //   {
  //     nombre: 'Banco Finandina',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'ban-finandina',
  //   },
  //   {
  //     nombre: 'Nequi',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 2,
  //     imagen: 'nequi',
  //   },
  //   {
  //     nombre: 'Banco GNB Sudameris',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'ban-gnb',
  //   },
  //   {
  //     nombre: 'Banco de Occidente',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'ban-occidente',
  //   },
  //   {
  //     nombre: 'Nubank',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 2,
  //     imagen: 'nubank',
  //   },
  //   {
  //     nombre: 'Banco Pichincha',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'ban-pichincha',
  //   },
  //   {
  //     nombre: 'Pibank',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'pibank',
  //   },
  //   {
  //     nombre: 'Banco Popular',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'ban-popular',
  //   },
  //   {
  //     nombre: 'Scotiabank Colpatria',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'scotiabank',
  //   },
  //   {
  //     nombre: 'Banco W',
  //     nit: '899-999-063-2',
  //     idTipoEntidadFinanciera: 1,
  //     imagen: 'ban-w',
  //   },
  // ];
}
