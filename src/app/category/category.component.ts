import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../employee'; 
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup;
  showForm: boolean = false;
  SelectedCategory;

  storedItems: Category[] = [];
  

  //.........AngularMultiSelectModule
  dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      category: ['', Validators.required],
      value: ['', Validators.required]
    });

    const storedItemsString = localStorage.getItem('categoryItems');
    if(storedItemsString) {
      this.storedItems = JSON.parse(storedItemsString);
      this.SelectedCategory = this.storedItems ? this.storedItems[0].value : '';
    }

//.......AngularMultiSelectModule

    this.dropdownList = [
      {"id":1,"itemName":"Mercedes"},
      {"id":2, "itemName":"Car"},
      {"id":3, "itemName":"Bus"},
      {"id":4, "itemName":"Van"},
      {"id":5, "itemName":"Taxi"},
      {"id":6, "itemName":"Airplane"},
      {"id":2, "itemName":"Truck"},
      {"id":2, "itemName":"Ship"},
      {"id":2, "itemName":"Car"},
      {"id":2, "itemName":"OtherVehicle"},

    ];

this.selectedItems = [
        {"id":2,"itemName":"Car"},
        {"id":3,"itemName":"Airplane"},
        {"id":4,"itemName":"Taxi"},
        {"id":5,"itemName":"Bus"}
    ];


this.dropdownSettings = { 
          singleSelection: false, 
          text:"Select Countries",
          selectAllText:'Select All',
          unSelectAllText:'UnSelect All',
          enableSearchFilter: true,
          classes:"myclass custom-class"
        };            
  }

  saveCategory() {
    if (this.categoryForm.valid) {
      console.log(this.categoryForm.value);

      const category = this.categoryForm.get('category').value;
      const value = this.categoryForm.get('value').value;

     const formValue = {
      category: category,
      value: value 
     };

      const storedItems = JSON.parse(localStorage.getItem('categoryItems')) || []; // retrieves any previously stored items from local storage under the key 'categoryItems'
      
      this.storedItems.push(formValue);

      localStorage.setItem('categoryItems', JSON.stringify(this.storedItems));

      this.categoryForm.reset();
      this.showForm = false;
    }
  }

value(){
  alert(this.SelectedCategory);
}
  toggleForm() {
    this.showForm = !this.showForm;
  }


  //.....yo vanda tala AngularMultiSelectModule ko code
  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}
OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}
onSelectAll(items: any){
    console.log(items);
}
onDeSelectAll(items: any){
    console.log(items);
}

}
