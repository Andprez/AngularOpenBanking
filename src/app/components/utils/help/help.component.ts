import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  @Output() onClickEvent = new EventEmitter();

  click(): void {
    this.onClickEvent.emit();
  }
}
