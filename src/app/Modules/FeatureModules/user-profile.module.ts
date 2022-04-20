// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgModule } from '@angular/core';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { UserProfileComponent } from 'src/app/components/customElements/user-profile/user-profile.component';
import { AboutUserComponent } from 'src/app/components/customElements/about-user/about-user.component';
import { SharedModule } from '../shared.module';
import { AppDialogsModule } from '../app-dialogs.module';
import { UserProfileRoutingModule } from '../FeatureRoutings/user-profile-routing.module';
import { FriendsComponent } from 'src/app/components/customElements/friends/friends.component';
import { MaterialModule2 } from '../Material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ProfileComponent,
    UserProfileComponent,
    AboutUserComponent,
    FriendsComponent
  ],
  imports: [
    SharedModule,
    AppDialogsModule,
    UserProfileRoutingModule,

    //Material modules
    // MaterialModule2,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    // MatMomentDateModule,
    MatDatepickerModule,
    MatDialogModule
  ]
})
export class UserProfileModule { }
