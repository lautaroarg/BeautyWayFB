import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { ProfilePicUpdateDialogComponent } from '../../Dialogs/profile-pic-update-dialog/profile-pic-update-dialog.component';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.css'],
})
export class RightColumnComponent implements OnInit {

  constructor(
    public MyAuth: MyAuthService,
    public dialog: MatDialog) { }

  openProfilePicUpdateDialog(): void {
    const dialogRef = this.dialog.open(ProfilePicUpdateDialogComponent, {
      //width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');

    });
  }

  ngOnInit() {
  }

}
