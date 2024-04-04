import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRegistroComponent } from './item-registro.component';

describe('ItemRegistroComponent', () => {
  let component: ItemRegistroComponent;
  let fixture: ComponentFixture<ItemRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemRegistroComponent]
    });
    fixture = TestBed.createComponent(ItemRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
