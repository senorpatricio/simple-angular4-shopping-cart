import { Product } from './interfaces/product';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  cart: Product[] = [];
  quantity: number;
  constructor() { }

  addItem(product: Product) {
    this.cart.push(product);
    this.quantity += 1;
  }

  getCartSize(): void {
    this.quantity = this.cart.length;
    console.log(this.quantity);
  }

}
