import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UnAuthorized } from './unauthorized-component/unauthorized-component';
import { AuthGuard } from 'src/Utilites/Authguards/route-auth-guard';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { TestAuthGuard } from 'src/Utilites/Authguards/test-auth-guard';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgServerComponent } from './ag-server/ag-server.component';
import { CategoryComponent } from './category/category.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MaterialComponent } from './material/material.component';
import { DBComponent } from './db/db.component';
import { ShopComponent } from './shop/shop.component';
import { ReportComponent } from './report/report.component';
import { CartComponent } from './cart/cart.component';
import { LabReagentConsumptionComponent } from './lab-reagent-consumption/lab-reagent-consumption.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AssignMachineComponent } from './assign-machine/assign-machine.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: AppComponent },  // parent component ma AuthGuard narakhni
  { path: 'employees', component: EmployeeListComponent},
  { path: 'add', component: CreateEmployeeComponent},
  { path: 'ag-grid', component: AgGridComponent },
  { path: 'aggg', component: AgServerComponent },
  { path: 'category', component:CategoryComponent},
  { path: 'checkbox', component:CheckboxComponent},
  { path: 'material', component:MaterialComponent},
  { path: 'db', component: DBComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'report', component:ReportComponent},
  { path: 'cart', component:CartComponent},
  { path: 'lab-reagent-consumption', component:LabReagentConsumptionComponent},
  { path: 'autocomplete', component:AutocompleteComponent},
  { path: 'assignmachine', component:AssignMachineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//{ path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard,TestAuthGuard] },
//{ path: 'add', component: CreateEmployeeComponent, canActivate: [AuthGuard] },