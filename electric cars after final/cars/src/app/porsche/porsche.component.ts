import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-porsche',
  templateUrl: './porsche.component.html',
  styleUrls: ['./porsche.component.css']
})
export class PorscheComponent implements OnInit {

  porsche: any;
  bookings: any;

  constructor(public service: EmpService) {

    this.bookings = [];

    this.porsche = [
      {productId: 1006, productName: 'Porsche 911 Turbo S ', price: '', imagePath: 'assets/images/p1.jpg',
      description: ' Battery: 93.4 kWh 800 V lithium-ion', },


      {productId: 1006, productName: 'Porsche 911 GT2 RS ', price: '', imagePath: 'assets/images/p2.jpg',
      description: 'Battery: 93.4 kWh 800 V lithium-ion'},

      {productId: 1006, productName: 'Porsche Taycan Turbo S', price: '', imagePath: 'assets/images/p3.jpg',
      description: 'Battery: 93.4 kWh 800 V lithium-ion'},

    ];

    }
    ngOnInit(): void {
    }
    addToCart(porscheproduct: any) {
      this.bookings.push(porscheproduct);
      localStorage.setItem('cartItems', JSON.stringify(this.bookings));
  
      this.service.addToCart(porscheproduct);
    }
  
}


