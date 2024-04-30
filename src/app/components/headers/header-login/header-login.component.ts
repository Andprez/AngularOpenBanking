import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent {
  @Output() onClickEventHelp = new EventEmitter();

  setClickHelp(): void {
    this.onClickEventHelp.emit();
  }
}
