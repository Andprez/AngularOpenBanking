import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TipoProductoF } from 'src/app/models/tipo-producto-f';
import { ProductosFService } from 'src/app/services/productos-f.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css'],
})
export class ListCategoryComponent implements OnInit {
  @Output() onCategorySelected = new EventEmitter<TipoProductoF>();
  categories: TipoProductoF[] = [{ idTipo_Producto: 0, nombreTipo: 'Todas' }];

  constructor(private productosService: ProductosFService) {}

  ngOnInit(): void {
    this.productosService.getTypesProduct().subscribe({
      next: (response) => {
        this.categories = this.categories.concat(response);
      },
    });
  }

  setCategorySelected(category: TipoProductoF) {
    this.onCategorySelected.emit(category);
  }
}
