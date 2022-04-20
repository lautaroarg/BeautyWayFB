import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProfileComponent } from 'src/app/components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    // resolve: { LoggedUserData: UserResolverService },
  },
  {
    path: ':Id',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    // resolve: { LoggedUserData: UserResolverService },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class UserProfileRoutingModule { }
