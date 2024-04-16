import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTransactionComponent } from './header-transaction.component';

describe('HeaderTransactionComponent', () => {
  let component: HeaderTransactionComponent;
  let fixture: ComponentFixture<HeaderTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTransactionComponent]
    });
    fixture = TestBed.createComponent(HeaderTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
