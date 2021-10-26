import { Injectable } from '@angular/core';
import { RestaurantService } from './restaurant.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  public orders: any[] = [];
  constructor(private restaurantService: RestaurantService) {
    //check if orders exists in the local storage then replace the orders array with the orders from the local storage else store in local storage
    if (localStorage.getItem('orders') != null) {
      this.orders = JSON.parse(localStorage.getItem('orders') || '{}');
    } else {
      localStorage.setItem('orders', JSON.stringify(this.orders));
    }
  }

  // add am order to the orders array having the following structure orderId : number, orderDate : Date, orderTotal : number, orderStatus : string, orderItems : any[]

  addOrder(
    orderId: number,
    orderDate: Date,
    orderTotal: number,
    orderStatus: string,
    orderItems: any[]
  ) {
    this.orders.push({
      orderId: orderId,
      orderDate: orderDate,
      orderTotal: orderTotal,
      orderStatus: orderStatus,
      orderItems: orderItems.slice(),
    });
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  // get all the orders from the orders array
  public getOrders() {
    return this.orders.slice();
  }

  public updateOrders(orders: any[]) {
    //set to local storage and current array

    localStorage.setItem('orders', JSON.stringify(orders));

    this.orders = orders.slice();
  }
}
