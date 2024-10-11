import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './Component/foods/foods.component';
import { FoodRestaurantComponent } from './Component/food-restaurant/food-restaurant.component';
import { FoodItemComponent } from './Component/food-item/food-item.component';
import { LoginComponent } from './Component/login/login.component';

const routes: Routes = [
  {
    path:'Login',
    component:LoginComponent
  },
{
  path:'Foods',
  component:FoodsComponent
},

{
  path:'FoodByRestaurant/:id',
  component:FoodRestaurantComponent
},

{
  path:'FoodsItems/:restaurantId/:foodId',
  component:FoodItemComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
