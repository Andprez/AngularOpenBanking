import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-cbit',
  templateUrl: './header-cbit.component.html',
  styleUrls: ['./header-cbit.component.css']
})
export class HeaderCbitComponent {
  @Input() routerLinkBack!: string;
  @Input() routerLinkHelp!: string;
  @Input() showBackButton: boolean = true;
  @Input() showHelpButton: boolean = true;
}
