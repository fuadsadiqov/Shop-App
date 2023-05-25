import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cart } from 'src/app/model/cart.model';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  orderSent: boolean = false
  submitted: boolean = false
  total: number = 0 
  public maskNumber = [/[1-9]/, /\d/, /\d/, /\d/, ' ', /[1-9]/, /\d/, /\d/, /\d/, ' ', /[1-9]/, /\d/, /\d/, /\d/, ' ', /[1-9]/, /\d/, /\d/, /\d/, ]
  public maskDate = [/[1-3]/, /\d/, '/', /[1-2]/, /\d/]
  public maskCCV = [/[1-9]/, /\d/, /\d/]

  constructor(public order: Order, private orderRepository: OrderRepository, public cart: Cart){
    this.total = this.cart.total
  }
  
  ngOnInit(): void{
    
  }
  submitOrder(form: NgForm){
    this.submitted = true
    console.log(form);
    
    if(form.valid){
      // setTimeout(() => {
        this.orderRepository.saveOrder(this.order)
        .subscribe(() => {
        this.order.clearOrder()
        this.orderSent = true
        this.submitted = false  
      })
      // }, 2000);
    }
  }
}
