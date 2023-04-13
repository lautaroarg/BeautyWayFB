(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-FeatureModules-home-module"], {
    /***/
    "5hgM":
    /*!********************************************************!*\
      !*** ./src/app/components/home/home/home.component.ts ***!
      \********************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function hgM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "MEhP");
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.css */
      "6uBT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Services/my-auth.service */
      "Sm6f");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(MyAuth) {
          _classCallCheck(this, HomeComponent);

          this.MyAuth = MyAuth;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.MyAuth.Logout();
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [{
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"]
        }];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"]])], HomeComponent);
      /***/
    },

    /***/
    "6uBT":
    /*!*********************************************************!*\
      !*** ./src/app/components/home/home/home.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function uBT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".home-root-div {\r\n  /*margin-top: 5px;*/\r\n  background: linear-gradient(#8b73ff, white);\r\n}\r\n\r\nimg.user-profile-picture {\r\n  border-radius: 50%;\r\n  height: 140px;\r\n  width: 140px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\nimg.user-profile-picture.active {\r\n  border-radius: 0px;\r\n  height: 0px;\r\n  width: 0px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\na.collection-item {\r\n  display: flex;\r\n}\r\n\r\nspan.secondary-content{\r\n  margin-left:10px;\r\n}\r\n\r\n.middle-content {\r\n  height: calc(100vh - 62px);\r\n  overflow: visible auto;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtcm9vdC1kaXYge1xyXG4gIC8qbWFyZ2luLXRvcDogNXB4OyovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4YjczZmYsIHdoaXRlKTtcclxufVxyXG5cclxuaW1nLnVzZXItcHJvZmlsZS1waWN0dXJlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbmltZy51c2VyLXByb2ZpbGUtcGljdHVyZS5hY3RpdmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBoZWlnaHQ6IDBweDtcclxuICB3aWR0aDogMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5hLmNvbGxlY3Rpb24taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5zcGFuLnNlY29uZGFyeS1jb250ZW50e1xyXG4gIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbn1cclxuXHJcbi5taWRkbGUtY29udGVudCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjJweCk7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgYXV0bztcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "MEhP":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home/home.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MEhP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container-fluid home-root-div\">\r\n  <div class=\"d-block d-md-none\">\r\n    <element-mini-navbar></element-mini-navbar>\r\n  </div>i\r\n  <div class=\"row\" *ngIf=\"!MyAuth.LoggedUserLoading\">\r\n    <div class=\"col\" *ngIf=\"!MyAuth.LoggedUser\">\r\n      <element-my-loader></element-my-loader>\r\n    </div>\r\n    <ng-container *ngIf=\"MyAuth.LoggedUser\">\r\n      <div class=\"col-sm-1 col-lg-3 col-xl-2 offset-xl-1 d-none d-md-block start-content\">\r\n        <app-left-column></app-left-column>\r\n      </div>\r\n      <div class=\"col col-xl-5 middle-content\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n      <div class=\"col-md-4 col-lg-3 d-none d-md-block end-content\">\r\n        <app-right-column></app-right-column>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "d4Jw":
    /*!*******************************************************!*\
      !*** ./src/app/Modules/FeatureModules/home.module.ts ***!
      \*******************************************************/

    /*! exports provided: HomeModule */

    /***/
    function d4Jw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_components_home_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/home/home/home.component */
      "5hgM");
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared.module */
      "jNvo");
      /* harmony import */


      var _app_dialogs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app-dialogs.module */
      "nmhw");
      /* harmony import */


      var _FeatureRoutings_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../FeatureRoutings/home-routing.module */
      "pq3b");
      /* harmony import */


      var _Material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Material.module */
      "NrK8");

      var HomeModule = /*#__PURE__*/_createClass(function HomeModule() {
        _classCallCheck(this, HomeModule);
      });

      HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_components_home_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _app_dialogs_module__WEBPACK_IMPORTED_MODULE_4__["AppDialogsModule"], _FeatureRoutings_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"], // Material Modules
        _Material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule2"]]
      })], HomeModule);
      /***/
    },

    /***/
    "pq3b":
    /*!****************************************************************!*\
      !*** ./src/app/Modules/FeatureRoutings/home-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: HomeRoutingModule */

    /***/
    function pq3b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
        return HomeRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_components_home_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/components/home/home/home.component */
      "5hgM");
      /* harmony import */


      var src_app_components_home_middle_column_middle_column_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/components/home/middle-column/middle-column.component */
      "DhUw");
      /* harmony import */


      var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/guards/auth.guard */
      "UTcu"); // import { AuthGuard } from 'src/app/guards/auth.guard';


      var routes = [{
        path: '',
        component: src_app_components_home_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [{
          path: 'Home',
          component: src_app_components_home_middle_column_middle_column_component__WEBPACK_IMPORTED_MODULE_4__["MiddleColumnComponent"]
        }, {
          path: 'Search',
          // component: SearchComponent
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | FeatureModules-search-module */
            "FeatureModules-search-module").then(__webpack_require__.bind(null,
            /*! ../FeatureModules/search.module */
            "0n9e")).then(function (m) {
              return m.SearchModule;
            });
          }
        }, {
          path: '',
          redirectTo: 'Home'
        }] // resolve: { LoggedUserData: UserResolverService },

      }];

      var HomeRoutingModule = /*#__PURE__*/_createClass(function HomeRoutingModule() {
        _classCallCheck(this, HomeRoutingModule);
      });

      HomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
      })], HomeRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=Modules-FeatureModules-home-module-es5.js.map