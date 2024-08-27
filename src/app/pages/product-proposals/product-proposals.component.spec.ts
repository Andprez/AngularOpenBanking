import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductProposalsComponent } from './product-proposals.component';

describe('ProductProposalsComponent', () => {
  let component: ProductProposalsComponent;
  let fixture: ComponentFixture<ProductProposalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductProposalsComponent]
    });
    fixture = TestBed.createComponent(ProductProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
