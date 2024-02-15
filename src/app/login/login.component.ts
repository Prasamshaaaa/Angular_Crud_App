import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
loginForm: FormGroup;
isLoggedIn: boolean = false;
@Output()
public onSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit (){
    if(this.loginForm.valid){
      this.isLoggedIn=true;
      let token = localStorage.getItem("TOKEN");
      if(!token){
        localStorage.setItem("TOKEN","My token is ...");
      }
      this.onSuccess.emit(true);
      this.router.navigate(['/employees']);
      console.log(this.loginForm.value);
    }
  }

}
