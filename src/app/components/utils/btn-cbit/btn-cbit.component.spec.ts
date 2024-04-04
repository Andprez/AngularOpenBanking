import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCbitComponent } from './btn-cbit.component';

describe('BtnCbitComponent', () => {
  let component: BtnCbitComponent;
  let fixture: ComponentFixture<BtnCbitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnCbitComponent]
    });
    fixture = TestBed.createComponent(BtnCbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
