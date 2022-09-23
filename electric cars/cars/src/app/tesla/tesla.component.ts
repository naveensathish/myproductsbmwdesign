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
      {productId: 1006, productName: 'Tesla Model S ', price: '', imagePath: 'assets/images/t2.jpg',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

      {productId: 1006, productName: 'Tesla Model X ', price: '', imagePath: 'assets/images/tex.jfif',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

      {productId: 1006, productName: 'Tesla Model Y ', price: '', imagePath: 'assets/images/te2.jfif',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

      {productId: 1006, productName: 'Tesla Model 3 ', price: '', imagePath: 'assets/images/tm3.jfif',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

    ];

    }
    ngOnInit(): void {
    }
    addToBookings(teslaproduct: any) {
      this.bookings.push(teslaproduct);
      localStorage.setItem('bookings', JSON.stringify(this.bookings));
  
      this.service.addToBookings(teslaproduct);
    }
  
  

}

