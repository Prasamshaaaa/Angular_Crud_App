import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UnAuthorized } from './unauthorized-component/unauthorized-component';
import { AuthGuard } from 'src/Utilites/Authguards/route-auth-guard';
import { LoginComponent } from './login/login.component';
import { TestAuthGuard } from 'src/Utilites/Authguards/test-auth-guard';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgServerComponent } from './ag-server/ag-server.component';
import { CategoryComponent } from './category/category.component';
//import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialComponent } from './material/material.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'
import { MatBadgeModule } from '@angular/material/badge'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressBarModule, MatSelectModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MyInterceptor } from './AppHttpInterceptor';
import { DBComponent } from './db/db.component';
import { ShopComponent } from './shop/shop.component';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { CartComponent } from './cart/cart.component';
import { LabReagentConsumptionComponent } from './lab-reagent-consumption/lab-reagent-consumption.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AssignMachineComponent } from './assign-machine/assign-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UnAuthorized,
    LoginComponent,
    AgGridComponent,
    AgServerComponent,
    CategoryComponent,
    CheckboxComponent,
    MaterialComponent,
    DBComponent,
    ShopComponent,
    ReportComponent,
    CartComponent,
    LabReagentConsumptionComponent,
    AutocompleteComponent,
    AssignMachineComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    MatAutocompleteModule,

    // AngularMultiSelectModule,

  ],

  providers: [AuthGuard, TestAuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptor,
    multi: true
  }],  // it means that the AuthGuard service is provided at the root level of the application

  bootstrap: [AppComponent]
})
export class AppModule { }
