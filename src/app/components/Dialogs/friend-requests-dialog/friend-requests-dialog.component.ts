import { Component, OnInit } from '@angular/core';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { IUser } from 'src/app/Models/i-user';
import { FollowService } from 'src/app/Services/follow.service';

@Component({
  selector: 'app-friend-requests-dialog',
  templateUrl: './friend-requests-dialog.component.html',
  styleUrls: ['./friend-requests-dialog.component.css']
})
export class FriendRequestsDialogComponent implements OnInit {
  Requests: any[];
  Loading: boolean = true;
  NoRequests: boolean = false;

  constructor(
    public MyAuth: MyAuthService,
    public FollowSrv: FollowService
  ) { }

  ngOnInit() {
    // this.getPendingRequests();
  }

  public getPendingRequests() {
    // this.friendsService.PendingFriendRequests().subscribe(r => {
    //   r.length !== 0 ? this.Requests = r : this.NoRequests = true;
    //   this.Loading = false;
    // });
  }

  public RequestAction(ReqId: number, IsAccepted: boolean, User: IUser) {
    // this.friendsService.RequestAction(ReqId, IsAccepted).subscribe(r => {
    //   console.log(r);
    //   if (r === 'Accepted') {
    //     this.MyAuth.notify.openSnackBar("You and " + User.DisplayName + " are now friends!",
    //       'View ' + User.DisplayName, () => { },
    //       () => {
    //         this.MyAuth.NavTo('/User/' + User.Id);
    //       }
    //     );
    //     this.getPendingRequests();
    //   }
    //   else
    //     this.MyAuth.notify.openSnackBar("You've rejected " + User.DisplayName + "'s friend request.", 'Block ' + User.DisplayName,{},{}, 3500);
    // })
  }

}
