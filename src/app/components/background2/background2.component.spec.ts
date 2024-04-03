import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Background2Component } from './background2.component';

describe('Background2Component', () => {
  let component: Background2Component;
  let fixture: ComponentFixture<Background2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Background2Component]
    });
    fixture = TestBed.createComponent(Background2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
