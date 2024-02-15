import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';
  public IsLoggedIn: boolean = false;
  constructor(private router: Router){
    let token = localStorage.getItem("TOKEN");
    if(token){
      this.IsLoggedIn = true;
    }
    else{
      this.IsLoggedIn = false;
    }
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
