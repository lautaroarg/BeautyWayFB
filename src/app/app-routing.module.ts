import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecuperarComponent } from './components/auth/recuperar/recuperar';
import { VerificarComponent } from './components/auth/verificar/verificar.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./Modules/FeatureModules/home.module').then(m => m.HomeModule) },
  { path: 'Auth', loadChildren: () => import('./Modules/FeatureModules/Authentication.module').then(m => m.AuthenticationModule) },
  { path: 'User', loadChildren: () => import('./Modules/FeatureModules/user-profile.module').then(m => m.UserProfileModule) },
  { path: 'Messages', loadChildren: () => import('./Modules/FeatureModules/messages.module').then(m => m.MessagesModule) },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'recuperar',component:RecuperarComponent},
  {path:'Verificar', component:VerificarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]
})
export class AppRoutingModule { }
