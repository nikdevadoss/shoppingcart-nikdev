import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  totalPrice;


  constructor(
    private cartService: CartService,
  ) {
    this.items = this.cartService.getItems()
   }

   addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  removeFromCart(product) {
    window.alert('Product has been removed from cart');
    this.cartService.removeFromCart(product);
  }



  ngOnInit() {
  }

}