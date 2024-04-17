import { Component } from '@angular/core';

@Component({
  selector: 'app-list-recommendations',
  templateUrl: './list-recommendations.component.html',
  styleUrls: ['./list-recommendations.component.css'],
})
export class ListRecommendationsComponent {
  recommendations: any[] = [
    {
      img: '../../../../assets/promociones/promocion1.png',
    },
    {
      img: '../../../../assets/promociones/promocion2.png',
    },
    {
      img: '../../../../assets/promociones/promocion3.png',
    },
    {
      img: '../../../../assets/promociones/promocion4.png',
    },
    {
      img: '../../../../assets/promociones/promocion5.png',
    },
    {
      img: '../../../../assets/promociones/promocion6.png',
    },
    {
      img: '../../../../assets/promociones/promocion7.png',
    }
  ];
}
