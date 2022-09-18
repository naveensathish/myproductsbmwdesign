import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  retreivedData: any;
  bookings: any; 

  constructor(public service: EmpService) {
    this.bookings = this.service.bookings;
  }

  ngOnInit(): void {
  }

  showCartItems() {
    this.retreivedData = localStorage.getItem('bookings');
    this.bookings = JSON.parse(this.retreivedData);
  }

}
