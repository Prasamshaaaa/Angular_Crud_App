import { Component, OnInit } from '@angular/core';
import { MachineAssignment, TestName, MachineName } from '../form-data.model';

@Component({
  selector: 'app-assign-machine',
  templateUrl: './assign-machine.component.html',
  styleUrls: ['./assign-machine.component.css']
})
export class AssignMachineComponent implements OnInit {

  dropdownData:TestName[] = [{"Id" : 1, "Name": "Sodium"},
  {"Id" : 2, "Name": "Potassium"},
  {"Id" : 3, "Name": "Calcium"}];
  SelectedTest: TestName = null;
  

  machineName:MachineName[] = [{"Id" : 1, "Name": "Sysmex"},
  {"Id" : 2, "Name": "Screw"},
  {"Id" : 3, "Name": "Wedge"},
  {"Id" : 4, "Name": "Lever"}];

SelectedMachine: MachineName = null;
  assignments: MachineAssignment[] = [];

  selectedAssignment: MachineAssignment = new MachineAssignment();
  SelectedIndex: number = -1;

isEditing: boolean = false;
//editedIndex: number = -1; // Track the index of the assignment being edited

  constructor() { 
    // this.SelectedTest = this.dropdownData[0];
    // this.SelectedMachine = this.machineName[0];

  }

  ngOnInit() {
  }

  HandleEnterEvent(id: string): void {
    if (id) {
      const elem = document.getElementById(id);
      if (elem) {
        elem.focus();
      }
    }
  }

  

handleAssignButtonClick(): void {
  const findIndex = this.assignments.findIndex(
    assignment => assignment.testName.Id === this.SelectedTest.Id && assignment.isDefault === true && assignment.status === true
  );

  // If an assignment with the same TestName and MachineName exists
  const existingAssignmentIndex = this.assignments.findIndex(
    assignment => assignment.testName.Id === this.SelectedTest.Id && assignment.machineName.Id === this.SelectedMachine.Id
  );

  // If an assignment with the same TestName and MachineName exists
  if (existingAssignmentIndex !== -1) {
    const existingAssignment = this.assignments[existingAssignmentIndex];
    
    // If the existing assignment already has status 'yes', prevent setting status of new assignment as 'yes'
    if (existingAssignment.status === true && findIndex  >= 0 && ( this.isEditing ? findIndex !== this.SelectedIndex : true) && this.selectedAssignment.status === true) {
      alert('Status conflict: The status for the same TestName and MachineName cannot be "yes" if already set.');
      return;
    }
  }

  if (findIndex  >= 0 &&  ( this.isEditing ? findIndex !== this.SelectedIndex : true) && this.selectedAssignment.isDefault === true) {
   
    alert('The new MachineName could not be assigned as default to the same TestName');

    return;

  }

  // Assign the selected machine and test name
  this.selectedAssignment.machineName = this.SelectedMachine;
  this.selectedAssignment.testName = this.SelectedTest;


if(existingAssignmentIndex !==-1 && this.selectedAssignment.isDefault ===true && !this.isEditing){
  alert('Only one machine can be set as default for the same test.');
    return;
}

  // If editing, update the assignment; otherwise, add a new assignment
  if (this.isEditing) {
    this.assignments[this.SelectedIndex] = { ...this.selectedAssignment };

    this.isEditing = false;
    
  } else {
    if(this.selectedAssignment.isDefault === true) {
      this.assignments.forEach(assignment => {
        if(assignment !== this.selectedAssignment){
          this.selectedAssignment.isDefault = false;
        }
      });
    }
    this.assignments.push({ ...this.selectedAssignment });
  }

  // Reset the selected assignment
  this.selectedAssignment = new MachineAssignment();
  this.SelectedIndex = -1;
  this.SelectedMachine = null;
  this.SelectedTest = null;

}

deactivateAssignment(assignment: MachineAssignment):void {
  assignment.status =false;
}

activateAssignment(assignment: MachineAssignment): void {
  // Check if there are already activated assignments with the same Test Name and Machine Name
  const existingActivatedAssignmentIndex = this.assignments.findIndex(a =>
    a.testName.Id === assignment.testName.Id &&
    a.machineName.Id === assignment.machineName.Id &&
    a.status === true
  
  );

  // If there is an existing activated assignment with the same Test Name and Machine Name, prevent activation
  if (existingActivatedAssignmentIndex >= 0 && existingActivatedAssignmentIndex !== this.SelectedIndex) {
    alert('Cannot activate: An assignment with the same Test Name and Machine Name is already activated.');
    return;
  }

  // Activate the assignment if there are no conflicts
  assignment.status = true;
}

editAssignment(assignment: MachineAssignment, index: number): void {
this.SelectedIndex = index;
this.selectedAssignment = {...assignment };
this.isEditing = true;
//this.editedIndex = index;
//this.editedIndex = this.assignments.findIndex(a => a === assignment);
this.SelectedMachine = this.selectedAssignment.machineName;
this.SelectedTest = this.selectedAssignment.testName;

}

}
