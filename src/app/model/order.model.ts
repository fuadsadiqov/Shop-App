import { Injectable } from "@angular/core"
import { Cart } from "./cart.model"

@Injectable()
export class Order{
    public id: number = 0
    public name: string = ''
    public address: string = ''
    public city: string = ''
    public phone: string = ''
    public mail: string = ''
    public terms: boolean = false
    public isSent: boolean = false
    public cardNumber: number = 0
    public cardDate: number = 0
    public ccv: number = 0
    constructor(public cart: Cart){

    }
    clearOrder(){
        this.id = 0
        this.name = '' 
        this.address = ''
        this.city = ''
        this.phone = ''
        this.mail = ''
        this.isSent = false
        this.terms = false
        this.cardNumber = 0
        this.cardDate = 0
        this.ccv = 0
        this.cart.clear()
    }
}