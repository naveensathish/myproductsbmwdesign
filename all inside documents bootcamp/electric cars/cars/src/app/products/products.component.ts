import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit{

  products: any;
  cartItems: any;
  name: any;
  constructor(private elementRef: ElementRef, private router : Router, private route: ActivatedRoute) {

  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = 'black';
}

    // constructor(private router : Router){}
    goTopage(pageName :string):void{
      this.router.navigate([`${pageName}`]);
    }

}