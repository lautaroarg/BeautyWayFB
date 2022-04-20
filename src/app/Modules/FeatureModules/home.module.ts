import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/components/home/home/home.component';
import { SharedModule } from '../shared.module';
import { AppDialogsModule } from '../app-dialogs.module';
import { HomeRoutingModule } from '../FeatureRoutings/home-routing.module';
import { MaterialModule2 } from '../Material.module';
import { MiniUserCardComponent } from 'src/app/components/customElements/mini-user-card/mini-user-card.component';
import { SearchComponent } from 'src/app/components/search/search.component';

@NgModule({
  declarations: [
    HomeComponent,
    // SearchComponent,
    // MiniUserCardComponent
  ],
  imports: [
    SharedModule,
    AppDialogsModule,
    HomeRoutingModule,

    // Material Modules
    MaterialModule2,
  ]
})
export class HomeModule { }
