import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingBeginComponent } from './loading-begin.component';

describe('LoadingBeginComponent', () => {
  let component: LoadingBeginComponent;
  let fixture: ComponentFixture<LoadingBeginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingBeginComponent]
    });
    fixture = TestBed.createComponent(LoadingBeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
