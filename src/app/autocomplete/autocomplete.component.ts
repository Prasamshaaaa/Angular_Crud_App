import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
