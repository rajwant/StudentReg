import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Name:any;
Country:any;
State:any;
City:any;
courseName:any
  constructor() { }

  ngOnInit(): void {
    var student=JSON.parse(localStorage.getItem("student"));

   this.Name=student.firstName;
   this.Country=student.Country;
   this.State=student.State;
   this.City=student.cityName;
   this.courseName=student.courseName;
  }

}
