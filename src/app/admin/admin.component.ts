import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";

@Component({
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css']
})
export class AdminComponent{
    
    constructor(private authService: AuthService, private router: Router){}

    logout(){
        this.authService.clear()
        this.router.navigateByUrl('/shop')
    }   
}