import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MyAuthService } from './Services/my-auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfilePicUpdateDialogComponent } from './components/Dialogs/profile-pic-update-dialog/profile-pic-update-dialog.component';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  UserInfoLoading: boolean = true;

  isHandset$: Observable<boolean> = this.MyAuth.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    public MyAuth: MyAuthService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.MyAuth.afAuth.authState.subscribe(authUser => {
      if (authUser) {
        if (authUser.providerData[0].providerId != 'password')
          this.UpdateFirestoreUserInfo(authUser);
      }
    })
  }

  UpdateFirestoreUserInfo(authUser: firebase.User) {
    // console.log(authUser)
    var storeUserRef = this.MyAuth.afStore.doc("Users/" + authUser.uid).ref;
    storeUserRef.set({ DisplayName: authUser.displayName, PhotoURL: authUser.photoURL }, { merge: true })
  }

  Logout() {
    this.MyAuth.Logout();
  }

  openProfilePicUpdateDialog(): void {
    const dialogRef = this.dialog.open(ProfilePicUpdateDialogComponent, {
      //width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
