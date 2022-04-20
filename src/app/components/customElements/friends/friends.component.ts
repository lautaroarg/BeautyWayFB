import { Component, OnInit, Input } from '@angular/core';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { IFollow } from 'src/app/Models/i-user';
import { FollowService } from 'src/app/Services/follow.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'element-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  @Input() Who: string;
  @Input() UserId: string;
  FollowsItemsToDisplay$: Observable<IFollow[]>;

  constructor(
    public MyAuth: MyAuthService,
    public followSrv: FollowService,
  ) { }

  ngOnInit() {
    if (this.Who == 'Followers') {
      this.FollowsItemsToDisplay$ = this.followSrv.GetAUserFollowers(this.UserId);
    }
    else if (this.Who == 'Following') {
      this.FollowsItemsToDisplay$ = this.followSrv.GetAUserFollowing(this.UserId);
    }
  }

}
