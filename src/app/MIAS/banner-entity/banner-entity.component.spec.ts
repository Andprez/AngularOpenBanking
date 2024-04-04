import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEntityComponent } from './banner-entity.component';

describe('BannerEntityComponent', () => {
  let component: BannerEntityComponent;
  let fixture: ComponentFixture<BannerEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerEntityComponent]
    });
    fixture = TestBed.createComponent(BannerEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
