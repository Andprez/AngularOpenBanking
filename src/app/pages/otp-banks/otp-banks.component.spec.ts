import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpBanksComponent } from './otp-banks.component';

describe('OtpBanksComponent', () => {
  let component: OtpBanksComponent;
  let fixture: ComponentFixture<OtpBanksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpBanksComponent]
    });
    fixture = TestBed.createComponent(OtpBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
