import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../model/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../model/token.service';

@Injectable({
  providedIn: 'root'
})
export class ShopGuard implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.tokenService.isAuthenticated) {
          this.router.navigateByUrl('login')
          return false;
      } else {
          return true;
      }
  }
}
