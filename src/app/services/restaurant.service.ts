import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurants: any = [
    {
      id: 1,
      restaurant: 'reddys biriyani zone',
      dishName: 'roasted chicken biriyani',
      description: 'Indian Restaurant',
      rating: 4,
      cost: 190,
      quantity: 0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 2,
      restaurant: 'kabablo',
      dishName: 'Cajun spiced chicken',
      description: 'Indian Restaurant',
      rating: 4.1,
      cost: 230,
      quantity: 0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 3,
      restaurant: 'main land china',
      dishName: 'Veg Momos',
      description: 'Chineese Restaurant',
      rating: 3.9,
      cost: 250,
      quantity: 0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 4,
      restaurant: 'beijing bites',
      dishName: 'cripy fried chicken momos',
      description: 'Chineese Restaurant',
      rating: 4.2,
      cost: 180,
      quantity: 0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 5,
      restaurant: "mcdonald's",
      dishName: 'American cheese burger',
      description: 'American Restaurant',
      rating: 3.9,
      cost: 260,
      quantity: 0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 6,
      restaurant: 'KFC',
      dishName: 'KFC chicken bucket',
      description: 'American Restaurant',
      rating: 4.1,
      cost: 599,
      quantity: 0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 7,
      restaurant: 'home kitchen services',
      dishName: 'mix non veg noodles',
      description: 'Chineese Restaurant',
      rating: 3.9,
      cost: 100,
      quantity: 0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 8,
      restaurant: 'hotel shalimar',
      dishName: 'chicken fried rice',
      description: 'chineese Restaurant',
      rating: 4.4,
      cost: 190,
      quantity: 0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 9,
      restaurant: 'al arabia',
      dishName: 'Chicken shawarma',
      description: 'Lebaneese style Restaurant',
      rating: 4.2,
      cost: 120,
      quantity: 0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 10,
      restaurant: 'al bek',
      dishName: 'Alfaham Chicken',
      description: 'Lebaneese style Restaurant',
      rating: 4.1,
      cost: 230,
      quantity: 0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 8,
      restaurant: 'hotel shalimar',
      dishName: 'chicken fried rice',
      description: 'chineese Restaurant',
      rating: 4.4,
      cost: 190,
      quantity: 0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 9,
      restaurant: 'al arabia',
      dishName: 'Chicken shawarma',
      description: 'Lebaneese style Restaurant',
      rating: 4.2,
      cost: 120,
      quantity: 0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 10,
      restaurant: 'al bek',
      dishName: 'Alfaham Chicken',
      description: 'Lebaneese style Restaurant',
      rating: 4.1,
      cost: 230,
      quantity: 0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
  ];

  constructor() {
    //check if items exists in local storage then replace current with one in local storage else set the current to the local storage
    if (localStorage.getItem('restaurants')) {
      this.restaurants = JSON.parse(localStorage.getItem('restaurants')||"{}");
    } else {
      localStorage.setItem('restaurants', JSON.stringify(this.restaurants));
    }
  }

  //return only a copy of arrat to avoid any changes in the original array
  public getRestaurants(): any {
    return this.restaurants.slice();
  }

  public addToCart(id: string): any {
    //search by id and add quantity to that object
    const index = this.restaurants.findIndex(
      (restaurant: any) => restaurant.id === id
    );
    this.restaurants[index].quantity += 1;
  }
  //clear cart  
  public clearCart(): any {
    this.restaurants.forEach((restaurant: any) => {
      restaurant.quantity = 0;
    });
  }

}
