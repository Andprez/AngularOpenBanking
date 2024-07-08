import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {
  @Input() showBackButton: boolean = true;
  @Input() showHelpButton: boolean = true;
  @Output() onClickEventBack = new EventEmitter();
  @Output() onClickEventHelp = new EventEmitter();

  setClickBack(): void {
    this.onClickEventBack.emit();
  }
  setClickHelp(): void {
    this.onClickEventHelp.emit();
  }

}
