import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditApprovedComponent } from './credit-approved.component';

describe('CreditApprovedComponent', () => {
  let component: CreditApprovedComponent;
  let fixture: ComponentFixture<CreditApprovedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditApprovedComponent]
    });
    fixture = TestBed.createComponent(CreditApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
