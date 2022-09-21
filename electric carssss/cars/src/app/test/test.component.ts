import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  age: number;
  name: String;
  salary: number;

  hobbies: any;
  address: any;

  constructor() {
    this.age = 25;
    this.name = "Harsha";
    this.salary = 4545.56;
    this.hobbies = ['Cricket', 'Singing', 'Chatting', 'Eating'];
    this.address = {doorNo: 125, street:'EAST', city:'Mumbai'};  
   }

  ngOnInit(): void {
    console.log("inside ngOnInit() method");
  }

}
