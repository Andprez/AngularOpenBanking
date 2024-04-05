import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  productId!: number;
  productDetail?: Product;
  rating?: number;

  constructor(
    private route: ActivatedRoute,
    private generalService: GeneralService) {
    route.params.subscribe((params) => {
      this.productId = params['id'];
    });
  }

  ngOnInit(): void {
    this.generalService.getProduct(this.productId).subscribe({
      next: (data) => {
        this.productDetail = data;
        this.rating = Math.round((data.rating.rate * 100) / 5);
      },
    });
  }
}
