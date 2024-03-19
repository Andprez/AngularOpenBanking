import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistinfoComponent } from './checklistinfo.component';

describe('ChecklistinfoComponent', () => {
  let component: ChecklistinfoComponent;
  let fixture: ComponentFixture<ChecklistinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklistinfoComponent]
    });
    fixture = TestBed.createComponent(ChecklistinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
