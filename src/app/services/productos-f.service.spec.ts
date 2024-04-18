import { TestBed } from '@angular/core/testing';

import { ProductosFService } from './productos-f.service';

describe('ProductosFService', () => {
  let service: ProductosFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
