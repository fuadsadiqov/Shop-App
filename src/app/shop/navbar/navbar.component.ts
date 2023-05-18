import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activeNavbar: boolean = false

  constructor(public cart: Cart){}
  
  toggle(){
    this.activeNavbar = !this.activeNavbar
  }
}
