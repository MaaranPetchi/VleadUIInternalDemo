
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeevsdivisionsService } from 'src/app/Services/EmployeeVsDivisions/employeevsdivisions.service';
import { EmpvsdivcoreService } from 'src/app/Services/EmployeeVsDivisions/Empvsdivcore/empvsdivcore.service';
import { DeleteEmployeevsdivisionsComponent } from '../delete-employeevsdivisions/delete-employeevsdivisions.component';

@Component({
  selector: 'app-employeevsdivisions',
  templateUrl: './employeevsdivisions.component.html',
  styleUrls: ['./employeevsdivisions.component.scss']
})
export class EmployeevsdivisionsComponent {


  displayedColumns: string[] = [
    'EmployeeCode',
    'EmployeeName',
    'Divisions',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog,
    private _empService: EmployeevsdivisionsService,
    private _coreService: EmpvsdivcoreService) { }


  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(DeleteEmployeevsdivisionsComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getEmployeeList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(DeleteEmployeevsdivisionsComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }
}
