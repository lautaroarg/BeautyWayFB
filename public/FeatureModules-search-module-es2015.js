(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["FeatureModules-search-module"],{

/***/ "0n9e":
/*!*********************************************************!*\
  !*** ./src/app/Modules/FeatureModules/search.module.ts ***!
  \*********************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/search/search.component */ "RZmA");
/* harmony import */ var src_app_components_customElements_mini_user_card_mini_user_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/customElements/mini-user-card/mini-user-card.component */ "n9lq");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "jNvo");
/* harmony import */ var _app_dialogs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-dialogs.module */ "nmhw");
/* harmony import */ var _Material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Material.module */ "NrK8");
/* harmony import */ var _FeatureRoutings_search_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FeatureRoutings/search-routing.module */ "hiPC");









let SearchModule = class SearchModule {
};
SearchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            src_app_components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
            src_app_components_customElements_mini_user_card_mini_user_card_component__WEBPACK_IMPORTED_MODULE_4__["MiniUserCardComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _app_dialogs_module__WEBPACK_IMPORTED_MODULE_6__["AppDialogsModule"],
            _FeatureRoutings_search_routing_module__WEBPACK_IMPORTED_MODULE_8__["SearchRoutingModule"],
            // Material Modules
            _Material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule2"]
        ]
    })
], SearchModule);



/***/ }),

/***/ "45VO":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".users-container {\r\n    margin: 8px 0;\r\n}\r\n\r\n#people-card {\r\n    margin-top: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcnMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbiNwZW9wbGUtY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "FTN5":
/*!***************************************************************************************!*\
  !*** ./src/app/components/customElements/mini-user-card/mini-user-card.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-name-box {\r\n    margin: 3px 0;\r\n}\r\n\r\n.user-name {}\r\n\r\n.user-box {\r\n    border: 1px transparent;\r\n    border-radius: 5px;\r\n    padding: 3px 0;\r\n    color: #5c4ca2;\r\n}\r\n\r\n.user-pic {\r\n    height: 48px;\r\n    width: 48px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-radius: 10px;\r\n}\r\n\r\n.btn-action-mobile {\r\n    line-height: 1.2;\r\n    margin-top: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmktdXNlci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLFlBQVk7O0FBRVo7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6Im1pbmktdXNlci1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1uYW1lLWJveCB7XHJcbiAgICBtYXJnaW46IDNweCAwO1xyXG59XHJcblxyXG4udXNlci1uYW1lIHt9XHJcblxyXG4udXNlci1ib3gge1xyXG4gICAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMDtcclxuICAgIGNvbG9yOiAjNWM0Y2EyO1xyXG59XHJcblxyXG4udXNlci1waWMge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLW1vYmlsZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59Il19 */");

/***/ }),

/***/ "RZmA":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search.component.html */ "qDKi");
/* harmony import */ var _search_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component.css */ "45VO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/my-auth.service */ "Sm6f");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







let SearchComponent = class SearchComponent {
    constructor(MyAuth, fb) {
        this.MyAuth = MyAuth;
        this.fb = fb;
    }
    ngOnInit() {
        this.QueryForm = this.fb.group({
            Query: ''
            //  ['', [Validators.minLength(3), Validators.required]]
        });
        this.PeopleResults$ = this.MyAuth.GetAllProfesionalsFromStore()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(r => {
            return r.filter(user => {
                // return user.Id != this.MyAuth.LoggedUser.Id;
                return user.Id != this.MyAuth.LoggedUser.Id;
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(r => {
            this.PeopleResults = r;
            this.FilteredResults = r;
        }));
        this.QueryForm.controls.Query.valueChanges.subscribe((q) => {
            if (q == '') {
                this.FilteredResults = this.PeopleResults;
            }
            else {
                this.FilteredResults = this.PeopleResults.filter(users => {
                    const DisplayName = users.DisplayName.toLowerCase();
                    return DisplayName.includes(q.toLowerCase());
                });
            }
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search',
        template: _raw_loader_search_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], SearchComponent);



/***/ }),

/***/ "hiPC":
/*!******************************************************************!*\
  !*** ./src/app/Modules/FeatureRoutings/search-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/search/search.component */ "RZmA");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guards/auth.guard */ "UTcu");





const routes = [{
        path: '',
        component: src_app_components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }];
let SearchRoutingModule = class SearchRoutingModule {
};
SearchRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]
    })
], SearchRoutingModule);



/***/ }),

/***/ "n9lq":
/*!**************************************************************************************!*\
  !*** ./src/app/components/customElements/mini-user-card/mini-user-card.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MiniUserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniUserCardComponent", function() { return MiniUserCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mini_user_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mini-user-card.component.html */ "zZr0");
/* harmony import */ var _mini_user_card_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mini-user-card.component.css */ "FTN5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/my-auth.service */ "Sm6f");
/* harmony import */ var src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/follow.service */ "dhyO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Dialogs_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Dialogs/confirmation-dialog/confirmation-dialog.component */ "r/ck");
/* harmony import */ var _Dialogs_profile_pic_update_dialog_profile_pic_update_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Dialogs/profile-pic-update-dialog/profile-pic-update-dialog.component */ "naqG");









let MiniUserCardComponent = class MiniUserCardComponent {
    constructor(MyAuth, followSrv, dialog) {
        this.MyAuth = MyAuth;
        this.followSrv = followSrv;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.Following$ = this.followSrv.GetFollowStatus(this.User.Id);
    }
    FollowThisUser() {
        this.followSrv.FollowAUser(this.User.Id, this.User.DisplayName, this.User.PhotoURL).then(r => {
            console.log(r);
        });
    }
    UnfollowThisUser() {
        const confirmationDialogRef = this.MyAuth.Dialogs.open(_Dialogs_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            data: {
                Title: 'Dejar de seguir',
                Message: `¿Dejar de seguir? ${this.User.DisplayName}?`
            }
        });
        confirmationDialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.followSrv.UnfollowAUser(this.User.Id).then(r => {
                });
            }
        });
    }
    openProfilePicUpdateDialog() {
        const dialogRef = this.dialog.open(_Dialogs_profile_pic_update_dialog_profile_pic_update_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ProfilePicUpdateDialogComponent"], {
            //width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(() => {
            console.log('The dialog was closed');
        });
    }
};
MiniUserCardComponent.ctorParameters = () => [
    { type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"] },
    { type: src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
MiniUserCardComponent.propDecorators = {
    User: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MiniUserCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'element-mini-user-card',
        template: _raw_loader_mini_user_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mini_user_card_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"],
        src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
], MiniUserCardComponent);



/***/ }),

/***/ "qDKi":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin: 0 15px;\">\r\n  <mat-card style=\"background: #8b73ff; \">\r\n    <form [formGroup]=\"QueryForm\">\r\n      <mat-form-field class=\"w-100\">\r\n        <input matInput formControlName=\"Query\" placeholder=\"A quien estas buscando?\">\r\n        <button mat-icon-button matSuffix type=\"submit\">\r\n          <i class=\"fal fa-search\"></i>\r\n        </button>\r\n      </mat-form-field>\r\n    </form>\r\n  </mat-card>\r\n\r\n  <mat-card id=\"people-card\" style=\"background: #efe7ff; color: #5c4ca2\">\r\n    <ng-container *ngIf=\"PeopleResults$ | async; else PeopleLoading\">\r\n      <mat-card-header>\r\n        <mat-card-title>Profesionales:</mat-card-title>\r\n        <mat-card-subtitle style=\"color: #5c4ca2\">Encontrados: {{FilteredResults?.length || PeopleResults?.length}} items</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"container-fluidr\">\r\n          <div class=\"row\">\r\n            <ng-container *ngFor=\"let User of FilteredResults; trackBy:User?.Id\">\r\n              <div class=\"col-6 users-container\">\r\n                <element-mini-user-card [User]=\"User\"></element-mini-user-card>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </ng-container>\r\n    <ng-template #PeopleLoading>\r\n      PeopleLoading...\r\n    </ng-template>\r\n  </mat-card>\r\n</div>");

/***/ }),

/***/ "zZr0":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customElements/mini-user-card/mini-user-card.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"row user-box\">\r\n    <div class=\"col-3 user-pic-box MousePointer\" (click)=\"MyAuth.NavTo('User/'+User.Id)\">\r\n      <img class=\"user-pic\" src=\"{{User.PhotoURL}}\">\r\n    </div>\r\n    <div class=\"col user-name-box\">\r\n      <span class=\"user-name MousePointer\" (click)=\"MyAuth.NavTo('User/'+User.Id)\">{{User.DisplayName}}</span>\r\n      <br>\r\n      <ng-container *ngIf=\"Following$ | async as Following; else FollowLoading\">\r\n        <ng-container *ngIf=\"Following.DocId; else NotFollowing\">\r\n          <button mat-stroked-button class=\"btn-action-mobile\" color=\"primary\" (click)=\"UnfollowThisUser()\">\r\n            <span><i class=\"fal fa-user-check\"></i> Dejar de seguir</span>\r\n          </button>\r\n        </ng-container>\r\n        <ng-template #NotFollowing>\r\n          <button mat-stroked-button class=\"btn-action-mobile\" (click)=\"FollowThisUser()\" style=\"padding: 0 26px; background: #c3ff73\">\r\n            <span><i class=\"fal far fa-user-plus\" ></i> Seguir</span>\r\n          </button>\r\n        </ng-template>\r\n      </ng-container>\r\n      <ng-template #FollowLoading>\r\n        <button mat-stroked-button class=\"btn-action-mobile\" disableRipple style=\"padding: 0 50px;\">\r\n          <i class=\"fal fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </ng-template>\r\n    </div>\r\n  </div>");

/***/ })

}]);
//# sourceMappingURL=FeatureModules-search-module-es2015.js.map