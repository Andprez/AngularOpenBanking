import { ComponentFixture, TestBed } from '@angular/core/testing';

import { terminosycondisionesinicioComponent } from './terminosycondisionesinicio.component';

describe('terminosycondisionesinicioComponent', () => {
  let component: terminosycondisionesinicioComponent;
  let fixture: ComponentFixture<terminosycondisionesinicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [terminosycondisionesinicioComponent]
    });
    fixture = TestBed.createComponent(terminosycondisionesinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
