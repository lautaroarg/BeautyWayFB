(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-FeatureModules-Authentication-module"],{

/***/ "+13j":
/*!*****************************************************************!*\
  !*** ./src/app/Modules/FeatureModules/Authentication.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.module */ "jNvo");
/* harmony import */ var src_app_components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/auth/register/register.component */ "+jqZ");
/* harmony import */ var src_app_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/auth/login/login.component */ "HzFZ");
/* harmony import */ var src_app_components_auth_additional_user_info_additional_user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/auth/additional-user-info/additional-user-info.component */ "f0Yz");
/* harmony import */ var _FeatureRoutings_authentication_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FeatureRoutings/authentication-routing.module */ "neZz");
/* harmony import */ var _Material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Material.module */ "NrK8");


// import { MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule, MatRadioModule, MatDatepickerModule, MatIconModule, MatSelectModule } from '@angular/material';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';






let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            src_app_components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
            src_app_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
            src_app_components_auth_additional_user_info_additional_user_info_component__WEBPACK_IMPORTED_MODULE_5__["AdditionalUserInfoComponent"],
        ],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _FeatureRoutings_authentication_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticationRoutingModule"],
            // Material Modules
            _Material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule2"],
        ]
    })
], AuthenticationModule);



/***/ }),

/***/ "+jqZ":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "FTa3");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.css */ "akM6");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _Services_image_optimization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../Services/image-optimization.service */ "DpT1");
/* harmony import */ var ng2_image_compress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-image-compress */ "PT9p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/my-auth.service */ "Sm6f");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");











let RegisterComponent = class RegisterComponent {
    constructor(MyAuth, storage, fbUsuario, fb, imageOptSrvc, fbProfesional) {
        this.MyAuth = MyAuth;
        this.storage = storage;
        this.fbUsuario = fbUsuario;
        this.fb = fb;
        this.imageOptSrvc = imageOptSrvc;
        this.fbProfesional = fbProfesional;
        this.showImage = false;
        this.showImageProfesional = false;
        this.processingImage = false;
        this.processingImageProgfesional = false;
        this.processingImageComplete = false;
        this.processingImageCompleteProfesional = false;
        this.processingUpload = false;
        this.Uploading = false;
        this.Loading = false;
        this.isUsuario = true;
        this.EmailErrorMessage = "";
        this.PasswordErrorMessage = "";
        this.TipoDocumentoSeleccionado = "";
        this.TipoDocumentoProfesionalSeleccionado = "";
        this.TipoModalidadTrabajoProfesionalSeleccionado = "";
        this.TipoDeServicioSeleccionado = "";
    }
    ngOnInit() {
        this.UpdatePPForm = this.fb.group({
            InputImage: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            ProfileCaption: "",
        });
        this.UpdateProProPicForm = this.fb.group({
            InputImage: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            ProfileCaption: "",
        });
        this.FormRegisterUsuario = this.fbUsuario.group({
            FirstName: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            LastName: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            Email: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"](), new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["EmailValidator"]()],
            Gender: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            Password: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            nroDocumento: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            Street: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            Number: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            Floor: [""],
            Dpto: [""],
            TipoDocumento: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            Neighborhood: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            City: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            Service: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            Proname: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            DOB: "",
            Activo: true,
        });
        this.FormRegisterProfesional = this.fbProfesional.group({
            FirstName: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            LastName: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            Email: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"](), new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["EmailValidator"]()],
            Gender: [""],
            Password: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            nroDocumento: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            Street: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            Number: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            Floor: [""],
            Dpto: [""],
            TipoDocumentoProfesionalSeleccionado: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            TipoDeServicioSeleccionado: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            TipoModalidadTrabajoProfesionalSeleccionado: [
                "",
                new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"](),
            ],
            Neighborhood: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            City: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            Proname: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
            DOB: "",
            NombreComercial: "",
            PhoneNumber: [""],
            Activo: true,
        });
        this.FormValueChangesSub = this.FormRegisterUsuario.valueChanges.subscribe((obs) => {
            this.EmailErrorMessage = "";
            this.PasswordErrorMessage = "";
        });
    }
    ngOnDestroy() {
        try {
            this.FormValueChangesSub.unsubscribe();
        }
        catch (error) { }
    }
    // ESTE METODO PERMITE SELECCIONAR LA IMAGEN Y CARGARLA EN MEMORIA Y GUARDARLA EN LA VARIABLE FILE
    onChange(fileInput) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isUsuario) {
                this.processingImage = true;
                const observableImages = yield ng2_image_compress__WEBPACK_IMPORTED_MODULE_5__["ImageCompressService"].filesToCompressedImageSourceEx(fileInput.target.files, null);
                const image = yield observableImages.toPromise();
                this.UpdateProProPicForm.value.InputImage = image;
                this.OutputImage = image;
                const blob = yield this.imageOptSrvc.dataURItoBlob(this.OutputImage.compressedImage.imageDataUrl);
                this.file = blob;
                this.showImage = true;
                this.processingImageComplete = true;
            }
            else {
                this.processingImageProgfesional = true;
                const observableImages = yield ng2_image_compress__WEBPACK_IMPORTED_MODULE_5__["ImageCompressService"].filesToCompressedImageSourceEx(fileInput.target.files, null);
                const image = yield observableImages.toPromise();
                this.UpdateProProPicForm.value.InputImage = image;
                this.OutputImageProfesional = image;
                const blob = yield this.imageOptSrvc.dataURItoBlob(this.OutputImageProfesional.compressedImage.imageDataUrl);
                this.fileProfesional = blob;
                this.showImageProfesional = true;
                this.processingImageCompleteProfesional = true;
            }
        });
    }
    OnSubmit() {
        this.Loading = true;
        this.MyAuth.Register(this.FormRegisterUsuario.value.Email, this.FormRegisterUsuario.value.Password)
            .then((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(user);
            const FormValues = this.FormRegisterUsuario.value;
            const UserInfo = {
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
            if (this.calcularEdad(UserInfo.DOB) == true) {
                console.log(UserInfo);
                yield this.MyAuth.afAuth.updateProfile({
                    displayName: UserInfo.DisplayName,
                    photoURL: UserInfo.PhotoURL,
                });
                yield this.MyAuth.afStore
                    .collection("Users")
                    .doc(user.user.uid)
                    .set(UserInfo);
                // aca mando la imagen a firebase storage
                const filePath = "Usuarios" + user.user.uid + "/ProfilePictures/" + moment__WEBPACK_IMPORTED_MODULE_9__().format("D-M-YYYY");
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
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
                    this.downloadURL$ = fileRef.getDownloadURL();
                    this.downloadURL$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe((URL) => {
                        this.MyAuth.UpdateProfilePic(URL).subscribe(() => {
                            this.Loading = false;
                            this.MyAuth.NavTo("Home");
                        });
                    });
                }))
                    .subscribe();
                //  aca mismo agregar la funcion de this.MyAuth para enviar email de verificacion
            }
        }))
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
                    this.MyAuth.Notify.openSnackBar("A ocurrido un error, porfavor intente mas tarde", "");
                    break;
            }
        });
    }
    cambiarEstado(event) {
        if (event.tab.textLabel == "Soy usuario") {
            this.isUsuario = true;
        }
        else {
            this.isUsuario = false;
        }
    }
    calcularEdad(dob) {
        var hoy = Date.now();
        var fechaNacimiento = dob;
        var edadMilisegundos = hoy - dob;
        //anio resperensa a 1 año en milisegundos.
        var anio = 31536000000;
        var edad = Math.round(edadMilisegundos / anio);
        if (edad >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
    OnSubmitProfesional() {
        this.Loading = true;
        this.MyAuth.Register(this.FormRegisterProfesional.value.Email, this.FormRegisterProfesional.value.Password)
            .then((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(user);
            const FormValues = this.FormRegisterProfesional.value;
            const UserInfo = {
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
                ModalidadTrabajoProfesional: this.TipoModalidadTrabajoProfesionalSeleccionado,
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
            yield this.MyAuth.afAuth.updateProfile({
                displayName: UserInfo.DisplayName,
                photoURL: UserInfo.PhotoURL,
            });
            yield this.MyAuth.afStore
                .collection("Users")
                .doc(user.user.uid)
                .set(UserInfo);
            const filePath = "Profesional" + user.user.uid + "/ProfilePictures/" + moment__WEBPACK_IMPORTED_MODULE_9__().format("D-M-YYYY");
            const fileRef = this.storage.ref(filePath);
            const task = this.storage.upload(filePath, this.file, {
                customMetadata: { caption: this.UpdatePPForm.value.ProfileCaption },
            });
            this.Uploading = true;
            this.uploadPercent$ = task.percentageChanges();
            // get notified when the download URL is available
            task
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
                this.downloadURL$ = fileRef.getDownloadURL();
                this.downloadURL$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe((URL) => {
                    this.MyAuth.UpdateProfilePic(URL).subscribe(() => {
                        this.Loading = false;
                        this.MyAuth.NavTo("Home");
                    });
                });
            }))
                .subscribe();
            //  aca mismo agregar la funcion de this.MyAuth para enviar email de verificacion
            this.Loading = false;
            this.MyAuth.NavTo("Home");
        }))
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
                    this.MyAuth.Notify.openSnackBar("A ocurrido un error, porfavor intente mas tarde", "");
                    break;
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_8__["MyAuthService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _Services_image_optimization_service__WEBPACK_IMPORTED_MODULE_4__["ImageOptimizationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: "app-register",
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_8__["MyAuthService"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _Services_image_optimization_service__WEBPACK_IMPORTED_MODULE_4__["ImageOptimizationService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
], RegisterComponent);



/***/ }),

/***/ "FTa3":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/register/register.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" id=\"grid\">\r\n  <div class=\"col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\r\n    <mat-card class=\"FullCard\">\r\n      <mat-card-header>\r\n        <mat-card-title>Registrarse</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <mat-tab-group (selectedTabChange)=\"cambiarEstado($event)\">\r\n          <mat-tab label=\"Soy usuario\" (model)=\"isUsuario\">\r\n            <form class=\"example-form\" [formGroup]=\"FormRegisterUsuario\">\r\n              <div class=\"controls-container\">\r\n                <form [formGroup]=\"UpdatePPForm\" (submit)=\"OnSubmit()\">\r\n                  <div mat-dialog-content>\r\n                    <input type=\"file\" style=\"display:none;\" formControlName=\"InputImage\" accept=\"image/*\" #InputFile\r\n                      (change)=\"onChange($event)\" required>\r\n                    <button mat-icon-button type=\"button\" (click)=\"InputFile.click()\" *ngIf=\"OutputImage == undefined\">\r\n                      <i class=\"fal fa-paperclip fa-lg\"></i>\r\n                    </button>\r\n                    <div>\r\n                      <img src=\"{{OutputImage.compressedImage.imageDataUrl}}\" width=\"150\" height=\"150\" *ngIf=\"showImage\"\r\n                        class=\"responsive-img\" />\r\n                    </div>\r\n                  </div>\r\n                  <div mat-dialog-actions>\r\n                    <mat-progress-bar *ngIf=\"Uploading\" mode=\"determinate\" [value]=\"(uploadPercent$ | async)\">\r\n                    </mat-progress-bar>\r\n                    <button mat-raised-button type=\"reset\" (click)=\"onNoClick()\">Cancelar</button>\r\n                    <button mat-raised-button color=\"primary\" (click)=\"InputFile.click()\"\r\n                      [disabled]=\"!UpdatePPForm.valid || !processingImageComplete\"\r\n                      [attr.cdkFocusInitial]=\"processingImageComplete ? '' : null\">Actualizar</button>\r\n                  </div>\r\n                </form>\r\n                <div class=\"row\" style=\"margin:0%;\">\r\n                  <div class=\"col-6\" align=right style=\"margin-top: 1%;\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                      <mat-label>Tipo de documento</mat-label>\r\n                      <mat-select [(value)]=\"TipoDocumentoSeleccionado\" required>\r\n                        <mat-option value=\"DNI\">\r\n                          DNI\r\n                        </mat-option>\r\n                        <mat-option value=\"Pasaporte\">\r\n                          Pasaporte\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\" style=\"margin-top:2.4%;\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Nro documento\" formControlName=\"nroDocumento\" type=\"text\"\r\n                        autocomplete=\"off\" accept=\"nroDocumento\" required>\r\n                      <mat-error *ngIf=\"FormRegisterUsuario.controls.nroDocumento.hasError('required')\">\r\n                        Su número de documento es <strong>obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Nombre\" formControlName=\"FirstName\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"FirstName\" required>\r\n                      <mat-error *ngIf=\"FormRegisterUsuario.controls.FirstName.hasError('required')\">\r\n                        Su nombre es <strong>obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Apellido\" formControlName=\"LastName\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"LastName\" required>\r\n                      <mat-error *ngIf=\"FormRegisterUsuario.controls.LastName.hasError('required')\">\r\n                        Su apellido es<strong> obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\" align=center>\r\n                  <mat-radio-group formControlName=\"Gender\" class=\"form-field w-100\">\r\n                    <mat-radio-button value=\"Masculino\" name=\"Gender\">Masculino</mat-radio-button>\r\n                    <mat-radio-button value=\"Femenino\" name=\"Gender\" style=\"margin: 0 20px;\">Femenino</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <mat-form-field class=\"form-field w-100\">\r\n                    <input matInput [matDatepicker]=\"dp\" placeholder=\"Fecha de Nacimiento\" formControlName=\"DOB\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dp></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Calle\" formControlName=\"Street\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Street\" required>\r\n                      <mat-error *ngIf=\"FormRegisterUsuario.controls.Street.hasError('required')\">\r\n                        Su calle es<strong> obligatoria</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Altura\" formControlName=\"Number\" type=\"number\" autocomplete=\"off\"\r\n                        accept=\"Number\" required>\r\n                      <mat-error *ngIf=\"FormRegisterUsuario.controls.Number.hasError('required')\">\r\n                        La altura de su domicilio es<strong> obligatoria</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Piso\" formControlName=\"Floor\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Floor\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Departamento\" formControlName=\"Dpto\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Dpto\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Barrio\" formControlName=\"Neighborhood\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Neighborhood\" required>\r\n                      <mat-error *ngIf=\"FormRegisterUsuario.controls.Street.hasError('required')\">\r\n                        Su barrio es<strong> obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Localidad\" formControlName=\"City\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"City\" required>\r\n                      <mat-error *ngIf=\"FormRegisterUsuario.controls.City.hasError('required')\">\r\n                        La localidad es<strong> obligatoria</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <mat-form-field class=\"form-field w-100\">\r\n                    <input matInput placeholder=\"Correo electronico\" formControlName=\"Email\" type=\"email\" required>\r\n                    <mat-hint>{{EmailErrorMessage}}</mat-hint>\r\n                    <mat-error *ngIf=\"FormRegisterUsuario.controls.Email.hasError('email')\">\r\n                      Por favor, Ingrese un correo electronico valido\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"FormRegisterUsuario.controls.Email.hasError('required')\">\r\n                      Su correo es <strong>obligatorio</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <mat-form-field class=\"form-field w-100\">\r\n                    <input matInput placeholder=\"Contraseña\" formControlName=\"Password\" type=\"password\" required>\r\n                    <mat-hint>{{PasswordErrorMessage}}</mat-hint>\r\n                    <mat-error *ngIf=\"FormRegisterUsuario.controls.Password.hasError('required')\">\r\n                      Contraseña <strong>obligatoria</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </mat-tab>\r\n          <mat-tab label=\"Soy profesional\" (model)=\"isUsuario!\">\r\n            <form class=\"example-form\" [formGroup]=\"FormRegisterProfesional\">\r\n              <div class=\"controls-container\">\r\n                <form [formGroup]=\"UpdateProProPicForm\" (submit)=\"OnSubmit()\">\r\n                  <div mat-dialog-content>\r\n                    <input type=\"file\" style=\"display:none;\" formControlName=\"InputImage\" accept=\"image/*\"\r\n                      #InputFileProfesional (change)=\"onChange($event)\" required>\r\n                    <button mat-icon-button type=\"button\" (click)=\"InputFileProfesional.click()\"\r\n                      *ngIf=\"OutputImageProfesional== undefined\">\r\n                      <i class=\"fal fa-paperclip fa-lg\"></i>\r\n                    </button>\r\n                    <div>\r\n                      <img src=\"{{OutputImageProfesional.compressedImage.imageDataUrl}}\" width=\"100px\" height=\"100px\"\r\n                        *ngIf=\"showImageProfesional\" class=\"responsive-img\" />\r\n                    </div>\r\n                  </div>\r\n                  <div mat-dialog-actions>\r\n                    <mat-progress-bar *ngIf=\"Uploading\" mode=\"determinate\" [value]=\"(uploadPercent$ | async)\">\r\n                    </mat-progress-bar>\r\n                    <button mat-raised-button type=\"reset\" (click)=\"onNoClick()\">Cancelar</button>\r\n                    <button mat-raised-button color=\"primary\" (click)=\"InputFileProfesional.click()\"\r\n                      [disabled]=\"!UpdateProProPicForm.valid || !processingImageCompleteProfesional\"\r\n                      [attr.cdkFocusInitial]=\"processingImageCompleteProfesional ? '' : null\">Actualizar</button>\r\n                  </div>\r\n                </form>\r\n                <div class=\"row\" style=\"margin:0%;\">\r\n                  <div class=\"col-6\" align=right style=\"margin-top: 1%;\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                      <mat-label>Tipo de documento</mat-label>\r\n                      <mat-select [(value)]=\"TipoDocumentoProfesionalSeleccionado\" required>\r\n                        <mat-option value=\"DNI\">\r\n                          DNI\r\n                        </mat-option>\r\n                        <mat-option value=\"Pasaporte\">\r\n                          Pasaporte\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\" style=\"margin-top:2.4%;\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Nro documento\" formControlName=\"nroDocumento\" type=\"text\"\r\n                        autocomplete=\"off\" accept=\"nroDocumento\" required>\r\n                      <mat-error *ngIf=\"FormRegisterProfesional.controls.nroDocumento.hasError('required')\">\r\n                        Su número de documento es <strong>obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Nombre\" formControlName=\"FirstName\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"FirstName\" required>\r\n                      <mat-error *ngIf=\"FormRegisterProfesional.controls.FirstName.hasError('required')\">\r\n                        Su nombre es <strong>obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Apellido\" formControlName=\"LastName\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"LastName\" required>\r\n                      <mat-error *ngIf=\"FormRegisterProfesional.controls.LastName.hasError('required')\">\r\n                        Su apellido es<strong> obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\" align=center>\r\n                  <mat-radio-group formControlName=\"Gender\" class=\"form-field w-100\">\r\n                    <mat-radio-button value=\"Masculino\" name=\"Gender\">Masculino</mat-radio-button>\r\n                    <mat-radio-button value=\"Femenino\" name=\"Gender\" style=\"margin: 0 20px;\">Femenino</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <mat-form-field class=\"form-field w-100\">\r\n                    <input matInput [matDatepicker]=\"dpp\" placeholder=\"Fecha de Nacimiento\" formControlName=\"DOB\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dpp\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dpp></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Calle\" formControlName=\"Street\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Street\" required>\r\n                      <mat-error *ngIf=\"FormRegisterProfesional.controls.Street.hasError('required')\">\r\n                        Su calle es<strong> obligatoria</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Altura\" formControlName=\"Number\" type=\"number\" autocomplete=\"off\"\r\n                        accept=\"Number\" required>\r\n                      <mat-error *ngIf=\"FormRegisterProfesional.controls.Number.hasError('required')\">\r\n                        La altura de su domicilio es<strong> necesaria</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Piso\" formControlName=\"Floor\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Floor\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Departamento\" formControlName=\"Dpto\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Dpto\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Barrio\" formControlName=\"Neighborhood\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Neighborhood\" required>\r\n                      <mat-error *ngIf=\"FormRegisterProfesional.controls.Street.hasError('required')\">\r\n                        Su barrio es<strong> obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Localidad\" formControlName=\"City\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"City\" required>\r\n                      <mat-error *ngIf=\"FormRegisterProfesional.controls.City.hasError('required')\">\r\n                        La localidad es<strong> obligatoria</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\" style=\"text-align: center\">\r\n                      <input matInput placeholder=\"Nombre comercial/Nombre del local\" formControlName=\"NombreComercial\"\r\n                        type=\"text\" autocomplete=\"off\" accept=\"NombreComercial\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\" style=\"text-align: center\">\r\n                      <input matInput placeholder=\"Número Comercial\" formControlName=\"PhoneNumber\" type=\"text\"\r\n                        autocomplete=\"off\" accept=\"PhoneNumber\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\" align=\"right\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                      <mat-label>Modalidad de trabajo</mat-label>\r\n                      <mat-select [(value)]=\"TipoModalidadTrabajoProfesionalSeleccionado\">\r\n                        <mat-option value=\"Domicilio\">\r\n                          Domicilio\r\n                        </mat-option>\r\n                        <mat-option value=\"Local\">\r\n                          Local\r\n                        </mat-option>\r\n                        <mat-option value=\"Hibrido\">\r\n                          Hibrido\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-3\" align=right>\r\n                    <mat-form-field appearance=\"fill\">\r\n                      <mat-label>Tipo de servicio</mat-label>\r\n                      <mat-select [(value)]=\"TipoDeServicioSeleccionado\">\r\n                        <mat-option value=\"Peluqueria\">\r\n                          Peluqueria\r\n                        </mat-option>\r\n                        <mat-option value=\"Barberia\">\r\n                          Barberia\r\n                        </mat-option>\r\n                        <mat-option value=\"Manicuria\">\r\n                          Manicuria\r\n                        </mat-option>\r\n                        <mat-option value=\"Pedicuria/Podologia\">\r\n                          Pedicuria/Podologia\r\n                        </mat-option>\r\n                        <mat-option value=\"Maquillaje\">\r\n                          Maquillaje\r\n                        </mat-option>\r\n                        <mat-option value=\"Tratamientos Corporales\">\r\n                          Tratamientos Corporales\r\n                        </mat-option>\r\n                        <mat-option value=\"Depilacion\">\r\n                          Depilación\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <mat-form-field class=\"form-field w-100\">\r\n                    <input matInput placeholder=\"Correo electronico\" formControlName=\"Email\" type=\"email\" required>\r\n                    <mat-hint>{{EmailErrorMessage}}</mat-hint>\r\n                    <mat-error *ngIf=\"FormRegisterProfesional.controls.Email.hasError('email')\">\r\n                      Por favor, Ingrese un correo electronico valido\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"FormRegisterProfesional.controls.Email.hasError('required')\">\r\n                      Su correo es <strong>obligatorio</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <mat-form-field class=\"form-field w-100\">\r\n                    <input matInput placeholder=\"Contraseña\" formControlName=\"Password\" type=\"password\" required>\r\n                    <mat-hint>{{PasswordErrorMessage}}</mat-hint>\r\n                    <mat-error *ngIf=\"FormRegisterProfesional.controls.Password.hasError('required')\">\r\n                      Contraseña <strong>obligatoria</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <div style=\"margin:0 0 15px 15px;\">\r\n          <button mat-raised-button [disabled]=\"isUsuario ? !FormRegisterUsuario.valid : !FormRegisterProfesional.valid\"\r\n            type=\"submit\" color=\"accent\" (click)=\"isUsuario ? OnSubmit() : OnSubmitProfesional()\">\r\n            <span *ngIf=\"!Loading\">Registrar</span>\r\n            <span *ngIf=\"Loading\" style=\"margin:0 19px;\"><i class=\"fal fa-spinner fa-spin\"></i></span>\r\n          </button>\r\n          <button [routerLink]=\"['/Auth/Login']\" color=\"primary\" mat-button class=\"boton_ingresar\">Ingresar</button>\r\n        </div>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "HzFZ":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "hYhv");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "ynrO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/my-auth.service */ "Sm6f");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);







let LoginComponent = class LoginComponent {
    constructor(MyAuth, fb) {
        this.MyAuth = MyAuth;
        this.fb = fb;
        this.NetworkErrorCount = 0;
        this.hide = true;
        this.Loading = false;
        this.EmailErrorMessage = '';
        this.PasswordErrorMessage = '';
    }
    ngOnInit() {
        // this.MyAuth.Logout();
        this.FormLogin = this.fb.group({
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
        });
        this.FormValueChangesSub = this.FormLogin.valueChanges.subscribe(obs => {
            // console.log(obs)
            this.EmailErrorMessage = '';
            this.PasswordErrorMessage = '';
        });
    }
    ngOnDestroy() {
        console.log('ngOnDestroy called');
        try {
            this.LoginSub.unsubscribe();
            this.FormValueChangesSub.unsubscribe();
        }
        catch (err) {
            // console.log(err)
        }
    }
    OnSubmit() {
        this.Loading = true;
        this.Login();
    }
    LoginWith(prov) {
        let provider;
        if (prov == 'Google') {
            provider = new firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"].GoogleAuthProvider;
        }
        else if (prov == 'Facebook') {
            provider = new firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"].FacebookAuthProvider;
        }
        this.MyAuth.afAuth.signInWithPopup(provider)
            .then(User => {
            // console.log(User)
            this.MyAuth.BasicUserInfo = User.user;
            this.LoginSub = this.MyAuth.afStore.doc('Users/' + User.user.uid).get().subscribe(u => {
                console.log(u.data());
                const data = u.data();
                if (!data.Email) {
                    // this.AdditionalInfoRequired = true;
                    const props = {
                        Id: User.user.uid,
                        DisplayName: User.user.displayName,
                        Email: User.user.email,
                        PhotoURL: User.user.photoURL,
                        PostsCount: 0,
                        FollowersCount: 0,
                        FollowingCount: 0,
                        Provider: User.user.providerId,
                    };
                    this.MyAuth.afAuth.updateProfile({ 'displayName': props.DisplayName, 'photoURL': props.PhotoURL });
                    this.MyAuth.afStore.doc('Users/' + User.user.uid).set(props).then(() => {
                        this.MyAuth.NavTo('/Home');
                        this.Loading = false;
                    })
                        .catch(err => {
                        console.log(err);
                    });
                    this.MyAuth.Notify.openSnackBar('You\'ve logged in successfully, please tell us something more about you!', '');
                }
                else {
                    // this.MyAuth.Notify.openSnackBar("Welcome, " + u.data().DisplayName, "", () => {
                    //   this.MyAuth.NavTo('/Home')
                    // })
                    this.MyAuth.NavTo('/Home');
                }
            });
        })
            .catch(err => {
            console.log(err);
            if (err.code == 'auth/network-request-failed') {
                this.NetworkErrorCount++;
                if (this.NetworkErrorCount <= 3) {
                    console.log('Retrying: ', this.NetworkErrorCount);
                    this.LoginWith(prov);
                }
            }
        });
    }
    Login() {
        const Email = this.FormLogin.value.Email;
        const pwd = this.FormLogin.value.Password;
        this.MyAuth.afAuth.signInWithEmailAndPassword(Email, pwd).then(res => {
            console.log(res);
            if (res.user.uid) {
                // this.MyAuth.Notify.openSnackBar(`Welcome back, ${res.user.displayName}`, '')
                this.Loading = false;
                this.MyAuth.NavTo('Home');
            }
        })
            .catch(err => {
            console.log(err);
            this.Loading = false;
            const errorCode = err.code;
            const errorMessage = err.message;
            switch (errorCode) {
                case 'auth/invalid-email':
                    this.EmailErrorMessage = errorMessage;
                    this.EmailErrorMessage = 'Email invalido, por favor verifique';
                    break;
                case 'auth/user-disabled':
                    this.EmailErrorMessage = errorMessage;
                    this.EmailErrorMessage = 'Usuario deshabilitado';
                    break;
                case 'auth/user-not-found':
                    console.log(errorMessage);
                    this.EmailErrorMessage = errorMessage;
                    this.EmailErrorMessage = 'Usuario no encontrado';
                    break;
                case 'auth/wrong-password':
                    this.PasswordErrorMessage = errorMessage;
                    this.PasswordErrorMessage = 'La contraseña introducida es incorrecta, por favor verifique';
                    break;
                default:
                    this.MyAuth.Notify.openSnackBar('Ocurrio un error, inténtelo de nuevo mas tarde', '');
                    break;
            }
            if (err.code == 'auth/network-request-failed') {
                this.MyAuth.Notify.openSnackBar('Existe un problema con su conexion de red, por favor verifique', '', () => { }, () => { }, 3500);
            }
            else {
                this.MyAuth.Notify.openSnackBar(this.EmailErrorMessage, '');
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__["MyAuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__["MyAuthService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], LoginComponent);



/***/ }),

/***/ "QRk4":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/additional-user-info/additional-user-info.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"UserLoaded; else UserLoading\">\r\n  <div class=\"container-fluid background-gradient\">\r\n    <div class=\"col-12 col-lg-6 offset-lg-3\">\r\n      <mat-card>\r\n        <form [formGroup]=\"AdditionalInfoForm\" (submit)=\"OnSubmit()\">\r\n          <mat-card-header>\r\n            <mat-card-title class=\"title\">Hello {{MyAuth.LoggedUser.DisplayName}}, Welcome to {{MyAuth.AppTitle}}\r\n            </mat-card-title>\r\n            <mat-card-title class=\"second-title\">Tell us something more about you!</mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <div class=\"controls-container\">\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"DisplayName\" placeholder=\"DisplayName\" type=\"text\" required>\r\n                  <mat-error *ngIf=\"AdditionalInfoForm.controls.DisplayName.hasError('required')\">\r\n                    Name is <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"Email\" placeholder=\"Email\" type=\"email\" required>\r\n                  <mat-error *ngIf=\"AdditionalInfoForm.controls.Email.hasError('required')\">\r\n                    Email is <strong>required</strong>\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"AdditionalInfoForm.controls.Email.hasError('email')\">\r\n                    Please enter a valid <strong>email address</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"PhoneNumber\" type=\"number\" placeholder=\"PhoneNumber\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\" style=\"margin: 5px 0;\">\r\n                <mat-radio-group formControlName=\"Gender\" aria-required=\"true\">\r\n                  <mat-radio-button value=\"Male\" name=\"Gender\">Male</mat-radio-button>\r\n                  <mat-radio-button value=\"Female\" name=\"Gender\" style=\"margin-left: 32px;\">Female</mat-radio-button>\r\n                </mat-radio-group>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <input matInput [matDatepicker]=\"dp\" placeholder=\"Fecha Nacimiento\" formControlName=\"DOB\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #dp></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <mat-select formControlName=\"Status\" placeholder=\"Status\">\r\n                    <mat-option value=\"Single\">Single</mat-option>\r\n                    <mat-option value=\"Engaged\">Engaged</mat-option>\r\n                    <mat-option value=\"Married\">Married</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <mat-label>City</mat-label>\r\n                  <mat-select formControlName=\"LivesIn\">\r\n                    <mat-option>-- None --</mat-option>\r\n                    <mat-optgroup *ngFor=\"let State of CitiesAndStates.StatesCities\" [label]=\"State.State\">\r\n                      <mat-option *ngFor=\"let City of State.Cities\" [value]=\"City\">\r\n                        {{City}}\r\n                      </mat-option>\r\n                    </mat-optgroup>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"Interests\" placeholder=\"Interests\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"About\" placeholder=\"About\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <div style=\"margin:0 0 15px 15px;\">\r\n              <button mat-raised-button [disabled]=\"AdditionalInfoForm.pristine || AdditionalInfoForm.invalid\"\r\n                type=\"submit\" color=\"accent\">\r\n                <span *ngIf=\"!Loading\">Complete</span>\r\n                <span *ngIf=\"Loading\" style=\"margin:0 19px;\"><i class=\"fal fa-spinner fa-spin\"></i></span>\r\n              </button>\r\n              <button *ngIf=\"IsPasswordProvider\" (click)=\"Skip()\" mat-button>Skip</button>\r\n            </div>\r\n          </mat-card-actions>\r\n        </form>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n<ng-template #UserLoading>\r\n  <element-my-loader></element-my-loader>\r\n</ng-template>");

/***/ }),

/***/ "akM6":
/*!*****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  .controls-container{\r\n    width: 100%;\r\n  }\r\n  .FullCard{\r\n    border-radius: 14px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n  \r\n  }\r\n  #grid {\r\n    background: linear-gradient(#8b73ff,#8a3788);\r\n    padding: 80px 0;\r\n    /*height: 100vh*/;\r\n    /* height: calc(100% - 64px); */\r\n  }\r\n  .boton_ingresar{\r\n    color: rgb(88, 3, 88);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixvQ0FBb0M7O0VBRXRDO0VBQ0E7SUFDRSw0Q0FBNEM7SUFDNUMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwrQkFBK0I7RUFDakM7RUFFQTtJQUNFLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuY29udHJvbHMtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5GdWxsQ2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgXHJcbiAgfVxyXG4gICNncmlkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjOGI3M2ZmLCM4YTM3ODgpO1xyXG4gICAgcGFkZGluZzogODBweCAwO1xyXG4gICAgLypoZWlnaHQ6IDEwMHZoKi87XHJcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpOyAqL1xyXG4gIH1cclxuXHJcbiAgLmJvdG9uX2luZ3Jlc2Fye1xyXG4gICAgY29sb3I6IHJnYig4OCwgMywgODgpO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "f0Yz":
/*!****************************************************************************************!*\
  !*** ./src/app/components/auth/additional-user-info/additional-user-info.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AdditionalUserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalUserInfoComponent", function() { return AdditionalUserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_additional_user_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./additional-user-info.component.html */ "QRk4");
/* harmony import */ var _additional_user_info_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./additional-user-info.component.css */ "uyJj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/my-auth.service */ "Sm6f");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_Models_c_states_cities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Models/c-states-cities */ "v5XD");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let AdditionalUserInfoComponent = class AdditionalUserInfoComponent {
    constructor(MyAuth, fb) {
        this.MyAuth = MyAuth;
        this.fb = fb;
        this.CitiesAndStates = new src_app_Models_c_states_cities__WEBPACK_IMPORTED_MODULE_6__["cStatesCities"];
        this.Loading = false;
        this.UserLoaded = false;
    }
    ngOnInit() {
        this.MyAuth.afAuth.authState.subscribe(r => {
            this.MyAuth.afStore.doc(`Users/${r.uid}`).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
                .subscribe(res => {
                this.User = res;
                this.AdditionalInfoForm = this.fb.group({
                    Id: this.User.Id,
                    Email: [this.User.Email, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
                    DisplayName: [this.User.DisplayName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                    Gender: ['Male', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                    DOB: new Date(this.User.DOB).valueOf(),
                    PhoneNumber: this.User.PhoneNumber,
                    PhotoURL: this.User.PhotoURL,
                    Status: '',
                    LivesIn: '',
                    Interests: '',
                    About: '',
                });
                if (this.User.Provider === 'Password') {
                    this.AdditionalInfoForm.controls['Email'].disable();
                }
                this.UserLoaded = true;
            });
        });
    }
    OnSubmit() {
        console.log(this.AdditionalInfoForm);
        this.Loading = true;
        this.UpdateUserInfoOnFireStore(this.AdditionalInfoForm.value);
    }
    Skip() {
        this.MyAuth.NavTo('Home');
    }
    UpdateUserInfoOnFireStore(User) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            User.DOB = User.DOB.valueOf();
            if (this.AdditionalInfoForm.controls['Email'].disabled) {
                User.Email = this.User.Email;
            }
            yield this.MyAuth.afAuth.updateProfile({ 'displayName': User.DisplayName, 'photoURL': User.PhotoURL });
            yield this.MyAuth.afStore.doc('Users/' + User.Id).set(User);
            this.MyAuth.NavTo('/Home');
            this.Loading = false;
        });
    }
};
AdditionalUserInfoComponent.ctorParameters = () => [
    { type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
AdditionalUserInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-additional-user-info',
        template: _raw_loader_additional_user_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_additional_user_info_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], AdditionalUserInfoComponent);



/***/ }),

/***/ "hYhv":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container-fluid\" id=\"grid\">\r\n  <div class=\"col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\r\n    <form [formGroup]=\"FormLogin\" (submit)=\"OnSubmit()\">\r\n      <mat-card class=\"FullCard\">\r\n        <mat-card-header>\r\n          <mat-card-title>Ingresar</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <div class=\"controls-container\">\r\n            <mat-form-field class=\"form-field\">\r\n              <input matInput placeholder=\"Correo electronico\" formControlName=\"Email\" type=\"email\" required>\r\n              <!-- <mat-hint>{{EmairrorMessalEge}}</mat-hint> -->\r\n              <mat-error *ngIf=\"FormLogin.controls.Email.hasError('required')\">\r\n                Su correo es <strong>obligatorio</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"form-field\">\r\n              <input matInput placeholder=\"Contraseña\" formControlName=\"Password\" [type]=\"hide ? 'password' : 'text'\"\r\n              required>\r\n              <mat-hint>{{PasswordErrorMessage}}</mat-hint>\r\n              <mat-error *ngIf=\"FormLogin.controls.Password.hasError('required')\">\r\n                Su contraseña es<strong> obligatoria</strong>\r\n              </mat-error>\r\n              <mat-error *ngIf=\"FormLogin.controls.Password.hasError('minlength')\">\r\n                Su contraseña deberia contener <strong>un mínimo de 6</strong> caracteres.\r\n              </mat-error>\r\n              <mat-icon matSuffix mat-icon-button (click)=\"hide = !hide\" style=\"cursor: pointer;\">\r\n                <span *ngIf=\"hide\"><i class=\"fal fa-eye-slash\"></i></span>\r\n                <span *ngIf=\"!hide\"><i class=\"fal fa-eye\"></i></span>\r\n              </mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions class=\"link\">\r\n\r\n          <button mat-raised-button [disabled]=\"FormLogin.pristine || FormLogin.invalid\" type=\"submit\" class=\"btn_ingresar\">\r\n            <span *ngIf=\"!Loading\">Ingresar</span>\r\n            <span *ngIf=\"Loading\" style=\"margin:0 10px;\"><i class=\"fal fa-spinner fa-spin\"></i></span>\r\n          </button>\r\n\r\n           <h6 class=\"link_recuperar\">Olvide mi contraseña <a [routerLink]=\"['/Auth/recuperar']\" >Recuperar</a></h6>\r\n           \r\n           <h6 class=\"link_register\">¿Eres nuevo? <a [routerLink]=\"[ '/Auth/Register']\">hace click</a> y registrate!</h6>\r\n\r\n          <!-- <button mat-raised-button [routerLink]=\"[ '/Register']\" color=\"primary\">Register</button> -->\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "neZz":
/*!**************************************************************************!*\
  !*** ./src/app/Modules/FeatureRoutings/authentication-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/auth/register/register.component */ "+jqZ");
/* harmony import */ var src_app_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/auth/login/login.component */ "HzFZ");
/* harmony import */ var src_app_components_auth_additional_user_info_additional_user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/auth/additional-user-info/additional-user-info.component */ "f0Yz");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/guards/auth.guard */ "UTcu");
/* harmony import */ var src_app_components_auth_recuperar_recuperar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/auth/recuperar/recuperar */ "vbY1");
/* harmony import */ var src_app_components_auth_verificar_verificar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/auth/verificar/verificar.component */ "9ryv");









const routes = [
    {
        path: 'Register',
        component: src_app_components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
    },
    {
        path: 'Login',
        component: src_app_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    },
    {
        path: 'Verificar',
        component: src_app_components_auth_verificar_verificar_component__WEBPACK_IMPORTED_MODULE_8__["VerificarComponent"]
    },
    {
        path: 'AdditionInfo',
        component: src_app_components_auth_additional_user_info_additional_user_info_component__WEBPACK_IMPORTED_MODULE_5__["AdditionalUserInfoComponent"],
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: '', redirectTo: 'Login' },
    { path: 'recuperar', component: src_app_components_auth_recuperar_recuperar__WEBPACK_IMPORTED_MODULE_7__["RecuperarComponent"] }
];
let AuthenticationRoutingModule = class AuthenticationRoutingModule {
};
AuthenticationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
    })
], AuthenticationRoutingModule);



/***/ }),

/***/ "uyJj":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/auth/additional-user-info/additional-user-info.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field, .mat-radio-group {\r\n    width:100%;\r\n}\r\n\r\n.second-title {\r\n    font-size: 12px;\r\n    color: #ff4081;\r\n}\r\n\r\n.title {\r\n    color:#3f51b5;\r\n}\r\n\r\n.background-gradient {\r\n    background: linear-gradient(to right, rgb(40, 60, 134), rgb(69, 162, 71));\r\n    padding: 64px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGl0aW9uYWwtdXNlci1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5RUFBeUU7SUFDekUsZUFBZTtBQUNuQiIsImZpbGUiOiJhZGRpdGlvbmFsLXVzZXItaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkLCAubWF0LXJhZGlvLWdyb3VwIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5zZWNvbmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNmZjQwODE7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjojM2Y1MWI1O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1ncmFkaWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYig0MCwgNjAsIDEzNCksIHJnYig2OSwgMTYyLCA3MSkpO1xyXG4gICAgcGFkZGluZzogNjRweCAwO1xyXG59Il19 */");

/***/ }),

/***/ "ynrO":
/*!***********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".controls-container{\r\n  width: 100%;\r\n}\r\n.Olvido {\r\n  text-decoration: none;\r\n  color:white;\r\n}\r\n.controls-container * {\r\n  width: 100%;\r\n}\r\n.FullCard{\r\n  border-radius: 14px;\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n\r\n}\r\n#grid {\r\n  background: linear-gradient(#8b73ff,#8a3788);\r\n  padding: 80px 0;\r\n  height: 100vh;\r\n  /* height: calc(100% - 64px); */\r\n}\r\nbody { padding: 2em; }\r\n/* Shared */\r\n.loginBtn {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  /* width: 13em;  - apply for fixed size */\r\n  margin: 0.2em;\r\n  margin: 3px 0px !important;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  /* font-size: 16px; */\r\n  color: rgb(253, 253, 253);\r\n}\r\n.loginBtn:before {\r\n  content: \"\";\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n.loginBtn:focus {\r\n  outline: none;\r\n}\r\n.loginBtn:active {\r\n  box-shadow: inset 0 0 0 32px rgba(112, 13, 96, 0.842);\r\n}\r\n/* Facebook */\r\n.loginBtn--facebook {\r\n  background-color: #4C69BA;\r\n  background-image: linear-gradient(#4C69BA, #3B55A0);\r\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\r\n  text-shadow: 0 -1px 0 #354C8C;\r\n}\r\n.loginBtn--facebook:before {\r\n  border-right: #364e92 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n}\r\n.loginBtn--facebook:hover,\r\n.loginBtn--facebook:focus {\r\n  background-color: #5B7BD5;\r\n  background-image: linear-gradient(#5B7BD5, #4864B1);\r\n}\r\n/* Google */\r\n.loginBtn--google {\r\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n  background: #DD4B39;\r\n}\r\n.loginBtn--google:before {\r\n  border-right: #BB3F30 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n}\r\n.loginBtn--google:hover,\r\n.loginBtn--google:focus {\r\n  background: #E74B37;\r\n}\r\n.link{\r\n  font-size: 120%;\r\n  padding-left: 3%;\r\n}\r\n.btn_ingresar{\r\n  width: 30%;\r\n  padding: 0.5%;\r\n  left: 35%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG9DQUFvQzs7QUFFdEM7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsYUFBYTtFQUNiLCtCQUErQjtBQUNqQztBQUVBLE9BQU8sWUFBWSxFQUFFO0FBRXJCLFdBQVc7QUFDWDtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFEQUFxRDtBQUN2RDtBQUdBLGFBQWE7QUFDYjtFQUNFLHlCQUF5QjtFQUN6QixtREFBbUQ7RUFDbkQsK0VBQStFO0VBQy9FLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLHlHQUF5RztBQUMzRztBQUNBOztFQUVFLHlCQUF5QjtFQUN6QixtREFBbUQ7QUFDckQ7QUFHQSxXQUFXO0FBQ1g7RUFDRSxvREFBb0Q7RUFDcEQsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsdUdBQXVHO0FBQ3pHO0FBQ0E7O0VBRUUsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFNBQVM7QUFDWCIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2xzLWNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uT2x2aWRvIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5jb250cm9scy1jb250YWluZXIgKiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLkZ1bGxDYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxufVxyXG5cclxuI2dyaWQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjOGI3M2ZmLCM4YTM3ODgpO1xyXG4gIHBhZGRpbmc6IDgwcHggMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC8qIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7ICovXHJcbn1cclxuXHJcbmJvZHkgeyBwYWRkaW5nOiAyZW07IH1cclxuXHJcbi8qIFNoYXJlZCAqL1xyXG4ubG9naW5CdG4ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIHdpZHRoOiAxM2VtOyAgLSBhcHBseSBmb3IgZml4ZWQgc2l6ZSAqL1xyXG4gIG1hcmdpbjogMC4yZW07XHJcbiAgbWFyZ2luOiAzcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxNXB4IDAgNDZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBsaW5lLWhlaWdodDogMzRweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gIC8qIGZvbnQtc2l6ZTogMTZweDsgKi9cclxuICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG59XHJcbi5sb2dpbkJ0bjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDM0cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5sb2dpbkJ0bjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubG9naW5CdG46YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzMnB4IHJnYmEoMTEyLCAxMywgOTYsIDAuODQyKTtcclxufVxyXG5cclxuXHJcbi8qIEZhY2Vib29rICovXHJcbi5sb2dpbkJ0bi0tZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0QzY5QkE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM0QzY5QkEsICMzQjU1QTApO1xyXG4gIC8qZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIG5ldWVcIiwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7Ki9cclxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgIzM1NEM4QztcclxufVxyXG4ubG9naW5CdG4tLWZhY2Vib29rOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAjMzY0ZTkyIDFweCBzb2xpZDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZmFjZWJvb2sucG5nJykgNnB4IDZweCBuby1yZXBlYXQ7XHJcbn1cclxuLmxvZ2luQnRuLS1mYWNlYm9vazpob3ZlcixcclxuLmxvZ2luQnRuLS1mYWNlYm9vazpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCN0JENTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzVCN0JENSwgIzQ4NjRCMSk7XHJcbn1cclxuXHJcblxyXG4vKiBHb29nbGUgKi9cclxuLmxvZ2luQnRuLS1nb29nbGUge1xyXG4gIC8qZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFJvYm90bywgYXJpYWwsIHNhbnMtc2VyaWY7Ki9cclxuICBiYWNrZ3JvdW5kOiAjREQ0QjM5O1xyXG59XHJcbi5sb2dpbkJ0bi0tZ29vZ2xlOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAjQkIzRjMwIDFweCBzb2xpZDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZ29vZ2xlLnBuZycpIDZweCA2cHggbm8tcmVwZWF0O1xyXG59XHJcbi5sb2dpbkJ0bi0tZ29vZ2xlOmhvdmVyLFxyXG4ubG9naW5CdG4tLWdvb2dsZTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogI0U3NEIzNztcclxufVxyXG5cclxuLmxpbmt7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG4gIHBhZGRpbmctbGVmdDogMyU7XHJcbn1cclxuXHJcbi5idG5faW5ncmVzYXJ7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBwYWRkaW5nOiAwLjUlO1xyXG4gIGxlZnQ6IDM1JTtcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=Modules-FeatureModules-Authentication-module-es2015.js.map