import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconModalComponent } from './icon-modal.component';

describe('IconModalComponent', () => {
  let component: IconModalComponent;
  let fixture: ComponentFixture<IconModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconModalComponent]
    });
    fixture = TestBed.createComponent(IconModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
