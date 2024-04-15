import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductVerticalComponent } from './list-product-vertical.component';

describe('ListProductVerticalComponent', () => {
  let component: ListProductVerticalComponent;
  let fixture: ComponentFixture<ListProductVerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductVerticalComponent]
    });
    fixture = TestBed.createComponent(ListProductVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
