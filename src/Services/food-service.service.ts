import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environment/Environment';
import { Register } from 'src/Model/Register.model';
import { User } from 'src/Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor(private http:HttpClient) { }


  GetAllFoodsByCategory():Observable<any>{
    return this.http.get(environment.Apiurl+'GetAllFoodCategory');
  }


  GetRestaurantByCategoryId(categoryId:number):Observable<any>{
    const params = new HttpParams()
    .set('categoryId',categoryId);
    return this.http.get(environment.Apiurl+'GetRestaurantServingByCategoryId',{params});
  }


  GetFoodItemsByrestaurant(RestaurantId:number,categoryId:number):Observable<any>{
    const params = new HttpParams()
    .set('restaurantId',RestaurantId)
    .set('categoryId',categoryId);
    return this.http.get(environment.Apiurl+'GetFoodItemOfRestaurantByCategory',{params});
  }


  getRestaurantById(restaurantId:number):Observable<any>{
    const params = new HttpParams()
    .set('restaurantId',restaurantId);
    return this.http.get(environment.Apiurl+'GetRestaurantByRestaurantId',{params});
  }


  LoginUser(user:User):Observable<any>{
    return this.http.post(environment.Apiurl+'Login',user);
  }


  RegisterUser(registerUser:Register):Observable<any>{
    return this.http.post(environment.Apiurl+'AddNewUser',registerUser);
  }


  GetCartDatabyId(CustomerId:number,restaurantId:number):Observable<any>{
    const params = new HttpParams()
    .set('customerId',CustomerId)
    .set('restaurantId',restaurantId);
    debugger;
    console.log(environment.Apiurl+'GetCartItemsByCustomerIdForRestaurant');
    return this.http.get(environment.Apiurl+'GetCartItemsByCustomerIdForRestaurant',{params});
  }


  AddtoCart(cartData:any):Observable<any>{
    return this.http.post(environment.Apiurl+'AddToCart',cartData);
  }


  RemoveItemfromCart(cartdId:number):Observable<any>{
    const params = new HttpParams()
    .set('cartId',cartdId)
    return this.http.delete(environment.Apiurl+'RemoveItemFromCart',{params});
  }
}


