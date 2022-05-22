import { Component, OnInit, Input } from '@angular/core';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { IUser, IFollow } from 'src/app/Models/i-user';
import { MatDialog } from '@angular/material/dialog';
import { ProfilePicUpdateDialogComponent } from '../../Dialogs/profile-pic-update-dialog/profile-pic-update-dialog.component';
import { FollowService } from 'src/app/Services/follow.service';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from '../../Dialogs/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'element-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() User: IUser;

  Following$: Observable<IFollow>;

  SelfProfile: boolean = false;

  constructor(
    public MyAuth: MyAuthService,
    public followSrv: FollowService,
    public dialog: MatDialog) { }

  ngOnInit() {
    if (this.User.Id == this.MyAuth.LoggedUser.Id)
      this.SelfProfile = true;
    else
      this.Following$ = this.followSrv.GetFollowStatus(this.User.Id);
  }

  FollowThisUser() {
    this.followSrv.FollowAUser(this.User.Id, this.User.DisplayName, this.User.PhotoURL).subscribe(r => {
      console.log(r)
    })
  }

  UnfollowThisUser() {
    const confirmationDialogRef = this.MyAuth.Dialogs.open(ConfirmationDialogComponent, {
      data: {
        Title: 'Unfollow',
        Message: `¿Dejar de seguir? ${this.User.DisplayName}?`
      }
    })

    confirmationDialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.followSrv.UnfollowAUser(this.User.Id).subscribe(r => {
        })
      }
    })
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
