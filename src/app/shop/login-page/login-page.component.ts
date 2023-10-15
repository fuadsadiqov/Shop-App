import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { PostService } from 'src/app/model/post.service';
import { TokenService } from 'src/app/model/token.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public isLoginFailed: boolean = false;
  public isLoginIn: boolean = false;
  public errorMessage: string = "";

  constructor(private fb: FormBuilder, private authService: AuthService, private tokenService: TokenService, private postService: PostService, private router: Router){}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLoginIn = true;
    }
  }
  userForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  submit(){
    this.postService.login(this.userForm.value)
    .subscribe((response: any) => {
      this.tokenService.saveToken(response.token);
      this.tokenService.saveUser(response.user_data);

      this.isLoginFailed = false;
      this.isLoginIn = true;

      location.reload();
    },
    (err: any) => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    })
  }

  reloadPage(){
    location.reload();
  }
}