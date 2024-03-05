import { Component, OnInit } from '@angular/core';
import { Checkbox } from '../employee'; 

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  checkbox: Checkbox[]= [];

  datas: Checkbox[] = [
    { employeeid: '1', name: 'Prasamsha', selected: false },
    { employeeid: '2', name: 'Anishma', selected: false },
    { employeeid: '3', name: 'Ganga', selected: false },
    { employeeid: '4', name: 'Pratik', selected: false },
    { employeeid: '5', name: 'Anuraag', selected: false },
  ];

  selectAll = false;
  selectedEmployees: Checkbox[] = [];

  constructor() { }

  ngOnInit() {
  }

  selectAllItems() {
    // for (const data of this.datas) {
    //   data.selected = this.selectAll; //........It updates the selected property of all datas items based on the value of selectAll.
    // }

    this.datas.forEach(item => item.selected = this.selectAll);
    this.updateSelectedEmployees();

  }

  updateSelection(data: Checkbox) {
    data.selected ? this.selectedEmployees.push(data) : this.removeSelectedEmployees(data);
    this.updateSelectedEmployees();
  }

  removeSelectedEmployees(data: Checkbox){
    const index = this.selectedEmployees.findIndex(emp=>emp.employeeid===data.employeeid);
    if(index !== -1) {
      this.selectedEmployees.splice(index,1);
    }
  }
  updateSelectedEmployees() {
    this.selectedEmployees = this.datas.filter(data => data.selected);

    //..if(this.selectedEmployees.length === this.datas.length){
      //..this.selectAll= true;
    //..} else {
     //... this.selectAll = false;
   //... }

   this.selectAll = this.datas.every(data => data.selected);

  }
}
