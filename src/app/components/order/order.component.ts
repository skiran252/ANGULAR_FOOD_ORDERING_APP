import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit,OnDestroy {
  public currentTime = new Date();
  public orders: any;
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();

    //for each order check status is pending and time difference is greather than 5 set status to delivered/success
    this.orders.forEach((order: any) => {
      if (order.status === 'pending') {
        const timeDiff = this.calculateTimeDifference(
          this.currentTime,
          order.orderDate
        );
        if (timeDiff > 5) {
          order.status = 'delivered/success';
        }
      }
    });

    //above is done in order to avoid load on javascript engine to calculate difference even if item state is changed 

    

    //update current time every second
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  getDifferenceInSeconds(date1: number, date2: number) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / 1000;
  }
  calculateTimeDifference(currentTime: Date, orderTime: Date) {
    const seconds = this.getDifferenceInSeconds(+currentTime, +orderTime);
    return seconds;

    // const timeDifference = currentTime - orderTime;
  }
  ngOnDestroy(): void {
    this.orderService.updateOrders(this.orders);
  }
}
