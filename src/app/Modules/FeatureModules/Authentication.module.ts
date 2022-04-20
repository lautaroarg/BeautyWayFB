import { NgModule } from '@angular/core';
// import { MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule, MatRadioModule, MatDatepickerModule, MatIconModule, MatSelectModule } from '@angular/material';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { SharedModule } from '../shared.module';

import { RegisterComponent } from 'src/app/components/auth/register/register.component';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { AdditionalUserInfoComponent } from 'src/app/components/auth/additional-user-info/additional-user-info.component';
import { AuthenticationRoutingModule } from '../FeatureRoutings/authentication-routing.module';
import { MaterialModule2 } from '../Material.module';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AdditionalUserInfoComponent,
  ],
  imports: [
    SharedModule,
    AuthenticationRoutingModule,

    // Material Modules
    MaterialModule2,
    // MatFormFieldModule,
    // MatCardModule,
    // MatInputModule,
    // MatIconModule,
    // MatButtonModule,
    // MatRadioModule,
    // MatMomentDateModule,
    // MatDatepickerModule,
    // MatSelectModule,
  ]
})
export class AuthenticationModule { }
