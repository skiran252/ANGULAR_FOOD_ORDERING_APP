import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public finalCost = 0;
  public totalItems = 0;
  constructor(
    private restaurantService: RestaurantService,
    private orderService: OrderService,
    private router: Router
  ) {}

  public orders: any = [];
  ngOnInit(): void {
    this.orders = this.restaurantService
      .getRestaurants()
      .filter((order: any) => order.quantity > 0);
    console.log(this.orders);

    this.orders.forEach((order: any) => {
      this.totalItems += order.quantity;
      this.finalCost += order.cost * order.quantity;
    });
  }
  proceedToOrders(orders: any) {
    console.log('before placing orders', this.orders);
    // orderId: orderId,orderDate: orderDate,orderTotal: orderTotal,orderStatus: orderStatus,orderItems: orderItems,
    const orderId = Math.floor(Math.random() * 1000000);
    const orderDate = new Date();
    const orderTotal = this.finalCost;
    const orderStatus = 'pending';
    const orderItems = orders;

    this.orderService.addOrder(
      orderId,
      orderDate,
      orderTotal,
      orderStatus,
      orderItems
    );
    console.log(this.orderService.getOrders());
    this.restaurantService.clearCart();
    this.router.navigate(['/orders']);
  }
}
