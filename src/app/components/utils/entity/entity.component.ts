import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css'],
})
export class EntityComponent {
  @Input() entity: EntidadFinanciera = {} as EntidadFinanciera;
  @Output() onClickEvent = new EventEmitter<EntidadFinanciera>();

  onClick() {
    this.onClickEvent.emit(this.entity);
  }
}
