import { Component, Input } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';

@Component({
  selector: 'app-header-entity',
  templateUrl: './header-entity.component.html',
  styleUrls: ['./header-entity.component.css']
})
export class HeaderEntityComponent {
  @Input() routerLinkBack!: string;
  @Input() routerLinkHelp!: string;
  @Input() entity!: EntidadFinanciera;

}
