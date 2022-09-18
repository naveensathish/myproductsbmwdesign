import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-bmw',
  templateUrl: './bmw.component.html',
  styleUrls: ['./bmw.component.css']
})
export class BmwComponent implements OnInit {
  bmw: any;
  bookings: any;

  constructor(public service: EmpService) {

    this.bookings = [];

    this.bmw = [
      {productId: 1006, productName: 'BMW i4 ', price: '', imagePath: 'assets/images/img14.jpg',
      description: ' '},

      {productId: 1006, productName: 'BMW i7 ', price: '', imagePath: 'assets/images/img15.jpg',
      description: ' '},

      {productId: 1006, productName: 'BMW IX', price: '', imagePath: 'assets/images/img17.jpg',
      description: ' '},

    ];

    }
  ngOnInit(): void {
  }
  addToCart(bmwproduct: any) {
    this.bookings.push(bmwproduct);
    localStorage.setItem('cartItems', JSON.stringify(this.bookings));

    this.service.addToCart(bmwproduct);
  }



}