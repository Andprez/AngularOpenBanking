import { Component, Input } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-grid-entity',
  templateUrl: './grid-entity.component.html',
  styleUrls: ['./grid-entity.component.css'],
})
export class GridEntityComponent {
  @Input() textFilter: string = '';
  entities: EntidadFinanciera[] = []

  // entities: EntidadFinanciera[] = [
  //   {
  //     nombre: 'Banco de Bogotá',
  //     imagen: 'bancoBogota',
  //     nit: '133-579-039-5',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Bancolombia',
  //     imagen: 'bancolombia',
  //     nit: '887-278-272-5',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Daviplata',
  //     imagen: 'daviplata',
  //     nit: '843-904-806-3',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Nubank',
  //     imagen: 'nubank',
  //     nit: '385-212-466-1',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Pibank',
  //     imagen: 'pibank',
  //     nit: '354-096-444-3',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Banco de Bogotá',
  //     imagen: 'bancoBogota',
  //     nit: '133-579-039-5',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Bancolombia',
  //     imagen: 'bancolombia',
  //     nit: '887-278-272-5',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Daviplata',
  //     imagen: 'daviplata',
  //     nit: '843-904-806-3',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Nubank',
  //     imagen: 'nubank',
  //     nit: '385-212-466-1',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Pibank',
  //     imagen: 'pibank',
  //     nit: '354-096-444-3',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Banco de Bogotá',
  //     imagen: 'bancoBogota',
  //     nit: '133-579-039-5',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Bancolombia',
  //     imagen: 'bancolombia',
  //     nit: '887-278-272-5',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Daviplata',
  //     imagen: 'daviplata',
  //     nit: '843-904-806-3',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Nubank',
  //     imagen: 'nubank',
  //     nit: '385-212-466-1',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Pibank',
  //     imagen: 'pibank',
  //     nit: '354-096-444-3',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Banco de Bogotá',
  //     imagen: 'bancoBogota',
  //     nit: '133-579-039-5',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Bancolombia',
  //     imagen: 'bancolombia',
  //     nit: '887-278-272-5',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Daviplata',
  //     imagen: 'daviplata',
  //     nit: '843-904-806-3',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Nubank',
  //     imagen: 'nubank',
  //     nit: '385-212-466-1',
  //     idTipoEntidadFinanciera: 1,
  //   },
  //   {
  //     nombre: 'Pibank',
  //     imagen: 'pibank',
  //     nit: '354-096-444-3',
  //     idTipoEntidadFinanciera: 1,
  //   },
  // ];
}
