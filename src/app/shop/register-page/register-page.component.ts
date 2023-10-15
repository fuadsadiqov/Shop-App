
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/model/auth.service';
import { PostService } from 'src/app/model/post.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  constructor(private fb: FormBuilder, private authService: AuthService, private postService: PostService){}
 
  public isSuccessfull: boolean = false;
  public isSignupFailed: boolean = false;
  public errorMessage: string = "";

  userForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    telephoneNumber: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    password: ['', Validators.required]
  })

  submit(){
    const {username, email, telephoneNumber, password, confirmPassword} = this.userForm.value;

    if(this.userForm.valid){
        if(password === confirmPassword){
          const userObj = {
            name: username,
            email,
            telephoneNumber,
            password,
          }
          this.postService.register(userObj)
          .subscribe(response => {
            console.log(response);
            this.isSuccessfull = true;
            this.isSignupFailed = false;
            setTimeout(() => {
              this.isSuccessfull = false;
            }, 2000);
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignupFailed = false;
        })
      }
      else{
        this.isSignupFailed = true;
          this.errorMessage = "Passwords don't match";
      }
    }else{
      this.isSignupFailed = true;
    }
  }
}
