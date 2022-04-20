import { Component, OnInit, Input, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { IUser, IFollow } from 'src/app/Models/i-user';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/Models/i-post';
import { PosterService } from 'src/app/Services/poster.service';
import { take } from 'rxjs/operators';
import { FollowService } from 'src/app/Services/follow.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() ParamUserId: string = this.activatedRoute.snapshot.paramMap.get('Id');
  FollowStatus: IFollow[];

  UserToDisplay$: Observable<IUser>;
  UserPosts$: Observable<IPost[]>;

  Loading: boolean = true;
  StatusLoading: boolean = true;

  moment = moment;

  constructor(
    public MyAuth: MyAuthService,
    public Poster: PosterService,
    public followSrv: FollowService,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // const ParamUserId: number = +this.activatedRoute.snapshot.paramMap.get('Id');
    this.SetUserToDisplay();

    this.activatedRoute.paramMap.subscribe(d => {
      this.ParamUserId = d.get('Id');
      this.SetUserToDisplay();
    })
    
  }

  SetUserToDisplay() {
    this.UserToDisplay$ = this.MyAuth.GetAUserInfoFromStore(this.ParamUserId)
    this.UserPosts$ = this.Poster.GetAUserPosts(this.ParamUserId).pipe(take(1))
  }

  AddFriend() {
    // this.friendsService.SendFriendRequest(UserId).subscribe(r => {
    //   console.log(r);
    // })
  }
}
