import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmployeecontrollerComponent } from 'src/app/Components/EmployeeController/Components/add-edit-employeecontroller/add-edit-employeecontroller.component';
import { EmployeecontrollerComponent } from 'src/app/Components/EmployeeController/Components/employeecontroller/employeecontroller.component';


const routes: Routes = [{path:'indexemp' , component:EmployeecontrollerComponent},
{path:'add-emp' , component:AddEditEmployeecontrollerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeecontrollerRoutingModule { }
