import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';    // Paila yo install garnaparxa

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

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    let date = new Date();
    let momentDate = moment(date).format("YYYY-MM-DD");
    let date2 = new Date();
    let  momentDate2 = moment(date2).add(1,'days').format("YYYY-MM-DD");
   let booleanResult = moment(date).isSame(moment(date2).format("YYYY-MM-DD"));
   //alert(booleanResult);
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      birthdate: [moment().format('YYYY-MM-DD') , Validators.required]
    });
  

  this.loginForm.get('birthdate').valueChanges.subscribe(data => {
    let formattedDateTime = moment(this.loginForm.get('birthdate').value).format('YYYY-MM-DD HH:mm:ss');
    console.log(formattedDateTime);

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
