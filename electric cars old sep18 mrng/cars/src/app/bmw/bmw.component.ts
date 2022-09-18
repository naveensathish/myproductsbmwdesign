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
      {productId: 1005, productName: 'BMW M8', price: 179999.99, imagePath: 'assets/images/img5.jpg',
      description: '21-inch rear alloy wheels '}
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