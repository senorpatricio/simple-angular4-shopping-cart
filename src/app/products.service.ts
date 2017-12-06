import { Product } from './interfaces/product';
import { Injectable } from '@angular/core';

import {PRODUCTS} from './api/mock-products'

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

}
