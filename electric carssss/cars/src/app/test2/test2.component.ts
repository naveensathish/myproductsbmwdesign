import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  person: any;

  constructor() { 
    this.person = {
      age:25,
      name:"Harsha",
      salary:4545.56,
      hobbies:['Cricket', 'Singing', 'Chatting', 'Eating'],
      address:{doorNo: 125, street:'EAST', city:'Mumbai'}
    };
  }

  ngOnInit(): void {
    console.log("Hi, This is ngOnInit() method");
  }

  showMessage() {
    console.log(this.person);
  }

}
