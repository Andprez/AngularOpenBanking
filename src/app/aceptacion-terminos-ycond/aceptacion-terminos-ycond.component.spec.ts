import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptacionTerminosYCondComponent } from './aceptacion-terminos-ycond.component';

describe('AceptacionTerminosYCondComponent', () => {
  let component: AceptacionTerminosYCondComponent;
  let fixture: ComponentFixture<AceptacionTerminosYCondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AceptacionTerminosYCondComponent]
    });
    fixture = TestBed.createComponent(AceptacionTerminosYCondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
