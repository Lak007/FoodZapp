import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodServiceService } from 'src/Services/food-service.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit{
  categoryId:number=0;
  RestaurantId:number=0;
  FoodItemData:any[]=[];
  restaurantDetails:any='';
  constructor(private activaterouter:ActivatedRoute,private service :FoodServiceService , private router :Router){
    this.activaterouter.params.subscribe((res:any)=>{
      this.categoryId=res.foodId;
      this.RestaurantId=res.restaurantId;
    });
  }
  ngOnInit(): void {
    this.getRestaurantDetailsByid();
    this.GetRestaurantBycategoryandRestaurantId();
  }

  GetRestaurantBycategoryandRestaurantId(){
    this.service.GetFoodItemsByrestaurant(this.RestaurantId,this.categoryId).subscribe(
      (response:any)=>{
        console.log(response);
        this.FoodItemData=response.data;
      }
    ),
    (error:any)=>{
      console.log(error);
    }
  }

  getRestaurantDetailsByid(){
    this.service.getRestaurantById(this.RestaurantId).subscribe(
      (response:any)=>{
        console.log('restaurant',response);
        this.restaurantDetails=response.data;
      },
      (error:any)=>{
        console.log(error);
      }
  )
  };


  addToCart(){
    var data = sessionStorage.getItem('User');
    debugger;
    if(data==null){
      this.router.navigate(['/Login']);
    }
    else{
      
    }
  }



}
