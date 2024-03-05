import { Component, OnInit } from '@angular/core';   // OnInit is an interface that provides lifecycle hook('ngOnInit') for initializing the component
import { EmployeeService } from '../employee.service';
import { Employee, EmployeeInfo } from '../employee';
import * as XLSX from 'xlsx';

@Component({ //decorating the component
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];   //An instance of EmployeeInfo representing the list of employees
  filteredEmployees: Employee[] = [];
  updated = false;   //A boolean flag indicating whether the employee data is being updated.

  public SelectedEmployee: Employee = new Employee();    //An instance of Employee representing the selected employee for updating.

  private employeeKey = 'employees';
  public SelectedFilter: string = "-1"

  constructor(public employeeService: EmployeeService) {

    let emp = new Employee();
    emp.employee_name = "TEST";
    emp.employee_age = "21"
    this.setEmployees(emp);
    let storedData = this.getEmployees();
    console.log(storedData);
  }

  ngOnInit() {
    this.getDataFromLocalStorage();  //Calling the reloadData method during the initialization phase.
  }

  getDataFromLocalStorage() {
    this.filteredEmployees = this.employees = this.employeeService.getEmployeeListFromLocalStorage();
    this.filterByAge();
    console.log(this.employees);
  }

  reloadData() {

    this.employeeService.getEmployeesList().subscribe(   //make an HTTP request to get the list of employees.
      data => {

        this.employeeService.saveEmployeeListToLocalStorage(data.data);
        console.log(data);
        this.employees = data.data;
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

  deleteEmployeeFromLocalStorage(id: number) {
    this.employees = this.employeeService.deleteEmployeeFromLocalStorage(id);
  }

  updateEmployee(id: number) {
    this.updated = true;
    let tempEmp = this.employees.find(a => a.id === id);   //Finding the selected employee from the list based on the provided id and updating the SelectedEmployee property.
    if (tempEmp) {
      this.SelectedEmployee = tempEmp;

      //const employeeArray = this.getEmployees();
    }
  }

  updateEmployeeFromLocalStorage(id: number, value: any) {
    this.employees = this.employeeService.updateEmployeeFromLocalStorage(id, value);
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

  clearEmployee() {
    localStorage.clear();
  }

  Updatecallback($event) {

    if ($event) {
      if ($event.discardUpdate === true) {
        this.updated = false;
      }
    }

  }

  handleUpdateEvent(response: any) {

    this.employees = response;
    console.log('Update event received:', response);
    this.updated = false;  //yo chai update garesi feri list dekhina gareko
  }

  handleAddEvent(data: any) {
    this.employees = data;
    console.log('Update event received:', data);
    this.updated = false;
  }

  UpdateAtEdit(employee: Employee) {  //child component ma value reflect garna banako
    this.SelectedEmployee = employee;
    this.updated = true;

  }

  //..........printing the table..............
  printTable() {
    let printContents = document.getElementById('table-container').innerHTML;
    let originalContents = document.body.innerHTML;   //......This is done to restore the original content after printing.

    // Open a new window
    let printWindow = window.open();
    printWindow.document.open();

    // Set the contents of the new window to the table
    printWindow.document.write(`
        <html>
            <head>

                <title>Table Print</title>
                <link rel="stylesheet" type ='text/css' href="../../../../test.css">
                <style>

                </style>
            </head>
            <body onload="window.print();">${printContents}</body>
        </html>
    `);

    printWindow.document.close();

    // Restore the original contents
    document.body.innerHTML = originalContents;
  }

  filterByAge() {
    this.filteredEmployees = this.employees;
    if (this.SelectedFilter !== "-1") {
      this.filteredEmployees = this.employees.filter(employee => employee.employee_age == this.SelectedFilter);
    }
  }
  
  exportToExcel() {
    // Create a new workbook
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    // Convert employee data into Excel worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.employees);

    // Set heading labels
    const headingLabels = ['ID', 'Name', 'Salary', 'Age','Profile Image'];

    // Set heading row
    const headingRow = [];
    for (let i = 0; i < headingLabels.length; i++) {
        const cellAddress = String.fromCharCode(65 + i) + '1'; // Convert column index to Excel column letter (A, B, C, ...)
        ws[cellAddress] = { v: headingLabels[i], t: 's' }; // Set cell value as string
        headingRow.push(cellAddress);
    }

    // Apply cell styles to heading row
    const headingStyle = { font: { bold: true }, alignment: { horizontal: 'center' } };
    for (const cellAddress of headingRow) {
        ws[cellAddress].s = headingStyle;
    }

    // Calculate total salary
    let totalSalary = 0;
    totalSalary = this.employees.reduce((acc,item) =>  acc + parseFloat(item.employee_salary),0);
    // for (const emp of this.employees) {
    //     totalSalary += parseFloat(emp.employee_salary); // Convert string type to number
    // }

    // Add total salary row
    const totalSalaryRow = [['Total Salary', '', totalSalary.toString()]];
    XLSX.utils.sheet_add_aoa(ws, totalSalaryRow, { origin: -1 }); // Add the total salary row to the worksheet

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Employee_List');

    // Generate Excel file and initiate download
    XLSX.writeFile(wb, 'exported_data.xlsx');
}


}
