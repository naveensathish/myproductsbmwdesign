import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: any;

  constructor() { 
    this.students = [
      {sId: 1, sName:"John",  fees:9000.00, dob:'04-19-1999', course:"Java"},
      {sId: 2, sName:"Smith", fees:8000.00, dob:'05-20-1998', course:"Angular"},
      {sId: 3, sName:"Adam",  fees:7000.00, dob:'06-21-1997', course:"MongoDB"},
      {sId: 4, sName:"Sonu",  fees:9000.00, dob:'07-22-2000', course:"React"},
      {sId: 5, sName:"Irfan", fees:8000.00, dob:'08-21-2001', course:"Python"}
    ];
  }

  ngOnInit(): void {
  }

}
