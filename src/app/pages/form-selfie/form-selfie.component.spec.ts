import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelfieComponent } from './form-selfie.component';

describe('FormSelfieComponent', () => {
  let component: FormSelfieComponent;
  let fixture: ComponentFixture<FormSelfieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSelfieComponent]
    });
    fixture = TestBed.createComponent(FormSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
