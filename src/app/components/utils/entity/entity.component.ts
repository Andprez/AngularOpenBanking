import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent {
  @Input() nameImage!: string;
  @Input() nameEntity!: string;;
}
