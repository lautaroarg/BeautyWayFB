import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, EmailValidator } from '@angular/forms';
// import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';

// import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';

import * as _moment from 'moment';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { IUser } from 'src/app/Models/i-user';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class RegisterComponent implements OnInit, OnDestroy {
  FormRegister: FormGroup;

  Loading: boolean = false;

  EmailErrorMessage: string = '';
  PasswordErrorMessage: string = '';

  FormValueChangesSub: Subscription;

  constructor(
    public MyAuth: MyAuthService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.FormRegister = this.fb.group({
      FirstName: ['', new RequiredValidator],
      LastName: '',
      Email: ['', new RequiredValidator, new EmailValidator],
      Gender: ['Male', new RequiredValidator],
      Password: ['', new RequiredValidator],
      DOB: '',
    });

    this.FormValueChangesSub = this.FormRegister.valueChanges.subscribe(obs => {
      this.EmailErrorMessage = '';
      this.PasswordErrorMessage = '';
    })
  }

  ngOnDestroy() {
    try {
      this.FormValueChangesSub.unsubscribe()
    } catch (error) {

    }
  }

  OnSubmit() {
    this.Loading = true;
    this.MyAuth.Register(this.FormRegister.value.Email, this.FormRegister.value.Password)
      .then(async (user) => {
        console.log(user)
        const FormValues = this.FormRegister.value;
        const UserInfo: IUser = {
          Id: user.user.uid,
          DisplayName: FormValues.FirstName + ' ' + FormValues.LastName,
          Email: user.user.email,
          Gender: FormValues.Gender,
          DOB: new Date(FormValues.DOB).valueOf(),
          PhotoURL: this.MyAuth.DefaultUserPicURL,
          FollowingCount: 0,
          FollowersCount: 0,
          PostsCount: 0,
          Provider: 'Password',
        }
        console.log(UserInfo)
        await this.MyAuth.afAuth.updateProfile({ displayName: UserInfo.DisplayName, photoURL: UserInfo.PhotoURL })
        await this.MyAuth.afStore.collection('Users').doc(user.user.uid).set(UserInfo)
        this.Loading = false;
        this.MyAuth.NavTo('Home')
      })
      .catch((error) => {
        // Handle Errors here.
        this.Loading = false;

        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error);
        switch (errorCode) {
          case 'auth/email-already-in-use':
            this.EmailErrorMessage = errorMessage;
            break;
          case 'auth/invalid-email':
            this.EmailErrorMessage = errorMessage;
            break;
          case 'auth/operation-not-allowed':
            console.log(errorMessage)
            this.EmailErrorMessage = errorMessage;
            break;
          case 'auth/weak-password':
            this.PasswordErrorMessage = errorMessage;
            break;

          default:
            this.MyAuth.Notify.openSnackBar('An error occur, please try again later', '')
            break;
        }
      });
  }
}
