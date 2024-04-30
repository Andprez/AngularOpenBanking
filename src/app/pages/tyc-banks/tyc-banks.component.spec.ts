import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TycBanksComponent } from './tyc-banks.component';

describe('TycBanksComponent', () => {
  let component: TycBanksComponent;
  let fixture: ComponentFixture<TycBanksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TycBanksComponent]
    });
    fixture = TestBed.createComponent(TycBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
