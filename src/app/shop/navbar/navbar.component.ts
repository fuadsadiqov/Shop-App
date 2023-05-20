import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { RestService } from 'src/app/model/rest.service';

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
  constructor(public cart: Cart, private restService: RestService, private http: HttpClient){ }

  ngOnInit(){
    this.http.get('https://api.ipify.org?format=json').subscribe((response: any) => {
      this.currentIp = response.ip
    });
    this.onSubmit()
  }
  onSubmit(){
    this.restService.getIp(this.currentIp)
      .subscribe((res: any) => {
        this.currentLoc = res.region
      })
  }
  toggle(){
    this.activeNavbar = !this.activeNavbar
  }

}
