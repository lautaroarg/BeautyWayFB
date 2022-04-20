import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IUser } from '../Models/i-user';
import { MyAuthService } from './my-auth.service';
import { Observable, pipe } from 'rxjs';
import { take, map, tap, catchError } from 'rxjs/operators';


@Injectable()
export class UserResolverService implements Resolve<IUser>
{

  constructor(private MyAuth: MyAuthService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    console.log('Resoler rosolve method');
    //console.info('par route: ', route, 'State: ', state);
    const loggedUserID = this.MyAuth.LoggedUser.Id;
    return this.MyAuth.GetAUserInfoFromStore(loggedUserID)
      .pipe(
        take(1),
        map(resUser => {
          console.log(resUser)
          this.MyAuth.LoggedUser = resUser;
          return resUser
        }),
        tap(u => console.log(u)),
        catchError((err: any, caught) => {
          console.log(err);
          console.log(caught);
          return caught;
        }),
      );
  }
}
