import { Component, OnInit, Input } from '@angular/core';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { cStatesCities } from 'src/app/Models/c-states-cities';
import { IUser } from 'src/app/Models/i-user';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-additional-user-info',
  templateUrl: './additional-user-info.component.html',
  styleUrls: ['./additional-user-info.component.css']
})
export class AdditionalUserInfoComponent implements OnInit {
  AdditionalInfoForm: FormGroup;
  CitiesAndStates: cStatesCities = new cStatesCities;
  // @Input() User: any;
  User: IUser;

  Loading = false;
  UserLoaded = false;

  constructor(
    public MyAuth: MyAuthService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.MyAuth.afAuth.authState.subscribe(r => {
      this.MyAuth.afStore.doc<IUser>(`Users/${r.uid}`).valueChanges().pipe(take(1))
        .subscribe(res => {
          this.User = res;

          this.AdditionalInfoForm = this.fb.group({
            Id: this.User.Id,
            Email: [this.User.Email, [Validators.required, Validators.email]],
            DisplayName: [this.User.DisplayName, Validators.required],
            Gender: ['Male', Validators.required],
            DOB: new Date(this.User.DOB).valueOf(),
            PhoneNumber: this.User.PhoneNumber,
            PhotoURL: this.User.PhotoURL,
            Status: '',
            LivesIn: '',
            Interests: '',
            About: '',
          });

          if (this.User.Provider === 'Password') {
            this.AdditionalInfoForm.controls['Email'].disable();
          }
          this.UserLoaded = true;
        });

    });
  }

  OnSubmit() {
    console.log(this.AdditionalInfoForm);
    this.Loading = true;
    this.UpdateUserInfoOnFireStore(this.AdditionalInfoForm.value);
  }

  Skip() {
    this.MyAuth.NavTo('Home');
  }

  async UpdateUserInfoOnFireStore(User: IUser) {
    User.DOB = User.DOB.valueOf();

    if (this.AdditionalInfoForm.controls['Email'].disabled) {
      User.Email = this.User.Email;
    }

    await this.MyAuth.afAuth.updateProfile({ 'displayName': User.DisplayName, 'photoURL': User.PhotoURL });
    await this.MyAuth.afStore.doc('Users/' + User.Id).set(User);
    this.MyAuth.NavTo('/Home');
    this.Loading = false;
  }

}
