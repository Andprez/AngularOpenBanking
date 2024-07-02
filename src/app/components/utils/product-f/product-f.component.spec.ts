import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFComponent } from './product-f.component';

describe('ProductFComponent', () => {
  let component: ProductFComponent;
  let fixture: ComponentFixture<ProductFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFComponent]
    });
    fixture = TestBed.createComponent(ProductFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
