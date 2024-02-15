import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee, EmployeeInfo } from '../employee';

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

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

    if (this.updateEmployeeData) {
      this.employee = { ...this.updateEmployeeData }; //spread operator is used to create a shallow copy of this.updatedEmployeeData
      this.buttonText = 'Update';
      this.heading = 'Update Employee';
    }

  }

  newEmployee(): void {  //this method is defined to reset the form
    this.submitted = false;
    this.employee = new Employee();  //initialize the new instance of the 'Employee' class to reset the form
  }


  save() {
    if (this.employee.id) {
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
    this.save(); //calls save() method to save the employee
  }

}
