import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 85025, electric: false },
    { make: "Toyota", model: "Corolla", price: 65864, electric: true },
  ];

  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric", cellRenderer: 'agAnimateShowChangeCellRenderer'},
  ];

  constructor() {}
  
  ngOnInit() {
  }

  //..........For printing the page..............
printPage(){
  window.print();
}

//...........For printing the table only...............

}