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

  constructor(private service :FoodServiceService , private router:Router ){}
  ngOnInit(): void {
    debugger;
    this.GetAllFoodsByCategory();
  }

  GetAllFoodsByCategory(){
    this.service.GetAllFoodsByCategory().subscribe(
      (response:any)=>{
        this.FoodItems = response.data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  NavigateRestaurant(categoryId:number){
    this.router.navigate(['/FoodByRestaurant',categoryId]);
  } 

}
