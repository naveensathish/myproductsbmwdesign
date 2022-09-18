import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  isUserLogged: boolean;
  bookings: any;
  productToBeAdded: Subject<any>;

  constructor() { 
    this.bookings = [];
    this.isUserLogged = false;
    this.productToBeAdded = new Subject();
  }

  addToCart(product: any) {
    this.productToBeAdded.next(product);
    this.bookings.push(product);
  }

  getForCart() {
    return this.productToBeAdded.asObservable();
  }

  public setUserLoggedIn(): void {
    this.isUserLogged = true;
  }

  public getUserLogged(): any {
    return this.isUserLogged;
  }

  //logout
  public setUserLoggedOut(): void {
    this.isUserLogged = false;
  }
}
