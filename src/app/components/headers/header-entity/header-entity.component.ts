import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-header-entity',
  templateUrl: './header-entity.component.html',
  styleUrls: ['./header-entity.component.css']
})
export class HeaderEntityComponent {
  @Input() entity!: EntidadFinanciera;
  @Output() onClickEventBack = new EventEmitter();
  @Output() onClickEventHelp = new EventEmitter();

  setClickBack(): void {
    this.onClickEventBack.emit();
  }
  setClickHelp(): void {
    this.onClickEventHelp.emit();
  }
}
