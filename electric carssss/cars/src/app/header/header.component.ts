import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bookings: any;
  constructor(public service: EmpService) { 
    this.bookings = [];
    this.service.getForCart().subscribe((result: any) => {this.bookings.push(result), console.log(result)} );
  }

  ngOnInit(): void {
  }

}
