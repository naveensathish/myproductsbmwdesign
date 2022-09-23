import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  cartItems: any;
  
  constructor(public service: EmpService) {
    
    this.cartItems = [];
    
    this.products = [
      {productId: 1001, productName: 'Nissan Skyline GT-R R34 ', price: 219999.99,  imagePath: 'assets/images/img1.jpg',
      description: '21-inch rear alloy wheels'},

      {productId: 1002, productName: 'Porsche 911 Turbo S ', price: 279999.99, imagePath: 'assets/images/img2.jpg', 
      description: '21-inch rear alloy wheels '},
     
      {productId: 1003, productName: 'Ferrari 488 Spider' , price: 277999.99, imagePath: 'assets/images/img3.jpg',
      description: ' 21-inch rear alloy wheels'},
     
      {productId: 1004, productName: 'Porsche 911 GT2 RS', price: 174999.99, imagePath: 'assets/images/img4.jpg',
      description: ' 21-inch rear alloy wheels'},
     
      {productId: 1005, productName: 'BMW M8', price: 179999.99, imagePath: 'assets/images/img5.jpg',
      description: '21-inch rear alloy wheels '},
     
      {productId: 1006, productName: 'Lambo Sian ', price: 174999.99, imagePath: 'assets/images/img6.jpg',
      description: ' 21-inch rear alloy wheels'},

      {productId: 1006, productName: 'Bugatti Chiron ', price: 777999.99, imagePath: 'assets/images/img7.jpg',
      description: ' 21-inch rear alloy wheels'},

      {productId: 1003, productName: 'Ferrari 269 GT3' , price: 277999.99, imagePath: 'assets/images/img8.jpg',
      description: ' 21-inch rear alloy wheels'},
     
    ];
  }

  ngOnInit(): void {
  }

  addToBookings(product: any) {
    this.cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

    this.service.addToBookings(product);
  }

}