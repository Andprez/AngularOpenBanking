import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedMessageComponent } from './rejected-message.component';

describe('RejectedMessageComponent', () => {
  let component: RejectedMessageComponent;
  let fixture: ComponentFixture<RejectedMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectedMessageComponent]
    });
    fixture = TestBed.createComponent(RejectedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
