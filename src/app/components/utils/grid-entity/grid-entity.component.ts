import { Component, Input } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-grid-entity',
  templateUrl: './grid-entity.component.html',
  styleUrls: ['./grid-entity.component.css']
})
export class GridEntityComponent {
  @Input() wordFilter?: string;
  entities: EntidadFinanciera[] = [
    {
      nombre: 'Banco de Bogotá',
      imagen: 'bancoBogota',
      nit: '860-002-809-1',
      idTipoEntidadFinanciera: 1
    },
    {
      nombre: 'Bancolombia',
      imagen: 'bancolombia',
      nit: '890-900-877-5',
      idTipoEntidadFinanciera: 1
    },
    {
      nombre: 'Daviplata',
      imagen: 'daviplata',
      nit: '900-003-256-2',
      idTipoEntidadFinanciera: 2
    },
    {
      nombre: 'Nubank',
      imagen: 'nubank',
      nit: '900-003-256-2',
      idTipoEntidadFinanciera: 2
    },
    {
      nombre: 'Pibank',
      imagen: 'pibank',
      nit: '900-003-256-2',
      idTipoEntidadFinanciera: 2
    }
  ]
}
