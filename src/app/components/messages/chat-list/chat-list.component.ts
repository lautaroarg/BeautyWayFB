import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/Models/i-user';
import { Observable } from 'rxjs';
import { IMessage } from 'src/app/Models/i-message';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { ChatsService } from 'src/app/Services/chats.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit, OnChanges {
  @Input() UserId: string;
  @Input() SearchTerm: string = '';
  @Input() IsForHandset: boolean;
  HasUnreadMessages: boolean = false;

  User$: Observable<IUser>;
  LastMessage$: Observable<IMessage>;

  User: IUser;
  Show: boolean = true;

  constructor(
    public MyAuth: MyAuthService,
    public ChatSrv: ChatsService, ) { }

  ngOnInit() {
    this.LastMessage$ = this.ChatSrv.GetLastMessage(this.UserId).pipe(
      tap(r => {
        if (r.Status !== 3 && r.ToId === this.MyAuth.LoggedUser.Id)
          this.HasUnreadMessages = true;
        else
          this.HasUnreadMessages = false;
      })
    )
    this.User$ = this.MyAuth.GetAUserInfoFromStore(this.UserId).pipe(tap(r => {
      if (!r) {
        this.Show = false;
        this.MyAuth.NavTo('Messages')
      }
      else {
        this.User = r;
      }
    }))
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
    // if (!this.IsForHandset)
      if (!changes.SearchTerm.firstChange) {
        const DisplayName = this.User.DisplayName.toLowerCase();

        if (!DisplayName.includes(changes.SearchTerm.currentValue.toLowerCase())) {
          this.Show = false;
        }
        else
          this.Show = true;
      }
  }
}
