import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './Component/foods/foods.component';
import { FoodRestaurantComponent } from './Component/food-restaurant/food-restaurant.component';
import { FoodItemComponent } from './Component/food-item/food-item.component';

const routes: Routes = [
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
