import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-registro',
  templateUrl: './item-registro.component.html',
  styleUrls: ['./item-registro.component.css']
})
export class ItemRegistroComponent {
  @Input() cardTitle!: string;
  @Input() cardText!: string;
  @Input() icon!: string;
  @Input() complete!: boolean;
  @Output() onClickEvent = new EventEmitter();

  click(): void {
    this.onClickEvent.emit();
  }
}
