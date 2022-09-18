import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  title = 'demo';
  constructor(private elementRef: ElementRef, private router : Router) {}
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor = 'black';
    }
  // constructor(private router : Router){}
  goTopage(pageName :string):void{
    this.router.navigate([`${pageName}`]);
  }
  
}
