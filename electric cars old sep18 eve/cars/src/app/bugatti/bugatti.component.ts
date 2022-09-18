import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-bugatti',
  templateUrl: './bugatti.component.html',
  styleUrls: ['./bugatti.component.css']
})
export class BugattiComponent implements OnInit {
  bugatti: any;
  cartItems: any;

  constructor(public service: EmpService) {

    this.cartItems = [];

    this.bugatti = [
      {productId: 1006, productName: 'Bugatti ', price: '', imagePath: 'assets/images/img19.jpg',
      description: ' '},

      {productId: 1006, productName: 'Bugatti ', price: '', imagePath: 'assets/images/img20.jpg',
      description: ' '},

    ];

    }
    ngOnInit(): void {
    }
    addToCart(bugattiproduct: any) {
      this.cartItems.push(bugattiproduct);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  
      this.service.addToCart(bugattiproduct);
    }
  
  

}





