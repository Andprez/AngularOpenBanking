import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent {
  @Input() cardTitle!: string;
  @Input() icon!: string;
  @Output() onClickEvent = new EventEmitter();

  click(): void {
    this.onClickEvent.emit();
  }
}
