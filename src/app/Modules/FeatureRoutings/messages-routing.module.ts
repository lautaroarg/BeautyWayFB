import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from 'src/app/components/messages/messages.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UserResolverService } from 'src/app/Services/user-resolver.service';
import { ChatContainerComponent } from 'src/app/components/messages/chat-container/chat-container.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
    canActivate: [AuthGuard],
    children: [{
      path: ':UserId',
      component: ChatContainerComponent,
      // canActivate: [AuthGuard],
      // resolve: {LoggedUserFromRoute: UserResolverService}
    }],
    // resolve: {LoggedUserFromRoute: UserResolverService}
  },
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MessagesRoutingModule { }
