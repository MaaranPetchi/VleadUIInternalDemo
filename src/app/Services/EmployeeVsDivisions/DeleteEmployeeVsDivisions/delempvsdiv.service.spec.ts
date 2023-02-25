import { TestBed } from '@angular/core/testing';

import { DelempvsdivService } from './delempvsdiv.service';

describe('DelempvsdivService', () => {
  let service: DelempvsdivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelempvsdivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
