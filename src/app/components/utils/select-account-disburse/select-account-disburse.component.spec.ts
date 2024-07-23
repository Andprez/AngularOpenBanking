import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAccountDisburseComponent } from './select-account-disburse.component';

describe('SelectAccountDisburseComponent', () => {
  let component: SelectAccountDisburseComponent;
  let fixture: ComponentFixture<SelectAccountDisburseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectAccountDisburseComponent]
    });
    fixture = TestBed.createComponent(SelectAccountDisburseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
