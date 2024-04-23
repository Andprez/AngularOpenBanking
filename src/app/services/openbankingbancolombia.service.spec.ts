import { TestBed } from '@angular/core/testing';

import { OpenbankingbancolombiaService } from './openbankingbancolombia.service';

describe('OpenbankingbancolombiaService', () => {
  let service: OpenbankingbancolombiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenbankingbancolombiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
