import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  role:any;
  
  constructor(private router:Router){}
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.role=localStorage.getItem('role')

      if(this.role=='admin')
    return true;
    else
    {
      alert("You are not authorized to visit page");
      this.router.navigate(['login'])
      return false;
    }
  }
}

