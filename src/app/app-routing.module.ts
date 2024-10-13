import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './Component/foods/foods.component';
import { FoodRestaurantComponent } from './Component/food-restaurant/food-restaurant.component';
import { FoodItemComponent } from './Component/food-item/food-item.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';

const routes: Routes = [
  
{
  path:'',
  component:FoodsComponent
},
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
},

{
  path:'Register',
  component:RegistrationComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
