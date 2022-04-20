import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string, _afterDismissed?, _onAction?, duration?: number) {
    const snackBar = this.snackBar.open(message, action, {
      duration: duration | 2000,
    });
    snackBar.afterDismissed().subscribe(res => {
      if (_afterDismissed != null)
        _afterDismissed();
    }, err => { console.log(err) });
    snackBar.onAction().subscribe(res => {
      if (_onAction != null)
        _onAction();
    }, err => { console.log(err) });
  }
}
