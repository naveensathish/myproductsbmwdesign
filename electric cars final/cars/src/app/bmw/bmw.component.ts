import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-bmw',
  templateUrl: './bmw.component.html',
  styleUrls: ['./bmw.component.css']
})
export class BmwComponent implements OnInit {
  bmw: any;
  cartItems: any;

  constructor(public service: EmpService) {

    this.cartItems = [];

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
    this.cartItems.push(bmwproduct);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

    this.service.addToCart(bmwproduct);
  }



}