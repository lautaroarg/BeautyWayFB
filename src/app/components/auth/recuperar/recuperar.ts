import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import { MyAuthService } from 'src/app/Services/my-auth.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.html',
  styleUrls: ['./recuperar.css'],
})
export class RecuperarComponent implements OnInit {
  NetworkErrorCount = 0;
  FormRecuperar: FormGroup;
  EmairrorMessalEge = '';
  Loading = false;
  constructor(private fb: FormBuilder, private myAuth: MyAuthService) {}

  ngOnInit() {
    this.FormRecuperar = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  OnSubmit() {
    this.Loading = true;
    this.myAuth.afAuth.sendPasswordResetEmail(this.FormRecuperar.controls['Email'].value).then(
      (response) => {
        // user.sendPasswordResetEmail(this.FormRecuperar.value.Email).then(() => {
        this.Loading = false;
      
        this.myAuth.Notify.openSnackBar(
          'Correo enviado correctamente, revise su casilla',
          ''
        );
        // }).catch((error: any) => {
        //   this.Loading = false;
        //   this.myAuth.Notify.openSnackBar('Hubo un error al recuperar su cuenta', '');
        // });
        this.myAuth.NavTo('/Auth/Login');
      },
      (error) => {
        this.Loading = false;
        this.myAuth.Notify.openSnackBar(
          'Hubo un error al recuperar su cuenta',
          ''
        );
      }
    );
  }
}
