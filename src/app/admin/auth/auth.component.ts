import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { RestService } from 'src/app/model/rest.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css',]
})
export class AuthComponent {
  public username: string = '';
  public password: string = '';
  public errorMessage: any = null;
  public loading: boolean = false
  constructor(private router: Router, private authService: AuthService){}

  login(form: NgForm){
    if(form.valid){
        this.loading = true
        setTimeout(() => {
          // this.authService.authenticate(this.username, this.password)
        // .subscribe(res => {
          // if(res){
            if(this.username == 'admin' && this.password == 'admin'){
              this.router.navigateByUrl('admin/main')
            }
          // }
          this.errorMessage = "Incorrect username or password"
        // }
        // )
          this.loading = false
        }, 1000);
    }
    else{
      this.errorMessage = 'Enter the information completely'
    }
  }
}
