import { IProfesional } from './../../../Models/i-user';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, EmailValidator } from '@angular/forms';
// import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';

// import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';

import * as _moment from 'moment';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { IUser } from 'src/app/Models/i-user';
import { Subscription } from 'rxjs';
// import { format } from 'path';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class RegisterComponent implements OnInit, OnDestroy {
  FormRegisterUsuario: FormGroup;
  FormRegisterProfesional: FormGroup;

  Loading = false;
  isUsuario = true;
  EmailErrorMessage = '';
  PasswordErrorMessage = '';
  TipoDocumentoSeleccionado = '';
  TipoDocumentoProfesionalSeleccionado = '';
  TipoModalidadTrabajoProfesionalSeleccionado = '';
  TipoDeServicioSeleccionado = '';
  FormValueChangesSub: Subscription;

  constructor(
    public MyAuth: MyAuthService,
    private fbUsuario: FormBuilder,
    private fbProfesional: FormBuilder) { }

  ngOnInit() {
    this.FormRegisterUsuario = this.fbUsuario.group({
      FirstName: ['', new RequiredValidator],
      LastName: ['', new RequiredValidator],
      Email: ['', new RequiredValidator, new EmailValidator],
      Gender: ['Masculino', new RequiredValidator],
      Password: ['', new RequiredValidator],
      nroDocumento: ['', new RequiredValidator],
      Street: ['', new RequiredValidator],
      Number: ['', new RequiredValidator],
      Floor: [''],
      Dpto: [''],
      TipoDocumento: ['', new RequiredValidator],
      Neighborhood: ['', new RequiredValidator],
      City: ['', new RequiredValidator],
      Service: ['', new RequiredValidator],
      Proname: ['', new RequiredValidator],
      DOB: '',

    });

    this.FormRegisterProfesional = this.fbProfesional.group({
      FirstName: ['', new RequiredValidator],
      LastName: ['', new RequiredValidator],
      Email: ['', new RequiredValidator, new EmailValidator],
      Gender: ['Masculino'],
      Password: ['', new RequiredValidator],
      nroDocumento: ['', new RequiredValidator],
      Street: ['', new RequiredValidator],
      Number: ['', new RequiredValidator],
      Floor: [''],
      Dpto: [''],
      TipoDocumentoProfesionalSeleccionado: ['', new RequiredValidator],
      TipoDeServicioSeleccionado: ['', new RequiredValidator],
      TipoModalidadTrabajoProfesionalSeleccionado: ['', new RequiredValidator],
      Neighborhood: ['', new RequiredValidator],
      City: ['', new RequiredValidator],
      Proname: ['', new RequiredValidator],
      DOB: '',
      NombreComercial: '',
      

    }
    )

    this.FormValueChangesSub = this.FormRegisterUsuario.valueChanges.subscribe(obs => {
      this.EmailErrorMessage = '';
      this.PasswordErrorMessage = '';
    });
  }

  ngOnDestroy() {
    try {
      this.FormValueChangesSub.unsubscribe();
    } catch (error) {

    }
  }

  OnSubmit() {
    this.Loading = true;
    // debugger;
    // console.log(this.TipoDocumentoSeleccionado);
    this.MyAuth.Register(this.FormRegisterUsuario.value.Email, this.FormRegisterUsuario.value.Password)
      .then(async (user) => {
        console.log(user);


        const FormValues = this.FormRegisterUsuario.value;
        const UserInfo: IUser = {
          Id: user.user.uid,
          DisplayName: FormValues.FirstName + ' ' + FormValues.LastName,
          Email: user.user.email,
          Gender: FormValues.Gender,
          DOB: new Date(FormValues.DOB).valueOf(),
          PhotoURL: this.MyAuth.DefaultUserPicURL,
          FollowingCount: 0,
          FollowersCount: 0,
          PostsCount: 0,
          Provider: 'Password',
          IsProfesional: false,
          nroDocumento: FormValues.nroDocumento,
          TipoDocumento: this.TipoDocumentoSeleccionado,
          Street: FormValues.Street,
          Number: FormValues.Number,
          Floor: FormValues.Floor,
          Dpto: FormValues.Dpto,
          Neighborhood: FormValues.Neighborhood,
          City: FormValues.City,
          Service: FormValues.Service,
          TipoServicioProfesional: null,
          ModalidadTrabajoProfesional: null,
          TipoDeUsuario: 'usuario',
          NombreComercial: null,
          TipoServicio: ''
        };





        console.log(UserInfo);
        await this.MyAuth.afAuth.updateProfile({ displayName: UserInfo.DisplayName, photoURL: UserInfo.PhotoURL });
        await this.MyAuth.afStore.collection('Users').doc(user.user.uid).set(UserInfo);

        //  aca mismo agregar la funcion de this.MyAuth para enviar email de verificacion


        this.Loading = false;
        this.MyAuth.NavTo('Home')
      })

      .catch((error) => {
        // Handle Errors here.
        this.Loading = false;
        debugger;
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error);
        switch (errorCode) {
          case 'auth/email-already-in-use':
            this.EmailErrorMessage = errorMessage;
            break;
          case 'auth/invalid-email':
            this.EmailErrorMessage = errorMessage;
            break;
          case 'auth/operation-not-allowed':
            console.log(errorMessage);
            this.EmailErrorMessage = errorMessage;
            break;
          case 'auth/weak-password':
            this.PasswordErrorMessage = errorMessage;
            break;

          default:
            this.MyAuth.Notify.openSnackBar('A ocurrido un error, porfavor intente mas tarde', '')
            break;
        }
      });
  }
  OnSubmitProfesional() {
    this.Loading = true;
    // debugger;
    // console.log(this.TipoDocumentoSeleccionado);
    this.MyAuth.Register(this.FormRegisterProfesional.value.Email, this.FormRegisterProfesional.value.Password)
      .then(async (user) => {
        console.log(user);


        const FormValues = this.FormRegisterProfesional.value;
        const UserInfo: IUser = {
          Id: user.user.uid,
          DisplayName: FormValues.FirstName + ' ' + FormValues.LastName,
          Email: user.user.email,
          Gender: FormValues.Gender,
          DOB: new Date(FormValues.DOB).valueOf(),
          PhotoURL: this.MyAuth.DefaultUserPicURL,
          FollowingCount: 0,
          FollowersCount: 0,
          PostsCount: 0,
          Provider: 'Password',
          IsProfesional: false,
          nroDocumento: FormValues.nroDocumento,
          TipoDocumento: this.TipoDocumentoProfesionalSeleccionado,
          ModalidadTrabajoProfesional: FormValues.TipoModalidadTrabajoProfesionalSeleccionado,
          TipoServicioProfesional: FormValues.TipoDocumentoProfesionalSeleccionado,
          Street: FormValues.Street,
          Number: FormValues.Number,
          Floor: FormValues.Floor,
          Dpto: FormValues.Dpto,
          Neighborhood: FormValues.Neighborhood,
          City: FormValues.City,
          Service: FormValues.TipoDeServicioSeleccionado,
          TipoDeUsuario: 'profesional',
          NombreComercial: '',
          TipoServicio: ''
        };





        console.log(UserInfo);
        await this.MyAuth.afAuth.updateProfile({ displayName: UserInfo.DisplayName, photoURL: UserInfo.PhotoURL });
        await this.MyAuth.afStore.collection('Users').doc(user.user.uid).set(UserInfo);

        //  aca mismo agregar la funcion de this.MyAuth para enviar email de verificacion


        this.Loading = false;
        this.MyAuth.NavTo('Home')
      })

      .catch((error) => {
        // Handle Errors here.
        this.Loading = false;
        debugger;
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error);
        switch (errorCode) {
          case 'auth/email-already-in-use':
            this.EmailErrorMessage = errorMessage;
            break;
          case 'auth/invalid-email':
            this.EmailErrorMessage = errorMessage;
            break;
          case 'auth/operation-not-allowed':
            console.log(errorMessage);
            this.EmailErrorMessage = errorMessage;
            break;
          case 'auth/weak-password':
            this.PasswordErrorMessage = errorMessage;
            break;

          default:
            this.MyAuth.Notify.openSnackBar('A ocurrido un error, porfavor intente mas tarde', '')
            break;
        }
      });
  }
}
