import { Component, OnInit, Input } from '@angular/core';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { IUser, IFollow } from 'src/app/Models/i-user';
import { MatDialog } from '@angular/material/dialog';
import { ProfilePicUpdateDialogComponent } from '../../Dialogs/profile-pic-update-dialog/profile-pic-update-dialog.component';
import { FollowService } from 'src/app/Services/follow.service';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from '../../Dialogs/confirmation-dialog/confirmation-dialog.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'element-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.css']
})
export class UserPhotoComponent implements OnInit {
  // @Input() User: IUser;

  Following$: Observable<IFollow>;
  SelfProfile: boolean = false;
  UpdatePPForm: FormGroup;
  constructor(
    public MyAuth: MyAuthService,
    public followSrv: FollowService,
    private fb: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.UpdatePPForm = this.fb.group({
      InputImage: ['', Validators.required],
      ProfileCaption: '',
    });

    // if (this.User.Id == this.MyAuth.LoggedUser.Id)
    //   this.SelfProfile = true;
    // else
    //   this.Following$ = this.followSrv.GetFollowStatus(this.User.Id);
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
