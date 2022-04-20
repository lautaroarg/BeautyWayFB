import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/Models/i-user';
import { IMessage } from 'src/app/Models/i-message';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { ChatsService } from 'src/app/Services/chats.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-chat-head',
  templateUrl: './chat-head.component.html',
  styleUrls: ['./chat-head.component.css'],
})
export class ChatHeadComponent implements OnInit {
  @Input() UserId: string;

  User$: Observable<IUser>;
  LastMessage$: Observable<IMessage>;

  Show: boolean = true;

  constructor(
    public MyAuth: MyAuthService,
    public ChatSrv: ChatsService, ) { }

  ngOnInit() {
    this.LastMessage$ = this.ChatSrv.GetLastMessage(this.UserId).pipe(
      tap(r => {
        if (!r.Text) {
          // this.Show = false;
        }
      }));
    this.User$ = this.MyAuth.GetAUserInfoFromStore(this.UserId).pipe(
      tap(r => {
        if (!r) {
          this.Show = false;
        }
      }))
  }

}
