import { NgModule } from '@angular/core';
import { MessagesComponent } from 'src/app/components/messages/messages.component';
import { ChatContainerComponent } from 'src/app/components/messages/chat-container/chat-container.component';
import { ChatListComponent } from 'src/app/components/messages/chat-list/chat-list.component';
import { SharedModule } from '../shared.module';
import { MessagesRoutingModule } from '../FeatureRoutings/messages-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
// import { MatSidenavModule, MatCardModule, MatTabsModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatIconModule, MatButtonModule, MatRadioModule, MatDatepickerModule, MatDialogModule, MatMenuModule } from '@angular/material';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
// import { MaterialModule2 } from '../Material.module';

@NgModule({
  declarations: [
    MessagesComponent, 
    ChatContainerComponent, 
    ChatListComponent
  ],
  imports: [
    SharedModule,
    MessagesRoutingModule,

    //Material modules
    // MaterialModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
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
    MatDialogModule,
  ]
})
export class MessagesModule { }
