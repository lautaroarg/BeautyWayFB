import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { MyAuthService } from '../Services/my-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private MyAuth: MyAuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    // console.log("AuthGaurd");
    return this.MyAuth.afAuth.authState.pipe(
      take(1),
      map(user => !!user), 
      tap(IsLoggedIn => {
        // console.log(IsLoggedIn)
        if (!IsLoggedIn) {
          console.log("Access denied, require login.");
          this.MyAuth.NavTo('/Auth/Login');
        }
      })
    )
  }
}
