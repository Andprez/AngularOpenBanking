import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCbitComponent } from './header-cbit.component';

describe('HeaderCbitComponent', () => {
  let component: HeaderCbitComponent;
  let fixture: ComponentFixture<HeaderCbitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderCbitComponent]
    });
    fixture = TestBed.createComponent(HeaderCbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
