import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "./product.model";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class PostService{
    constructor(private restService: RestService, private http: HttpClient){}

    private AUTH_API = 'http://localhost:3000/';
 
    getPosts(){
        return this.http.get(this.AUTH_API + 'posts');
    }
    
    addPost(product: Product | any){
        return this.http.post(this.AUTH_API + 'posts', product)
    }

    login(userObj: Object){
        return this.http.post(this.AUTH_API + 'user/login', userObj);
    }  

    register(userObj: Object){
        return this.http.post(this.AUTH_API + 'user/sign-up', userObj);
    }  

    uploadFile(formData: any){
        return this.http.post<any>(this.AUTH_API + 'api/uploads', formData)
    }
}