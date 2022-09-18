import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-tesla',
  templateUrl: './tesla.component.html',
  styleUrls: ['./tesla.component.css']
})
export class TeslaComponent implements OnInit {
  tesla: any;
  bookings: any;

  constructor(public service: EmpService) {

    this.bookings = [];

    this.tesla = [
      {productId: 1006, productName: 'Tesla Model S ', price: '', imagePath: 'assets/images/img9.jpg',
      description: 'Battery: 93.4 kWh 800 V lithium-ion'},

      {productId: 1006, productName: 'Tesla Model X ', price: '', imagePath: 'assets/images/img10.jpg',
      description: ' Battery: 93.4 kWh 800 V lithium-ion'},

      {productId: 1006, productName: 'Tesla Model Y ', price: '', imagePath: 'assets/images/img11.jpg',
      description: 'Battery: 93.4 kWh 800 V lithium-ion '},

      {productId: 1006, productName: 'Tesla Model 3 ', price: '', imagePath: 'assets/images/img13.jpg',
      description: 'Battery: 93.4 kWh 800 V lithium-ion '},

    ];

    }
    ngOnInit(): void {
    }
    addToCart(teslaproduct: any) {
      this.bookings.push(teslaproduct);
      localStorage.setItem('bookings', JSON.stringify(this.bookings));
  
      this.service.bookings(teslaproduct);
    }
  
  

}

