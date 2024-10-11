import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environment/Environment';

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
}
