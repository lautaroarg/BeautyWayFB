import { AngularFireStorage } from "@angular/fire/storage";
import { ImageOptimizationService } from "./../../../Services/image-optimization.service";
import { ImageCompressService } from "ng2-image-compress";
import { IProfesional } from "./../../../Models/i-user";
import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  RequiredValidator,
  EmailValidator,
  Validators,
} from "@angular/forms";
// import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';

// import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';

import * as _moment from "moment";
import { MyAuthService } from "src/app/Services/my-auth.service";
import { IUser } from "src/app/Models/i-user";
import { Subscription, Observable } from "rxjs";
import * as moment from "moment";
import { finalize, take } from "rxjs/operators";
// import { userInfo } from "os";
// import { format } from 'path';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class RegisterComponent implements OnInit, OnDestroy {
  FormRegisterUsuario: FormGroup;
  FormRegisterProfesional: FormGroup;

  file;
  thumbImage;
  UpdatePPForm: FormGroup;
  samplePic;
  showImage = false;
  processingImage: boolean = false;
  processingImageComplete: boolean = false;
  processingUpload: boolean = false;
  uploadPercent$: Observable<number>;
  downloadURL$: Observable<any>;
  Uploading: boolean = false;
  OutputImage;

  Loading = false;
  isUsuario = true;
  EmailErrorMessage = "";
  PasswordErrorMessage = "";
  TipoDocumentoSeleccionado = "";
  TipoDocumentoProfesionalSeleccionado = "";
  TipoModalidadTrabajoProfesionalSeleccionado = "";
  TipoDeServicioSeleccionado = "";
  FormValueChangesSub: Subscription;

  constructor(
    public MyAuth: MyAuthService,
    public storage: AngularFireStorage,
    private fbUsuario: FormBuilder,
    private fb: FormBuilder,
    public imageOptSrvc: ImageOptimizationService,
    private fbProfesional: FormBuilder
  ) {}

  ngOnInit() {
    this.UpdatePPForm = this.fb.group({
      InputImage: ["", Validators.required],
      ProfileCaption: "",
    });

    this.FormRegisterUsuario = this.fbUsuario.group({
      FirstName: ["", new RequiredValidator()],
      LastName: ["", new RequiredValidator()],
      Email: ["", new RequiredValidator(), new EmailValidator()],
      Gender: ["", new RequiredValidator()],
      Password: ["", new RequiredValidator()],
      nroDocumento: ["", new RequiredValidator()],
      Street: ["", new RequiredValidator()],
      Number: ["", new RequiredValidator()],
      Floor: [""],
      Dpto: [""],
      TipoDocumento: ["", new RequiredValidator()],
      Neighborhood: ["", new RequiredValidator()],
      City: ["", new RequiredValidator()],
      Service: ["", new RequiredValidator()],
      Proname: ["", new RequiredValidator()],
      DOB: "",
      Activo: true,
    });

    this.FormRegisterProfesional = this.fbProfesional.group({
      FirstName: ["", new RequiredValidator()],
      LastName: ["", new RequiredValidator()],
      Email: ["", new RequiredValidator(), new EmailValidator()],
      Gender: [""],
      Password: ["", new RequiredValidator()],
      nroDocumento: ["", new RequiredValidator()],
      Street: ["", new RequiredValidator()],
      Number: ["", new RequiredValidator()],
      Floor: [""],
      Dpto: [""],
      TipoDocumentoProfesionalSeleccionado: ["", new RequiredValidator()],
      TipoDeServicioSeleccionado: ["", new RequiredValidator()],
      TipoModalidadTrabajoProfesionalSeleccionado: [
        "",
        new RequiredValidator(),
      ],
      Neighborhood: ["", new RequiredValidator()],
      City: ["", new RequiredValidator()],
      Proname: ["", new RequiredValidator()],
      DOB: "",
      NombreComercial: "",
      PhoneNumber: [""],
      Activo: true,
    });

    this.FormValueChangesSub = this.FormRegisterUsuario.valueChanges.subscribe(
      (obs) => {
        this.EmailErrorMessage = "";
        this.PasswordErrorMessage = "";
      }
    );
  }

  ngOnDestroy() {
    try {
      this.FormValueChangesSub.unsubscribe();
    } catch (error) {}
  }

  // ESTE METODO PERMITE SELECCIONAR LA IMAGEN Y CARGARLA EN MEMORIA Y GUARDARLA EN LA VARIABLE FILE
  async onChange(fileInput: any) {
    this.processingImage = true;
    this.file = fileInput.target.files[0];
    //this.UpdatePPForm.value.InputImage = fileInput.target.files[0];
    const optimizeOptions = await this.imageOptSrvc
      .AdjustImageHeightWidth(fileInput.target.files[0], "ProfilePic")
      .toPromise();
    const observableImages =
      await ImageCompressService.filesToCompressedImageSourceEx(
        fileInput.target.files,
        optimizeOptions
      );
    const image = await observableImages.toPromise();
    this.OutputImage = image;
    const blob = await this.imageOptSrvc.dataURItoBlob(
      this.OutputImage.compressedImage.imageDataUrl
    );
    this.file = blob;
    this.showImage = true;
    this.processingImageComplete = true;
  }
  
  OnSubmit() {
    this.Loading = true;
    // debugger;
    // console.log(this.TipoDocumentoSeleccionado);
    this.MyAuth.Register(
      this.FormRegisterUsuario.value.Email,
      this.FormRegisterUsuario.value.Password
    )
      .then(async (user) => {
        console.log(user);

        const FormValues = this.FormRegisterUsuario.value;
        const UserInfo: IUser = {
          Id: user.user.uid,
          DisplayName: FormValues.FirstName + " " + FormValues.LastName,
          Email: user.user.email,
          Gender: FormValues.Gender,
          DOB: new Date(FormValues.DOB).valueOf(),
          PhotoURL: this.MyAuth.DefaultUserPicURL,
          FollowingCount: 0,
          FollowersCount: 0,
          PostsCount: 0,
          Provider: "Password",
          nroDocumento: FormValues.nroDocumento,
          TipoDocumento: this.TipoDocumentoSeleccionado,
          Street: FormValues.Street,
          Number: FormValues.Number,
          Floor: FormValues.Floor,
          Dpto: FormValues.Dpto,
          Neighborhood: FormValues.Neighborhood,
          City: FormValues.City,

          TipoServicioProfesional: null,
          ModalidadTrabajoProfesional: null,
          TipoDeUsuario: "usuario",
          NombreComercial: null,
          PhoneNumber: null,
          Activo: true,
          
        };
        debugger;
        if(this.calcularEdad(UserInfo.DOB)==true)
        {
        
        console.log(UserInfo);
        await this.MyAuth.afAuth.updateProfile({
          displayName: UserInfo.DisplayName,
          photoURL: UserInfo.PhotoURL,
        });
        
        
        await this.MyAuth.afStore
          .collection("Users")
          .doc(user.user.uid)
          .set(UserInfo);


          // aca mando la imagen a firebase storage
        const filePath =
          user.user.uid + "/ProfilePictures/" + moment().format("D-M-YYYY");
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, this.file, {
          customMetadata: { caption: this.UpdatePPForm.value.ProfileCaption },
        });
        this.Uploading = true;
        // observe percentage changes
        this.uploadPercent$ = task.percentageChanges();

        // get notified when the download URL is available
        task
          .snapshotChanges()
          .pipe(
            finalize(() => {
              this.downloadURL$ = fileRef.getDownloadURL();
              this.downloadURL$.pipe(take(1)).subscribe((URL: string) => {
                this.MyAuth.UpdateProfilePic(URL).subscribe(() => {
                  this.Loading = false;
                  this.MyAuth.NavTo("Home");
                });
              });
            })
          )
          .subscribe();
        
          //  aca mismo agregar la funcion de this.MyAuth para enviar email de verificacion
        }
        
      })

      .catch((error) => {
        // Handle Errors here.
        this.Loading = false;
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error);
        switch (errorCode) {
          case "auth/email-already-in-use":
            this.EmailErrorMessage = errorMessage;
            break;
          case "auth/invalid-email":
            this.EmailErrorMessage = errorMessage;
            break;
          case "auth/operation-not-allowed":
            console.log(errorMessage);
            this.EmailErrorMessage = errorMessage;
            break;
          case "auth/weak-password":
            this.PasswordErrorMessage = errorMessage;
            break;

          default:
            this.MyAuth.Notify.openSnackBar(
              "A ocurrido un error, porfavor intente mas tarde",
              ""
            );
            break;
        }
      });
  }

  cambiarEstado(event: any) {
    if (event.tab.textLabel == "Soy usuario") {
      this.isUsuario = true;
    } else {
      this.isUsuario = false;
    }
  }
  calcularEdad(dob: number){
    var hoy = Date.now();
    var fechaNacimiento = dob
    var edadMilisegundos = hoy - dob
    //anio resperensa a 1 año en milisegundos.
    var anio = 31536000000
    var edad = Math.round(edadMilisegundos/anio)
    if(edad>=18){
      return true;
    }
    else{
      return false;
    }
  }

  OnSubmitProfesional() {
    this.Loading = true;
    // debugger;
    // console.log(this.TipoDocumentoSeleccionado);
    this.MyAuth.Register(
      this.FormRegisterProfesional.value.Email,
      this.FormRegisterProfesional.value.Password
    )
      .then(async (user) => {
        console.log(user);

        const FormValues = this.FormRegisterProfesional.value;
        const UserInfo: IUser = {
          Id: user.user.uid,
          DisplayName: FormValues.FirstName + " " + FormValues.LastName,
          Email: user.user.email,
          Gender: FormValues.Gender,
          DOB: new Date(FormValues.DOB).valueOf(),
          PhotoURL: this.MyAuth.DefaultUserPicURL,
          FollowingCount: 0,
          FollowersCount: 0,
          PostsCount: 0,
          Provider: "Password",
          nroDocumento: FormValues.nroDocumento,
          TipoDocumento: this.TipoDocumentoProfesionalSeleccionado,
          ModalidadTrabajoProfesional:
            this.TipoModalidadTrabajoProfesionalSeleccionado,
          TipoServicioProfesional: this.TipoDeServicioSeleccionado,
          Street: FormValues.Street,
          Number: FormValues.Number,
          Floor: FormValues.Floor,
          Dpto: FormValues.Dpto,
          Neighborhood: FormValues.Neighborhood,
          City: FormValues.City,
          TipoDeUsuario: "profesional",
          NombreComercial: FormValues.NombreComercial,
          PhoneNumber: FormValues.PhoneNumber,
          Activo: true,
        };

        console.log(UserInfo);
        await this.MyAuth.afAuth.updateProfile({
          displayName: UserInfo.DisplayName,
          photoURL: UserInfo.PhotoURL,
        });
        await this.MyAuth.afStore
          .collection("Users")
          .doc(user.user.uid)
          .set(UserInfo);

        //  aca mismo agregar la funcion de this.MyAuth para enviar email de verificacion

        this.Loading = false;
        this.MyAuth.NavTo("Home");
      })

      .catch((error) => {
        // Handle Errors here.
        this.Loading = false;
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error);
        switch (errorCode) {
          case "auth/email-already-in-use":
            this.EmailErrorMessage = errorMessage;
            break;
          case "auth/invalid-email":
            this.EmailErrorMessage = errorMessage;
            break;
          case "auth/operation-not-allowed":
            console.log(errorMessage);
            this.EmailErrorMessage = errorMessage;
            break;
          case "auth/weak-password":
            this.PasswordErrorMessage = errorMessage;
            break;

          default:
            this.MyAuth.Notify.openSnackBar(
              "A ocurrido un error, porfavor intente mas tarde",
              ""
            );
            break;
        }
      });
  }
}
