import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from 'src/app/components/search/search.component';
import { MiniUserCardComponent } from 'src/app/components/customElements/mini-user-card/mini-user-card.component';
import { SharedModule } from '../shared.module';
import { AppDialogsModule } from '../app-dialogs.module';
import { MaterialModule2 } from '../Material.module';
import { SearchRoutingModule } from '../FeatureRoutings/search-routing.module';

@NgModule({
  declarations: [
    SearchComponent,
    MiniUserCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppDialogsModule,
    SearchRoutingModule,

    // Material Modules
    MaterialModule2
  ]
})
export class SearchModule { }
