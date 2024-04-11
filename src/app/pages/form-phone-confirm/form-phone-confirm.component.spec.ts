import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPhoneConfirmComponent } from './form-phone-confirm.component';

describe('FormPhoneConfirmComponent', () => {
  let component: FormPhoneConfirmComponent;
  let fixture: ComponentFixture<FormPhoneConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPhoneConfirmComponent]
    });
    fixture = TestBed.createComponent(FormPhoneConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
