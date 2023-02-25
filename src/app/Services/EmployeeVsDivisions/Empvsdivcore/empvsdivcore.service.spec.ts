import { TestBed } from '@angular/core/testing';

import { EmpvsdivcoreService } from './empvsdivcore.service';

describe('EmpvsdivcoreService', () => {
  let service: EmpvsdivcoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpvsdivcoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
