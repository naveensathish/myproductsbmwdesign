import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-mercedes',
  templateUrl: './mercedes.component.html',
  styleUrls: ['./mercedes.component.css']
})
export class MercedesComponent implements OnInit {
  mercedes: any;
  bookings: any;

  constructor(public service: EmpService) {

    this.bookings = [];

    this.mercedes = [
      {productId: 1006, productName: ' Mercedes Benz AMG GT', price: '', imagePath: 'assets/images/m1.jfif',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

      {productId: 1006, productName: 'Mercedes Benz GT 63 AMG  ', price: '', imagePath: 'assets/images/m6.jfif',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

      {productId: 1006, productName: 'Mercedes Benz S-Class ', price: '', imagePath: 'assets/images/m3.jfif',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},


    ];

    }
    ngOnInit(): void {
    }
    addToCart(mercedesproduct: any) {
      this.bookings.push(mercedesproduct);
      localStorage.setItem('bookings', JSON.stringify(this.bookings));
  
      this.service.bookings(mercedesproduct);
    }
}

