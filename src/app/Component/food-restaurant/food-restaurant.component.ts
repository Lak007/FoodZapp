import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodServiceService } from 'src/Services/food-service.service';

@Component({
  selector: 'app-food-restaurant',
  templateUrl: './food-restaurant.component.html',
  styleUrls: ['./food-restaurant.component.css']
})
export class FoodRestaurantComponent implements OnInit{
  categoryId:number=0;
  restaurtantArray:any[] =[];

  constructor(private activaterouter:ActivatedRoute , private service :FoodServiceService , private router:Router){
    this.activaterouter.params.subscribe((res:any)=>{
      console.log(res);
      this.categoryId = res.id;
    })
  }
  ngOnInit(): void {
    this.getRestaurantByCategoryId();
  }

  getRestaurantByCategoryId(){
    this.service.GetRestaurantByCategoryId(this.categoryId).subscribe(
      (data:any)=>{
        this.restaurtantArray = data.data;
        console.log(this.restaurtantArray);
      }
    ),
    (error:any)=>{
      console.log(error);
    }
  }


  navigatetoRestaurant(restaurantId :string , categoryId:string){
    this.router.navigate(['/FoodsItems',restaurantId,categoryId]);
  }

}
