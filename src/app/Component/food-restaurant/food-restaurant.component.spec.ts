import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRestaurantComponent } from './food-restaurant.component';

describe('FoodRestaurantComponent', () => {
  let component: FoodRestaurantComponent;
  let fixture: ComponentFixture<FoodRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
