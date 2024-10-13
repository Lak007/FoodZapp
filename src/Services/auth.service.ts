import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.userSubject.asObservable();

  logIn() {
    this.userSubject.next(true); 
  }

  logOut() {
    this.userSubject.next(null); 
  }
}
