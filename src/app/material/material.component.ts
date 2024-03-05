import { Component, OnInit } from '@angular/core';
import { FormData } from '../form-data.model';


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
  
})
export class MaterialComponent implements OnInit{

formData: FormData = {
  name: '',
  fieldofInterest: '',
  reasonForInterest:''
};

formSubmission: Array<FormData> = new Array<FormData>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.formSubmission.push({...this.formData});  //is used to create a shallow copy of the this.formData object. 

    //clear form
    this.formData = {
      name: '',
      fieldofInterest: '',
      reasonForInterest: ''
    };
  }

}
