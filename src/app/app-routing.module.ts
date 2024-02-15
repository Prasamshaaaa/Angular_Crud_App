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

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: AppComponent },  // parent component ma AuthGuard narakhni
  { path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard,TestAuthGuard] },
  { path: 'add', component: CreateEmployeeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
