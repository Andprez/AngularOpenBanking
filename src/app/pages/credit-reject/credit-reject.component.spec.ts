import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditRejectComponent } from './credit-reject.component';

describe('CreditRejectComponent', () => {
  let component: CreditRejectComponent;
  let fixture: ComponentFixture<CreditRejectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditRejectComponent]
    });
    fixture = TestBed.createComponent(CreditRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
