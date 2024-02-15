import { Component, OnInit } from '@angular/core';   // OnInit is an interface that provides lifecycle hook('ngOnInit') for initializing the component
import { EmployeeService } from '../employee.service';
import { Employee, EmployeeInfo } from '../employee';

@Component({ //decorating the component
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: EmployeeInfo = new EmployeeInfo();   //An instance of EmployeeInfo representing the list of employees
  updated = false;   //A boolean flag indicating whether the employee data is being updated.

  public SelectedEmployee: Employee = new Employee();    //An instance of Employee representing the selected employee for updating.

  private employeeKey = 'employees';

  constructor(public employeeService: EmployeeService) { 

    let emp = new Employee();
    emp.employee_name = "TEST";
    emp.employee_age = "21"
    this.setEmployees(emp);
    let storedData = this.getEmployees();
    console.log(storedData);
  }

  ngOnInit() {
    this.reloadData();  //Calling the reloadData method during the initialization phase.
  }

  reloadData() {

    this.employeeService.getEmployeesList().subscribe(   //make an HTTP request to get the list of employees.
      data => {
        console.log(data);
        this.employees = data;
      },
      error => console.log(error)
    ); // returns observable representing the list of employees
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe( //subscribe method is used to handle the asynchronous response
        data => {
          console.log(data); // executed when DELETE request is successful
          this.reloadData();  // calls it to reload the employee list
        },
        error => console.log(error)
      );
  }

  updateEmployee(id: number) {
    this.updated = true;
    let tempEmp = this.employees.data.find(a => a.id === id);   //Finding the selected employee from the list based on the provided id and updating the SelectedEmployee property.
    if (tempEmp) {
      this.SelectedEmployee = tempEmp;

      //const employeeArray = this.getEmployees();
    }

  }

  getEmployees(): Employee {
    const storedEmployees = localStorage.getItem(this.employeeKey);
    return storedEmployees ? JSON.parse(storedEmployees) : [];
  }

  setEmployees(employees: Employee) {
    localStorage.setItem(this.employeeKey, JSON.stringify(employees));
  }

removeEmployee(employees: Employee) {
  localStorage.removeItem(this.employeeKey);
}

clearEmployee(){
  localStorage.clear();
}

}