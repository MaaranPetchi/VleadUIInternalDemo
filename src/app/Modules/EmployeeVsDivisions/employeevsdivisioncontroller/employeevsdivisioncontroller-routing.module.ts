import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteEmployeevsdivisionsComponent } from 'src/app/Components/EmployeeVSDivisions/delete-employeevsdivisions/delete-employeevsdivisions.component';
import { EmployeevsdivisionsComponent } from 'src/app/Components/EmployeeVSDivisions/employeevsdivisions/employeevsdivisions.component';

const routes: Routes = [{path:'indexempvsemp' , component:EmployeevsdivisionsComponent},
{path:'editemp' , component:DeleteEmployeevsdivisionsComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeevsdivisioncontrollerRoutingModule { }
