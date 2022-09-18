import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employees: any; 

  constructor() { 
    this.employees = [
      {empId:1, empName:'Harsha',  salary:4545.45, gender:'M', doj:'05-28-2018', loginId:'harsha123',  password:'password'},
      {empId:2, empName:"Naveen",   salary:5454.54, gender:'M', doj:'06-19-2019', loginId:'naveen123',   password:'password'},
      {empId:3, empName:"Divya Priya", salary:6565.65, gender:'F', doj:'08-21-2021', loginId:'divyapriya123', password:'password'}, 
      {empId:4, empName:"Barath",  salary:5656.56, gender:'M', doj:'07-20-2020', loginId:'barath123',  password:'password'},      
      {empId:5, empName:"Vijay",  salary:6767.67, gender:'M', doj:'09-22-2016', loginId:'vijay123',  password:'password'},
      {empId:6, empName:"Raju",    salary:7676.76, gender:'M', doj:'10-26-2018', loginId:'raju123',    password:'password'},
      {empId:7, empName:"Koushik",  salary:7878.78, gender:'M', doj:'11-24-2019', loginId:'koushik123',  password:'password'},
      {empId:8, empName:"Karthik",  salary:8787.87, gender:'M', doj:'12-25-2020', loginId:'karthik123',  password:'password'}
    ];
    }

  ngOnInit(): void {
  }

  register(regForm: any) {
    this.employees.push(regForm);
    console.log(this.employees);
  }
}
