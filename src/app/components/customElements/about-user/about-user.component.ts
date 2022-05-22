import { Component, OnInit, Input } from '@angular/core';
// import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { IUser } from 'src/app/Models/i-user';
import * as moment from 'moment';
import { cStatesCities } from 'src/app/Models/c-states-cities';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { take } from 'rxjs/operators';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';


@Component({
  selector: 'element-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class AboutUserComponent implements OnInit {
  @Input() User: IUser;
  moment = moment;
  Edit: boolean = false;

  DisplayName: string;
  About: string;
  Email: string;
  PhoneNumber: number;
  Gender: string;
  DOB: number;
  Status: string;
  LivesIn: any;
  Interests: string;

  CitiesAndStates: cStatesCities = new cStatesCities;

  constructor(public MyAuth: MyAuthService) {
  }

  ngOnInit() {
    console.log(this.User)

    this.DisplayName = this.User.DisplayName;
    this.About = this.User.About;
    this.Email = this.User.Email;
    // this.PhoneNumber = this.User.PhoneNumber;
    this.Gender = this.User.Gender;
    this.DOB = this.User.DOB ? this.User.DOB.valueOf() : null;
    this.Status = this.User.Status;
    this.LivesIn = this.User.LivesIn;
    this.Interests = this.User.Interests;
  }

  Update(Value) {
    console.log(Value)
    if (Value.DOB) {
      Value = { DOB: new Date(Value.DOB).valueOf() }
    }

    if (Value.DisplayName) {
      this.MyAuth.afAuth.updateProfile({ displayName: Value.DisplayName }).then(() => {
        this.MyAuth.UpdateUserInfo(Value).pipe(take(1)).subscribe(() => {
            this.MyAuth.Notify.openSnackBar('Update successful', '')
            return;
          })
      })
    }

    else if (!Value.Email) {
      this.MyAuth.UpdateUserInfo(Value).pipe(take(1)).subscribe(() => {
          this.MyAuth.Notify.openSnackBar('Update successful', '')
          return;
        })
    }

    if (Value.Email && this.User.Provider != "Password") {
      this.MyAuth.UpdateUserInfo(Value).pipe(take(1)).subscribe(() => {
          this.MyAuth.Notify.openSnackBar('Update successful', '')
        })
    }
  }

}
