import { ProductsService } from './products.service';
import { Component } from '@angular/core';
import {Product} from './interfaces/product';
import {PRODUCTS} from './mock-products'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping Cart';

  products: Product[];

  constructor(private productsService: ProductsService) {
  }

  getProducts(): void {
    // this.products = this.productsService.getProducts();
    this.productsService.getProducts().then(products => this.products = products);
  }

  noOnInit(): void {
    this.getProducts();
  }

}
