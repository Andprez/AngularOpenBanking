import { Component, Input, OnInit } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { EntidadFinancieraService } from 'src/app/services/entidad-financiera.service';

@Component({
  selector: 'app-grid-entity',
  templateUrl: './grid-entity.component.html',
  styleUrls: ['./grid-entity.component.css'],
})
export class GridEntityComponent implements OnInit {
  @Input() txtFilter: string = '';
  entities: EntidadFinanciera[] = [];

  ngOnInit(): void {
    this.getEntities();
  }

  constructor(private entidadFinancieraService: EntidadFinancieraService) {}

  getEntities(): void {
    this.entidadFinancieraService.getEntidadesFinancieras().subscribe({
      next: (result) => {
        this.entities = result;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
