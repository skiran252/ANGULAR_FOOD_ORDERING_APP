import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public restaurants: any;
  public searchQuery: string = '';
  constructor(private restaurantService: RestaurantService,private router: Router) {}

  ngOnInit(): void {
    this.restaurants = this.restaurantService.getRestaurants().slice();
  }
  onAddToCart(id: string) {
    this.restaurantService.addToCart(id);
  }
  buyInstantly(id: string) {
    this.restaurantService.addToCart(id);
    this.router.navigate(['/cart']);
  }
}
