import { Component, OnInit } from '@angular/core';
import { FormField, FormFieldOption } from '../form-data.model';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DBComponent implements OnInit {

  formFields: FormField[] = [
    {
      id: 'text-field',
      name: 'text-field',
      label: 'Your Name',
      type: 'text',
      initialValue: ''
    },
    {
      id: 'number-field',
      name: 'number-field',
      label: 'Your Age',
      type: 'number',
      initialValue: 0
    },

    {
      id: 'radio-field',
      name: 'radio-field',
      label: 'Your Gender',
      type: 'radio',
      initialValue: 'A',
      options: [
        { label: 'Male', value: 'A' },
        { label: 'Female', value: 'B' }
      ]
    },

    {
      id: 'checkbox-field',
      name: 'checkbox-field',
      label: 'Courses You Have Done',
      type: 'checkbox',
      initialValue: false,
      options: [
        { label: 'Machine Learning', value: false},
        { label: 'Web Development', value: false }
      ]
    },
    
    {
      id: 'select-field',
      name: 'select-field',
      label: 'Your Field of Interest',
      type: 'select',
      initialValue: 'X',
      options: [
        { label: 'Machine Learning', value: 'X' },
        { label: 'Big Data', value: 'Y' },
        { label: 'Software Engineering', value: 'Z' }
      ]
    }
  ];

  // Event handler for field value changes
  onFieldValueChange(value: any, index: number) {
    console.log('Field value changed:', value, 'for field at index', index);
    // Handle field value change here
  }

  onSubmit(){

  alert('Form submitted!');
  console.log('Form data:', this.formFields);
  const initialFieldValues = this.formFields.map(field =>{ return field.initialValue}  );
  console.log('Initial Field Values:', initialFieldValues);

}

  ngOnInit() {
  }

}
