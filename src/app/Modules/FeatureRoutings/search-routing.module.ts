import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from 'src/app/components/search/search.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: SearchComponent,
  canActivate: [AuthGuard]
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class SearchRoutingModule { }
