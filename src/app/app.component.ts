import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FoodApp';
  UserData:any='';

constructor(private route:Router){

}
  ngOnInit(): void {
    const userdata = sessionStorage.getItem('User');
    var user = userdata? JSON.parse(userdata):null;
    if(user!=null){
      this.UserData=user;
    }
  }

  getRoute(){
    return this.route.url==='/Login' || this.route.url==='/Register'
  }


  navigatetoLogin(){
    this.route.navigate(['Login']);
  }


  logOut(){
    sessionStorage.clear();
    this.route.navigate(['Login']);
  }
}
