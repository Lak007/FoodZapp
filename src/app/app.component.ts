import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FoodApp';
  UserData:boolean= false;

constructor(private route:Router,private auth:AuthService){

}
  ngOnInit(): void {
    this.auth.currentUser$.subscribe(user=>{
      if(user!=null){
        this.UserData=true;
      }
    })
  }

  getRoute(){
    return this.route.url==='/Login' || this.route.url==='/Register'
  }


  navigatetoLogin(){
    this.route.navigate(['/Login']);
  }


  logOut(){
    sessionStorage.clear();
    this.auth.logOut();
    this.UserData=false
    this.route.navigate(['/Login']);

  }
}
