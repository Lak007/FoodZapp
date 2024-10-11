import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodRestaurantComponent } from './Component/food-restaurant/food-restaurant.component';
import { FoodItemComponent } from './Component/food-item/food-item.component';
import { FoodsComponent } from './Component/foods/foods.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    FoodRestaurantComponent,
    FoodItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
