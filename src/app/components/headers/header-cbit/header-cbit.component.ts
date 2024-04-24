import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-cbit',
  templateUrl: './header-cbit.component.html',
  styleUrls: ['./header-cbit.component.css']
})
export class HeaderCbitComponent {
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
