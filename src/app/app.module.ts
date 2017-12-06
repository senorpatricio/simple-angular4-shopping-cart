import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from 'app/cart.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingPageComponent,
    CartComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    ProductsService,
    CartService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
