import { TestBed } from '@angular/core/testing';

import { EmployeevsdivisionsService } from './employeevsdivisions.service';

describe('EmployeevsdivisionsService', () => {
  let service: EmployeevsdivisionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeevsdivisionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
