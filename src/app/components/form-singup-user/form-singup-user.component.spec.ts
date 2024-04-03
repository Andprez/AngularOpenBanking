import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSingupUserComponent } from './form-singup-user.component';

describe('FormSingupUserComponent', () => {
  let component: FormSingupUserComponent;
  let fixture: ComponentFixture<FormSingupUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSingupUserComponent]
    });
    fixture = TestBed.createComponent(FormSingupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
