import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit{
  productId!: number;
  productDetail?: Product;
  rating?: number;

  constructor(
    private route: ActivatedRoute,
    private marketplaceService: MarketplaceService) {
    route.params.subscribe((params) => {
      this.productId = params['id'];
    });
  }

  ngOnInit(): void {
    this.marketplaceService.getProduct(this.productId).subscribe({
      next: (data) => {
        this.productDetail = data;
        this.rating = Math.round((data.rating.rate * 100) / 5);
      },
    });
  }
}
