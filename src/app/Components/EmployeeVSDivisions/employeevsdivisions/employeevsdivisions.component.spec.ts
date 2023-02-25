import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeevsdivisionsComponent } from './employeevsdivisions.component';

describe('EmployeevsdivisionsComponent', () => {
  let component: EmployeevsdivisionsComponent;
  let fixture: ComponentFixture<EmployeevsdivisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeevsdivisionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeevsdivisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
