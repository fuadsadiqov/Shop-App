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

    public isSent: boolean = false

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
        this.cart.clear()
    }
}