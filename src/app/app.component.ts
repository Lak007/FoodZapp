import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodApp';

constructor(private route:Router){

}

  getRoute(){
    return this.route.url==='/Login' || this.route.url==='/Register'
  }
}
