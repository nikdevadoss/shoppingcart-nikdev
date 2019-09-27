import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];
  totalPrice;

  addToCart(product){
    this.items.push(product);
  }
  removeFromCart(product){
    let temp = this.items.indexOf(product);
    this.items.splice(temp, temp + 1);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  total(){
    let total = 0;
    for(let i = 0; i < this.items.length; i++){
      total = this.items[i].price;
    }
    return total;
  }
  constructor(
    private http: HttpClient
  ) { }

}