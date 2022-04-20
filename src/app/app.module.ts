import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppDialogsModule } from './Modules/app-dialogs.module';

import { AppComponent } from './app.component';
import { MyAuthService } from './Services/my-auth.service';
import { NotificationService } from './Services/notification.service';
import { AuthGuard } from './guards/auth.guard';
import { UserResolverService } from './Services/user-resolver.service';
import { ImageCompressService, ResizeOptions } from 'ng2-image-compress';
import { ImageOptimizationService } from './Services/image-optimization.service';
import { SharedModule } from './Modules/shared.module';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { LayoutModule } from '@angular/cdk/layout';
import { ConfirmationDialogComponent } from './components/Dialogs/confirmation-dialog/confirmation-dialog.component';
import { ProfilePicUpdateDialogComponent } from './components/Dialogs/profile-pic-update-dialog/profile-pic-update-dialog.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule2 } from './Modules/Material.module';
import { environment } from 'src/environments/environment.prod';
import * as firebase from 'firebase';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    ProfilePicUpdateDialogComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule2,
    // MatButtonModule,
    // MatToolbarModule,
    // MatMenuModule,
    // MatSnackBarModule,
    // MatDialogModule,
    // MatFormFieldModule,
    // MatProgressBarModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,

    AppDialogsModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(
      environment.firebase, 'facetest-fe341'
    ),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFirestoreModule, // .enablePersistence(),
    AngularFireFunctionsModule,
    AngularFireStorageModule,
    LayoutModule,
  ],
  providers: [
    MyAuthService,
    NotificationService,
    AuthGuard,
    UserResolverService,
    ImageCompressService,
    ResizeOptions,
    ImageOptimizationService,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    ProfilePicUpdateDialogComponent,
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
