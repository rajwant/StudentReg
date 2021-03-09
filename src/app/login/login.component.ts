import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormGroupName,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import {ServiceAuthService}  from '../service-auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private rout: Router,private ser:ServiceAuthService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      name: ['',Validators.required],
     
      password:['',Validators.required],
    

    });
  }
  onSubmit()
  {
var student_check=JSON.parse(localStorage.getItem("student"));
var loginData=this.loginForm.value;
console.log(student_check);
if(loginData.name==student_check.firstName && loginData.password==student_check.password)
{
  alert("Login sucessFully");
  this.ser.setisactive(true);
  this.rout.navigate(['home'])
}else{
  alert("invalid password or user name  ");
}

  
  }
}
