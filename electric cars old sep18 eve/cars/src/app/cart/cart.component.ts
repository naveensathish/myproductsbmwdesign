import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  retreivedData: any;
  cartItems: any; 

  constructor(public service: EmpService) {
    this.cartItems = this.service.cartItems;
  }

  ngOnInit(): void {
  }

  showCartItems() {
    this.retreivedData = localStorage.getItem('cartItems');
    this.cartItems = JSON.parse(this.retreivedData);
  }

}
