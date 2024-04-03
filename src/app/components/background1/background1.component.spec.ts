import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Background1Component } from './background1.component';

describe('Background1Component', () => {
  let component: Background1Component;
  let fixture: ComponentFixture<Background1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Background1Component]
    });
    fixture = TestBed.createComponent(Background1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
