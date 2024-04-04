import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermsAcceptComponent } from './terms-accept.component';

describe('TermsAcceptComponent', () => {
  let component: TermsAcceptComponent;
  let fixture: ComponentFixture<TermsAcceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsAcceptComponent]
    });
    fixture = TestBed.createComponent(TermsAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
