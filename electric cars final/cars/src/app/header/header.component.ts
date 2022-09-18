import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItems: any;
  constructor(public service: EmpService) { 
    this.cartItems = [];
    this.service.getForCart().subscribe((result: any) => {this.cartItems.push(result), console.log(result)} );
  }

  ngOnInit(): void {
  }

}
