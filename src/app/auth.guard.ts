import { Injectable, inject } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
  class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(){
    if (this.authService.loggedIn()) {
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }

}

  export const IsAuthGuard : CanActivateFn = ():boolean => {
    return inject(AuthGuard).canActivate();
  
}