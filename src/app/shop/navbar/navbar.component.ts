import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { RestService } from 'src/app/model/rest.service';
import { TokenService } from 'src/app/model/token.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  activeNavbar: boolean = false
  scrolled: boolean = false

  currentIp: string = ""
  currentLoc: string = ""
  activeSearchBar: boolean = false;
  userData!: {email: '', username: ''};

  constructor(public cart: Cart, private router: Router, private tokenService: TokenService){ }

  ngOnInit(){
    this.authorizedUser;
    this.getUserData();
  }
  
  toggle(){
    this.activeNavbar = !this.activeNavbar
  }

  searchItems(search: string){
    this.router.navigate(['/search'], {
      queryParams: {
        sr: search
      }
    })
  }

  toggleSearchBar(){
    this.activeSearchBar = !this.activeSearchBar;
  }

  get authorizedUser(){
    return this.tokenService.isAuthenticated;
  }

  getUserData(){
    this.userData = this.tokenService.getUser();
  }

  logOut(){
    this.tokenService.signOut();
  }
}
