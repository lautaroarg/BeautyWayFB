import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from 'src/app/components/auth/register/register.component';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { redirectLoggedInTo, redirectUnauthorizedTo, canActivate } from "@angular/fire/auth-guard";
import { AdditionalUserInfoComponent } from 'src/app/components/auth/additional-user-info/additional-user-info.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: 'Register',
    component: RegisterComponent,
    // ...canActivate(redirectLoggedInTo(['Home']))
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path:'AdditionInfo',
    component: AdditionalUserInfoComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'Login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
