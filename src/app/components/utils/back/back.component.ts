import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css'],
})
export class BackComponent {
  @Output() onClickEvent = new EventEmitter();

  click(): void {
    this.onClickEvent.emit();
  }
}
