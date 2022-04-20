import { Component, OnInit, Input } from '@angular/core';
import { IUser, IFollow } from 'src/app/Models/i-user';
import { Observable } from 'rxjs';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { FollowService } from 'src/app/Services/follow.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../Dialogs/confirmation-dialog/confirmation-dialog.component';
import { ProfilePicUpdateDialogComponent } from '../../Dialogs/profile-pic-update-dialog/profile-pic-update-dialog.component';

@Component({
  selector: 'element-mini-user-card',
  templateUrl: './mini-user-card.component.html',
  styleUrls: ['./mini-user-card.component.css']
})
export class MiniUserCardComponent implements OnInit {
  @Input() User: IUser;
  Following$: Observable<IFollow>

  constructor(public MyAuth: MyAuthService,
    public followSrv: FollowService,
    public dialog: MatDialog) { }

  ngOnInit() {
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
        Message: `Are you sure? you want to unfollow ${this.User.DisplayName}?`
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
