import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormGroupName,Validators} from '@angular/forms';
import { RecaptchaErrorParameters } from "ng-recaptcha";
import{Router} from '@angular/router'


declare var grecaptcha: any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
registrationForm:FormGroup;
submitted=false;

courseSelect:any;
CountrySelect:any;
StateSelect:any;
CitySelect:any;
  constructor(private formBuilder:FormBuilder ,private router:Router) { }
course=[{cid:1,cName:"MCA"},
{cid:2,cName:"BCA"},
{cid:3,cName:"Btech"},
{cid:4,cName:"Mtech"}];
Country=[{cid:1,cName:"India"},
{cid:2,cName:"USA"},
{cid:3,cName:"NZ"},
{cid:4,cName:"UAE"}];

State=[{cid:1,SName:"Delhi"},
{cid:2,SName:"AP"},
{cid:3,SName:"Hariyana"},
{cid:4,SName:"UP"}];

City=[{cid:1,cName:"New Delhi"},
{cid:2,cName:"Hydrabaad"},
{cid:3,cName:"Dehradun"},
{cid:4,cName:"Agra"}];
  ngOnInit(): void {
    this.registrationForm=this.formBuilder.group({
      firstName: ['',Validators.required],
     
      password:['',Validators.required],
      courseName:['',Validators.required],
      Country:['',Validators.required],
      State:['',Validators.required],
      cityName:['',Validators.required],

    });

  
   
  }


  changeCourse($event)
    {
      this.registrationForm.get('courseName');
    }

    changeCountry($event)
    {
      console.log($event);
    }
    changeState($event)
    {
      console.log($event);
    }
    changeCity($event)
    {   console.log($event);
      
    }


get f(){
  return this.registrationForm.controls;
}
  onSubmit()
  {
    console.log(this.registrationForm.value);
    


  
this.submitted=true;
localStorage.setItem("student" ,JSON.stringify(this.registrationForm.value));

if(this.registrationForm.invalid)
{
  return;
}

  alert("Registration SucessFully");
  this.router.navigate(['/login']);
  }

 
 
}
