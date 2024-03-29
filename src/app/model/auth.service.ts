import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestService } from "./rest.service";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class AuthService{
    constructor(private restService: RestService, private http: HttpClient){}

    private AUTH_API = 'http://localhost:3000';
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      
    authenticate(username: string, password: string): Observable<boolean>{
        return this.restService.authentication(username, password)
    }
    get authenticated(): boolean{
        return this.restService.token != null
    }
    clear(){
        this.restService.token === null
    }

    login(username: string, password: string){
        return this.http.post(this.AUTH_API + 'login', {
            username,
            password
          }, this.httpOptions);
    }

    register(username: string, email: string, password: string): Observable<any>{
        return this.http.post(this.AUTH_API + 'register', {
            username,
            email,
            password
        }, this.httpOptions);
    }
}