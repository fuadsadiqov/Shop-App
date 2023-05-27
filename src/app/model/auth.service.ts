import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestService } from "./rest.service";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService{
    constructor(private restService: RestService, private http: HttpClient){}

    authenticate(username: string, password: string): Observable<boolean>{
        return this.restService.authentication(username, password)
    }
    get authenticated(): boolean{
        return this.restService.token != null
    }
    clear(){
        this.restService.token === null
    }
}