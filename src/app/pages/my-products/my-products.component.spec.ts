import { ComponentFixture, TestBed } from '@angular/core/testing';

import { myproductsComponent } from './my-products.component';

describe('myproductsComponent', () => {
  let component: myproductsComponent;
  let fixture: ComponentFixture<myproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [myproductsComponent]
    });
    fixture = TestBed.createComponent(myproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
