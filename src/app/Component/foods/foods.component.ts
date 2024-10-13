import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodServiceService } from 'src/Services/food-service.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit{

  FoodItems:any[]=[];
  loadingFlag:boolean=true;
  UserData:any='';

  constructor(private service :FoodServiceService , private router:Router ){
  }
  ngOnInit(): void {
    const userdata = sessionStorage.getItem('User');
    var user = userdata? JSON.parse(userdata):null;
    if(user!=null){
      this.UserData=user;
    }
    this.GetAllFoodsByCategory();
  }

  GetAllFoodsByCategory(){
    this.service.GetAllFoodsByCategory().subscribe(
      (response:any)=>{
        this.FoodItems = response.data;
        this.FoodItems.forEach(item=>{
          item.imageLoaded=true
        });
        this.loadingFlag=true;
      },
      (error)=>{
        //console.log(error);
        this.loadingFlag=true;

      }
    );
  }

  NavigateRestaurant(categoryId:number){
    this.router.navigate(['/FoodByRestaurant',categoryId]);
  } 

  setImageFalse(i:number,array:any[]){
    array.splice(i,1);
  }


}
