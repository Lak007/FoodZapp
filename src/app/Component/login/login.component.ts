import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/Model/User.model';
import { AuthService } from 'src/Services/auth.service';
import { FoodServiceService } from 'src/Services/food-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform!:FormGroup;
  UserMessage:any;
  constructor(private fb:FormBuilder , private service:FoodServiceService, private router:Router,private auth:AuthService){
    this.loginform = this.fb.group({
      Username:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength]]
    });
  };

  get email() {
    return this.loginform.get('Username');
  }

  get password() {
    return this.loginform.get('password');
  }

  onLogin(){
    if(this.loginform.valid){
      const user:User={
        userName:this.loginform.get('Username')?.value,
        password:this.loginform.get('password')?.value
      }
      //console.log(user);
      this.service.LoginUser(user).subscribe(
        (response:any)=>{
          this.UserMessage = response;
          //console.log(this.UserMessage);
          if(this.UserMessage.data==null){
            alert(response.message);
          }
          else{
            alert('Login Success');
            sessionStorage.clear();
            var UserSession = JSON.stringify(this.UserMessage.data);
            sessionStorage.setItem('User',UserSession);
            this.auth.logIn();
            this.router.navigate(['/Foods']);
          }
        },
       (error:any)=>{
        //console.log(error);
       } 
      )
    }
  };

  navigateRegister(){
    this.router.navigate(['/Register']);
  }
}
