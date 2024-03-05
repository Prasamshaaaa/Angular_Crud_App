import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-server',
  templateUrl: './ag-server.component.html',
  styleUrls: ['./ag-server.component.css']
})
export class AgServerComponent implements OnInit {


  rowData = [
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    { id: "Tesla", employee_name: "employee_name", employee_salary: 64950, employee_age: 20 },
    
  
  ];
  colDefs: ColDef[] = [

    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'employee_name' },
    { headerName: 'Salary', field: 'employee_salary' },
    { headerName: 'Age', field: 'employee_age' },
    //{ headerName: 'ProfileImage', field: 'profile_image' },

  ];

  constructor(private employeeService: EmployeeService) { 

  }

  ngOnInit() {
    //this.loadEmployeeData();
  }

  loadEmployeeData() {
    this.employeeService.getEmployeesList().subscribe(
      result => {
        this.rowData = result.data;
      },

      error => {
        console.error('Error fetching employee data:', error);
      }
    );
  }

}
