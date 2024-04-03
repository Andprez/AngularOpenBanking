import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorSigninUserComponent } from './indicator-signin-user.component';

describe('IndicatorSigninUserComponent', () => {
  let component: IndicatorSigninUserComponent;
  let fixture: ComponentFixture<IndicatorSigninUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndicatorSigninUserComponent]
    });
    fixture = TestBed.createComponent(IndicatorSigninUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
