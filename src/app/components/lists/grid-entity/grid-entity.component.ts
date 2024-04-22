import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { EntidadFinancieraService } from 'src/app/services/entidad-financiera.service';

@Component({
  selector: 'app-grid-entity',
  templateUrl: './grid-entity.component.html',
  styleUrls: ['./grid-entity.component.css'],
})
export class GridEntityComponent implements OnInit {
  @Input() txtFilter: string = '';
  @Output() selectedEntity = new EventEmitter<EntidadFinanciera>();
  entities: EntidadFinanciera[] = [];

  ngOnInit(): void {
    this.getEntities();
  }

  constructor(private entidadFinancieraService: EntidadFinancieraService) {}

  getEntities(): void {
    this.entidadFinancieraService.getEntitiesF().subscribe({
      next: (result) => {
        this.entities = result;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  setEntitySelected(entity: EntidadFinanciera): void {
    this.selectedEntity.emit(entity);
  }
}
