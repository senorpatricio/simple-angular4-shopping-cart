import { CartService } from './../cart.service';
import { ProductsService } from '../products.service';
import { Product } from '../interfaces/product';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {
  public recentProduct: Product;
  public cart: Product[] = [];
  quantity: number;
  total: number;
  products: Product[];
  constructor(private productsService: ProductsService) { 
  }

  getProducts(): void {
    this.productsService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.quantity = this.cart.length;
    this.calculateCart();
    console.log(this.cart);
    // console.log(this.quantity);
  }

  calculateCart() {
    this.total = 0;
    for (let i = 0; i < this.cart.length; i++) {
      console.log(this.cart[i].price);
      this.total += this.cart[i].price;
    }
    console.log('Total: ', this.total);
    return this.total;
  }

}
