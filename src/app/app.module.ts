import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { UnAuthorized } from './unauthorized-component/unauthorized-component';
import { AuthGuard } from 'src/Utilites/Authguards/route-auth-guard';
import { LoginComponent } from './login/login.component';
import { TestAuthGuard } from 'src/Utilites/Authguards/test-auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UnAuthorized,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,TestAuthGuard],  // it means that the AuthGuard service is provided at the root level of the application
  bootstrap: [AppComponent]
})
export class AppModule { }
