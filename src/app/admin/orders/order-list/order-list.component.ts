import { Component } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  
  constructor(private repository: OrderRepository){}

  getOrdersList(): Order[]{
    console.log(this.repository.getOrder());
    return this.repository.getOrder()
  }
}
