import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEntityComponent } from './grid-entity.component';

describe('GridEntityComponent', () => {
  let component: GridEntityComponent;
  let fixture: ComponentFixture<GridEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridEntityComponent]
    });
    fixture = TestBed.createComponent(GridEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
