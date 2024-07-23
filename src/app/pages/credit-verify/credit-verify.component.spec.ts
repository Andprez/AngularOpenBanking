import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditVerifyComponent } from './credit-verify.component';

describe('CreditVerifyComponent', () => {
  let component: CreditVerifyComponent;
  let fixture: ComponentFixture<CreditVerifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditVerifyComponent]
    });
    fixture = TestBed.createComponent(CreditVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
