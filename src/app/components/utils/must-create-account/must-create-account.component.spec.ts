import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustCreateAccountComponent } from './must-create-account.component';

describe('MustCreateAccountComponent', () => {
  let component: MustCreateAccountComponent;
  let fixture: ComponentFixture<MustCreateAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MustCreateAccountComponent]
    });
    fixture = TestBed.createComponent(MustCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
