import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { share } from 'rxjs/operators';
import { IUser } from '../Models/i-user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import * as moment from 'moment';
import { NotificationService } from './notification.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})
export class MyAuthService {
  AppTitle = 'BeautyWay';
  ViewTitle = '';
  DefaultUserPicURL = 'https://firebasestorage.googleapis.com/v0/b/socially.appspot.com/o/Default%20Profile%20Picture%2FDefault%20Profile%20Picture.jpeg?alt=media&token=8dd77808-082e-4848-aede-a628e16fd80b';
  LoggedUser$: Observable<IUser>;
  BasicUserInfo: firebase.UserInfo;
  LoggedUser: IUser;

  LoggedUserLoading = true;
  IsUserLoggedIn = false;

  moment = moment;

  constructor(
    public afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public afFunctions: AngularFireFunctions,
    public breakpointObserver: BreakpointObserver,
    public router: Router,
    public Notify: NotificationService,
    public Dialogs: MatDialog) {

    this.LoggedUserLoading = true;
    afAuth.onAuthStateChanged(user => {
      console.log('onAuthStateChanged: ', user);
      if (user) {
        this.LoggedUserLoading = true;
        this.BasicUserInfo = user;
        this.IsUserLoggedIn = true;
        
        this.GetAUserInfoFromStore(user.uid).subscribe(UserInfoFromStore => {
          this.LoggedUser = UserInfoFromStore;
          this.LoggedUserLoading = false;
          this.Notify.openSnackBar(`Bienvenido, ${this.LoggedUser.DisplayName}`, '');
          if (UserInfoFromStore.DisplayName == null || UserInfoFromStore.DisplayName === '') {
            this.NavTo('Auth/AdditionInfo');
          }
        });
      } else { // signed out
        this.LoggedUserLoading = false;
        this.IsUserLoggedIn = false;
        this.LoggedUser = null;
        this.Notify.openSnackBar('Ingreso requerido, Por favor ingrese', 'Ingresar', () => {
          this.NavTo('/Auth/Login');
        });
      }
    }, err => {
      console.error(err);
    });
  }

  public Register(Email: string, Password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(Email, Password);
  }

  public GetAllUsersFromStore(): Observable<IUser[]> {
    return this.afStore.collection<IUser>('Users/').valueChanges().pipe(share());
  }

  public GetAUserInfoFromStore(UserId: string): Observable<IUser> {
    return this.afStore.doc<IUser>('Users/' + UserId).valueChanges().pipe(share());
  }

  public UpdateUserInfo(Value): Observable<void> {
    // if (!Value.Email)
    return from(this.afStore.doc(`Users/${this.LoggedUser.Id}`).update(Value));
  }

  public UpdateProfilePic(PhotoURL: string): Observable<void> {
    const UpdateProfilePic = this.afFunctions.httpsCallable('UpdateProfilePic');

    return UpdateProfilePic({ PhotoURL });
  }

  public Logout() {
    this.afAuth.signOut().then(() => {
      this.LoggedUserLoading = true;
      this.IsUserLoggedIn = false;
      // this.Notify.openSnackBar("You've logged out successfully", "Login again", () => {
      //   this.NavTo("/Auth/Login");
      // })
    })
      .catch(err => console.log(err));
  }

  public NavTo(url: string) {
    console.log('navigating to: ', url);
    this.router.navigate([url]);
  }

}

