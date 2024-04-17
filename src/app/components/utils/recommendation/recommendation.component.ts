import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css'],
})
export class RecommendationComponent {
  @Input() img!: string;
  @Input() routerLink!: string;
}
