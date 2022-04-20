import { NgModule } from '@angular/core';
import { FriendRequestsDialogComponent } from '../components/Dialogs/friend-requests-dialog/friend-requests-dialog.component';
import { MessagesDialogComponent } from '../components/Dialogs/messages-dialog/messages-dialog.component';
import { NotificationsDialogComponent } from '../components/Dialogs/notifications-dialog/notifications-dialog.component';
import { SharedModule } from './shared.module';
import { LeftColumnComponent } from '../components/home/left-column/left-column.component';
import { RightColumnComponent } from '../components/home/right-column/right-column.component';
import { MiddleColumnComponent } from '../components/home/middle-column/middle-column.component';
import { PostCardComponent } from '../components/customElements/post-card/post-card.component';
// import { MatCardModule, MatMenuModule, MatListModule, MatFormFieldModule, MatProgressBarModule, MatExpansionModule, MatIconModule, MatButtonModule, MatInputModule } from '@angular/material';
import { PersonProfileCardComponent } from '../components/customElements/person-profile-card/person-profile-card.component';
import { ChatHeadComponent } from '../components/Dialogs/messages-dialog/chat-head/chat-head.component';
import { MaterialModule2 } from './Material.module';

@NgModule({
  declarations: [
    FriendRequestsDialogComponent,
    MessagesDialogComponent,
    ChatHeadComponent,
    NotificationsDialogComponent,
    LeftColumnComponent,
    RightColumnComponent,
    MiddleColumnComponent,
    PostCardComponent,
    PersonProfileCardComponent,
  ],
  imports: [
    SharedModule,

    // Material modules //
    MaterialModule2,
    // MatCardModule,
    // MatMenuModule,
    // MatListModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule,
    // MatProgressBarModule,
    // MatExpansionModule,
    // MatIconModule,
  ],
  exports:[
    FriendRequestsDialogComponent,
    MessagesDialogComponent,
    ChatHeadComponent,
    NotificationsDialogComponent,
    LeftColumnComponent,
    RightColumnComponent,
    MiddleColumnComponent,
    PostCardComponent,
    PersonProfileCardComponent,
  ]
})
export class AppDialogsModule { }
