import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TycCreditComponent } from './tyc-credit.component';

describe('TycCreditComponent', () => {
  let component: TycCreditComponent;
  let fixture: ComponentFixture<TycCreditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TycCreditComponent]
    });
    fixture = TestBed.createComponent(TycCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
