import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditSimulationComponent } from './credit-simulation.component';

describe('CreditSimulationComponent', () => {
  let component: CreditSimulationComponent;
  let fixture: ComponentFixture<CreditSimulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditSimulationComponent]
    });
    fixture = TestBed.createComponent(CreditSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
