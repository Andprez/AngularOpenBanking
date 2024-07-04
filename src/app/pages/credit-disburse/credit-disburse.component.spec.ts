import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDisburseComponent } from './credit-disburse.component';

describe('CreditDisburseComponent', () => {
  let component: CreditDisburseComponent;
  let fixture: ComponentFixture<CreditDisburseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditDisburseComponent]
    });
    fixture = TestBed.createComponent(CreditDisburseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
