import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditPreapprovedComponent } from './credit-preapproved.component';

describe('CreditPreapprovedComponent', () => {
  let component: CreditPreapprovedComponent;
  let fixture: ComponentFixture<CreditPreapprovedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditPreapprovedComponent]
    });
    fixture = TestBed.createComponent(CreditPreapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
