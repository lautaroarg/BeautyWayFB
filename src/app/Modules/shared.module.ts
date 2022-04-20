import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyLoaderComponent } from '../components/customElements/my-loader/my-loader.component';
// import { MatListModule, MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MiniNavbarComponent } from '../components/customElements/mini-navbar/mini-navbar.component';

@NgModule({
  declarations: [
    MyLoaderComponent,
    MiniNavbarComponent,
  ],
  imports: [
    RouterModule,
    // MaterialModule,
    MatListModule,
    MatButtonModule,
  ],
  exports:[
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    // MaterialModule,
    MatListModule,
    
    MyLoaderComponent,
    MiniNavbarComponent,
  ]
})
export class SharedModule { }
