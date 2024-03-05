import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee, EmployeeInfo } from '../employee';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {

  public employee: Employee = new Employee(); //initializing the employee variable with the new instance of the Employee
  submitted = false; //tracks whether the form is submitted or not
  buttonText: string = 'Submit';
  heading: string = 'Create Employee';


  @Input() updateEmployeeData: Employee;

  @Output('update_callback') updateEmployeeCallback = new EventEmitter<object>();

  @Output('send_employeedata') updateEvent: EventEmitter<object> = new EventEmitter<object>();


  constructor(private employeeService: EmployeeService,public router: Router, private _snackBar: MatSnackBar ) { }

  ngOnInit() {

    if (this.updateEmployeeData) {
      this.employee = { ...this.updateEmployeeData }; //spread operator is used to create a shallow copy of this.updatedEmployeeData
      this.buttonText = 'Update';
      this.heading = 'Update Employee';
      let inputElement = document.getElementById("id");
      if(inputElement){
        inputElement['readOnly'] = true;
      }
    }

  }

  newEmployee(): void {  //this method is defined to reset the form
    this.submitted = false;
    this.employee = new Employee();  //initialize the new instance of the 'Employee' class to reset the form
  }


  save() {
    if (this.buttonText === "Update") {
      this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(data => console.log(data),
        error => console.log(error));

    } else {
      this.employeeService.createEmployee(this.employee).subscribe(
        data => console.log(data),
        error => console.log(error)
      );

    }

    this.employee = new Employee();
    this.buttonText = 'Submit';
    this.heading = 'Create Employee';
  }

  onSubmit() {
    this.submitted = true;
    //this.save(); //calls save() method to save the employee
    
  }

  UpdateInLocalStorage() {
    if (this.buttonText === "Update") {

      let response = this.employeeService.updateEmployeeFromLocalStorage(this.employee.id, this.employee);

      this.updateEvent.emit(response);
      this._snackBar.open('Employee updated successfully', 'Close', {
        duration: 3000, // Duration in milliseconds
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['update-snackbar'] // Apply custom CSS class

    });

    }
    else {

      let response = this.employeeService.CreateEmployeeatLocalStorage( this.employee);

      this.updateEvent.emit(response);

      this._snackBar.open('Employee created successfully', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['add-snackbar'] 
    });


      this.router.navigate(["/employees"]);  //create vayepaxi arko page ma jana paryo so navigate gareko

    }

    this.employee = new Employee();
    this.buttonText = 'Submit';
    this.heading = 'Create Employee';
  }

  Discard() {
    this._snackBar.open('Employee Discarded', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['add-snackbar'] ,
  }),

    this.updateEmployeeCallback.emit({

      discardUpdate: true
    });
  }
}
