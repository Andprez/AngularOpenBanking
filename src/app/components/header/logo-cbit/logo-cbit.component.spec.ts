import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LogoCbitComponent } from './logo-cbit.component';

describe('LogoCbitComponent', () => {
  let component: LogoCbitComponent;
  let fixture: ComponentFixture<LogoCbitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoCbitComponent]
    });
    fixture = TestBed.createComponent(LogoCbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
