import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodRestaurantComponent } from './Component/food-restaurant/food-restaurant.component';
import { FoodItemComponent } from './Component/food-item/food-item.component';
import { FoodsComponent } from './Component/foods/foods.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    FoodRestaurantComponent,
    FoodItemComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
