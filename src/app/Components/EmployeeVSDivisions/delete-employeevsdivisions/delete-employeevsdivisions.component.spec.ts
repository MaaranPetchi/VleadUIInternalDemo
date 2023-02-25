import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeevsdivisionsComponent } from './delete-employeevsdivisions.component';

describe('DeleteEmployeevsdivisionsComponent', () => {
  let component: DeleteEmployeevsdivisionsComponent;
  let fixture: ComponentFixture<DeleteEmployeevsdivisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmployeevsdivisionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEmployeevsdivisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
