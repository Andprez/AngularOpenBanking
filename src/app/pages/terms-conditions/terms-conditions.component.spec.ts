import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsConditionsComponent } from './terms-conditions.component';

describe('termsConditionsComponent', () => {
  let component: TermsConditionsComponent;
  let fixture: ComponentFixture<termsConditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [termsConditionsComponent]
    });
    fixture = TestBed.createComponent(termsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
