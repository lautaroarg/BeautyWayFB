import { Component, OnInit, Input } from '@angular/core';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { IUser, IFollow } from 'src/app/Models/i-user';
import { FollowService } from 'src/app/Services/follow.service';

@Component({
  selector: 'element-person-profile-card',
  templateUrl: './person-profile-card.component.html',
  styleUrls: ['./person-profile-card.component.css']
})
export class PersonProfileCardComponent implements OnInit {
  @Input() Data: IFollow;
  @Input() Who: string;
  UserToDisplay: IUser;

  constructor(
    public MyAuth: MyAuthService,
    public followSrv: FollowService) { }

  ngOnInit() {
    if (this.Who == 'Following') {
      this.UserToDisplay = this.Data.SecondUser;
    }
    else if (this.Who == 'Followers') {
      this.UserToDisplay = this.Data.FirstUser;
    }
  }

}
