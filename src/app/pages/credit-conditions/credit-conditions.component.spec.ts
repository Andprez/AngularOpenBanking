import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditConditionsComponent } from './credit-conditions.component';

describe('CreditConditionsComponent', () => {
  let component: CreditConditionsComponent;
  let fixture: ComponentFixture<CreditConditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditConditionsComponent]
    });
    fixture = TestBed.createComponent(CreditConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
