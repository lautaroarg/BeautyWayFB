import { Component, OnInit } from '@angular/core';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { FollowService } from 'src/app/Services/follow.service';
import { ChatsService } from 'src/app/Services/chats.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/Models/i-user';
import { IMessage } from 'src/app/Models/i-message';

@Component({
  selector: 'app-messages-dialog',
  templateUrl: './messages-dialog.component.html',
  styleUrls: ['./messages-dialog.component.css']
})
export class MessagesDialogComponent implements OnInit {
  UserIdListToDisplay$: Observable<string[]>;

  constructor(
    public MyAuth: MyAuthService,
    public FollowSrv: FollowService,
    public ChatSrv: ChatsService, ) { }

  ngOnInit() {
    this.UserIdListToDisplay$ = this.ChatSrv.GetActiveChatUsersList()
      // .pipe(map(r => {
      //   var Combined = [...new Set(r[1].concat(r[0]))];
      //   return Combined;
      // }))
  }

  GetAUser(UserId: string): Observable<IUser> {
    return this.MyAuth.GetAUserInfoFromStore(UserId)
  }

  LastMessage(UserId: string): Observable<IMessage> {
    return this.ChatSrv.GetLastMessage(UserId)
  }
}
