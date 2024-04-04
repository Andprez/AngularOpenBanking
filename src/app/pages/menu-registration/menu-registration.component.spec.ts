import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRegistrationComponent } from './menu-registration.component';

describe('MenuRegistrationComponent', () => {
  let component: MenuRegistrationComponent;
  let fixture: ComponentFixture<MenuRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuRegistrationComponent]
    });
    fixture = TestBed.createComponent(MenuRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
