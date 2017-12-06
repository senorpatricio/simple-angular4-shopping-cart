import { Product } from './../interfaces/product';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() quantity: number;
  @Input() cart: Product[];
  @Input() total: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.calculateCart();
    // console.log(this.total);
    // console.log(this.cart);
  }

  // calculateCart() {
  //   let total = 0
  //   for (let i = 0; i < this.cart.length; i++) {
  //     total += this.cart[i].price;
  //   }
  //   console.log(this.total);
  //   return this.total;
  // }

}
