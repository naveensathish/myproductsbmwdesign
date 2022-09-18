import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  isUserLogged: boolean;
  cartItems: any;
  productToBeAdded: Subject<any>;

  constructor() { 
    this.cartItems = [];
    this.isUserLogged = false;
    this.productToBeAdded = new Subject();
  }

  addToCart(product: any) {
    this.productToBeAdded.next(product);
    this.cartItems.push(product);
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
