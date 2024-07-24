import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TipoProductoF } from 'src/app/models/tipo-producto-f';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  @Input() category: TipoProductoF = {} as TipoProductoF;
  @Output() onCategorySelected = new EventEmitter<TipoProductoF>();
  @Output() onTxtCategory = new EventEmitter<string>();
  setCategorySelected() {
    this.onCategorySelected.emit(this.category);
  }
  setTxtCategory(event: any) {
    this.onTxtCategory.emit(event.target.value);
  }
}
