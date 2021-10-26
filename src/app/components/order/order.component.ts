import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  public currentTime = new Date();
  public orders: any;
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();

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
}
