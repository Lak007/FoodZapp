import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/Model/Register.model';
import { FoodServiceService } from 'src/Services/food-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm!:FormGroup;
  Register!:Register;
  ResponseMessage:any;

  constructor(private service:FoodServiceService , private fb :FormBuilder,private router:Router){
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],      
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      mobileNo: ['', [
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ]]
    });
  }

  get userName(){
    return this.registerForm.get('userName');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get mobileNo(){
    return this.registerForm.get('mobileNo');
  }

  onRegister(){
    const register: Register = {
      userId: 0,
      emailId: this.registerForm.get('emailId')?.value,
      mobileNo: this.registerForm.get('mobileNo')?.value,
      password: this.registerForm.get('password')?.value,
      restaurantId: 0,
      role: 'Customer',
      userName: this.registerForm.get('userName')?.value
    }
    this.service.RegisterUser(register).subscribe(
      (response:any)=>{
        this.ResponseMessage =response;
        //console.log(this.ResponseMessage);
        if(this.ResponseMessage.result==false){
          alert(this.ResponseMessage.message);
        }
        else{
          alert('User Successfully Registered');
          this.router.navigate(['/Login']);
        }
      },
      (error:any)=>{
        //console.log(error);
        alert(error.message)
      }
    )
  }

    
}
