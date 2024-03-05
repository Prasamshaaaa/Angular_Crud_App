import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems, ThisIsAClassThatGivesMenuItems } from './utils/menu-items.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';

  menuItems = new Array<MenuItems>();
  public IsLoggedIn: boolean = false;
  constructor(private router: Router){

    this.generatemenuitems();
    let token = localStorage.getItem("TOKEN");
    if(token){
      this.IsLoggedIn = true;
    }
    else{
      this.IsLoggedIn = false;
    }
  }
  generatemenuitems() {
    // const add = new MenuItems();
    // add.routerLink = 'add';
    // add.value = 'Add';

    // const employees  = new MenuItems();
    // employees.routerLink = 'employees';
    // employees.value = 'Employees';

    // const grid = new MenuItems();
    // grid.routerLink = 'grid';
    // grid.value = 'Grid';

    // this.menuItems.push(employees);
    // this.menuItems.push(add);
    // this.menuItems.push(grid);
    // console.table(this.menuItems);
    const menuItems = ThisIsAClassThatGivesMenuItems.getMenuItems();
    //You can sort MenuItems after receiving them here.

    this.menuItems = menuItems.sort((a,b) => a.displayOrder - b.displayOrder);
    
  }

  UpdateIsLoggedIn(){
    this.IsLoggedIn = true;
  }

  CheckIsLoggedIn(): boolean{
    let token = localStorage.getItem("TOKEN");
    if(token){
      return true;
    }
    else{
      return false;
    }
  }

  logout() {
    localStorage.removeItem("TOKEN");
    this.router.navigate(['']);
  }
}
