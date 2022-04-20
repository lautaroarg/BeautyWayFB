import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/components/home/home/home.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { MiddleColumnComponent } from 'src/app/components/home/middle-column/middle-column.component';
import { SearchComponent } from 'src/app/components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [{
      path: 'Home',
      component: MiddleColumnComponent
    },
    {
      path: 'Search', 
      // component: SearchComponent
      loadChildren: () => import('../FeatureModules/search.module').then(m => m.SearchModule)
    },
    {
      path: '',
      redirectTo: 'Home'
    }
  ]
    // resolve: { LoggedUserData: UserResolverService },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class HomeRoutingModule { }
