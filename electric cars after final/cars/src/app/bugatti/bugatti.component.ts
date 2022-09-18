import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-bugatti',
  templateUrl: './bugatti.component.html',
  styleUrls: ['./bugatti.component.css']
})
export class BugattiComponent implements OnInit {
  bugatti: any;
  bookings: any;

  constructor(public service: EmpService) {

    this.bookings = [];

    this.bugatti = [
      {productId: 1006, productName: 'Bugatti Chiron', price: '', imagePath: 'assets/images/img19.jpg',
      description: ' '},

      {productId: 1006, productName: 'Bugatti Divo', price: '', imagePath: 'assets/images/img20.jpg',
      description: ' '},

    ];

    }
    ngOnInit(): void {
    }
    addToCart(bugattiproduct: any) {
      this.bookings.push(bugattiproduct);
      localStorage.setItem('cartItems', JSON.stringify(this.bookings));
  
      this.service.addToCart(bugattiproduct);
    }
  
  

}





