import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-cbit',
  templateUrl: './btn-cbit.component.html',
  styleUrls: ['./btn-cbit.component.css'],
})
export class BtnCbitComponent {
  @Input() type: string = 'button';
  @Input() disabled: boolean = true;
  @Input() text!: string;
  @Input() loading: boolean = false;
  @Output() onClickEvent = new EventEmitter();

  click(): void {
    this.onClickEvent.emit();
  }
}
