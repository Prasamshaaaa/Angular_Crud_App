import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-reagent-consumption',
  templateUrl: './lab-reagent-consumption.component.html',
  styleUrls: ['./lab-reagent-consumption.component.css']
})
export class LabReagentConsumptionComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }

  HandleEnterEvent(id: string): void{
    if(id){
      const elem = document.getElementById(id);
      if(elem){
        elem.focus();
      }
    }
  }

 
}
