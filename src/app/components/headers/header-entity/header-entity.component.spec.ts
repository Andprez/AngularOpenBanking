import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEntityComponent } from './header-entity.component';

describe('HeaderEntityComponent', () => {
  let component: HeaderEntityComponent;
  let fixture: ComponentFixture<HeaderEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderEntityComponent]
    });
    fixture = TestBed.createComponent(HeaderEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
