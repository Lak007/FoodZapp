import { JsonPipe } from '@angular/common';
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
  CustomerId:number=0;
  CartResponse:any[]=[];
  totalCartAmount:number=0;

  constructor(private activaterouter:ActivatedRoute,private service :FoodServiceService , private router :Router){
    this.activaterouter.params.subscribe((res:any)=>{
      this.categoryId=res.foodId;
      this.RestaurantId=res.restaurantId;
    });
  }
  ngOnInit(): void {
    debugger;
    var user = sessionStorage.getItem('User');
    var Userdata = user? JSON.parse(user):null;
    //console.log(Userdata);
    if(Userdata?.userId>0){
      this.CustomerId=Userdata.userId;
      //console.log(this.CartResponse);
      this.getCartDataByid();
    }
    this.getRestaurantDetailsByid();
    this.GetRestaurantBycategoryandRestaurantId();

  }

  GetRestaurantBycategoryandRestaurantId(){
    this.service.GetFoodItemsByrestaurant(this.RestaurantId,this.categoryId).subscribe(
      (response:any)=>{
        //console.log(response);
        this.FoodItemData=response.data;
        //console.log(response);
      }
    ),
    (error:any)=>{
      //console.log(error);
    }
  }

  getRestaurantDetailsByid(){
    this.service.getRestaurantById(this.RestaurantId).subscribe(
      (response:any)=>{
        //console.log('restaurant',response);
        this.restaurantDetails=response.data;
      },
      (error:any)=>{
        //console.log(error);
      }
  )
  };

  getCartDataByid(){
    this.service.GetCartDatabyId(this.CustomerId,this.RestaurantId).subscribe(
      (response:any)=>{
        debugger;
        //console.log(response);
        this.CartResponse=response.data;
        this.calculateCartValue(this.CartResponse);
      }
    ),
    (error:any)=>{
      debugger;
      //console.log(error);
      alert('Error while retrieving Cart Data');
    }
  }


  addToCart(itemid:number){
    var data = sessionStorage.getItem('User');
    debugger;
    if(data==null){
      this.router.navigate(['/Login']);
    }
    else{
      const obj={
        "customerId":this.CustomerId,
        "itemId":itemid,
        "quantity":1
      }
      this.service.AddtoCart(obj).subscribe(
        (response:any)=>{
          debugger;
          if(response.result){
            this.getCartDataByid()
            alert('item Added to Cart');
          }
        },
        (error:any)=>{
          debugger;
          alert('Error while Adding Cart');
        }
      );
    }
  }


  calculateCartValue(CartResponse:any[]){
    this.totalCartAmount=0;
    CartResponse.forEach(ele=>{
      this.totalCartAmount += ele.quantity * ele.price;
      //console.log(ele.quantity * ele.price);
    });
  };


  Remove(cartId:number){
    this.service.RemoveItemfromCart(cartId).subscribe(
      (response:any)=>{
        if(response.result){
          alert(response.message);
          this.getCartDataByid();
        }
      },
      (error:any)=>{
        alert('Error while removing the Item');
      }
    )
  }

  DeleteImage(index:number,array:any[]){
    array.splice(index,1);
  }

  DeleteCart(index:number,array:any[]){
    array.splice(index,1);
  }

}
