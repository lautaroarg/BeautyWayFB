(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-FeatureModules-Authentication-module"], {
    /***/
    "+13j":
    /*!*****************************************************************!*\
      !*** ./src/app/Modules/FeatureModules/Authentication.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AuthenticationModule */

    /***/
    function j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
        return AuthenticationModule;
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


      var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared.module */
      "jNvo");
      /* harmony import */


      var src_app_components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/components/auth/register/register.component */
      "+jqZ");
      /* harmony import */


      var src_app_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/components/auth/login/login.component */
      "HzFZ");
      /* harmony import */


      var src_app_components_auth_additional_user_info_additional_user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/components/auth/additional-user-info/additional-user-info.component */
      "f0Yz");
      /* harmony import */


      var _FeatureRoutings_authentication_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../FeatureRoutings/authentication-routing.module */
      "neZz");
      /* harmony import */


      var _Material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Material.module */
      "NrK8"); // import { MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule, MatRadioModule, MatDatepickerModule, MatIconModule, MatSelectModule } from '@angular/material';
      // import { MatMomentDateModule } from '@angular/material-moment-adapter';


      var AuthenticationModule = /*#__PURE__*/_createClass(function AuthenticationModule() {
        _classCallCheck(this, AuthenticationModule);
      });

      AuthenticationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], src_app_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], src_app_components_auth_additional_user_info_additional_user_info_component__WEBPACK_IMPORTED_MODULE_5__["AdditionalUserInfoComponent"]],
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _FeatureRoutings_authentication_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticationRoutingModule"], // Material Modules
        _Material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule2"]]
      })], AuthenticationModule);
      /***/
    },

    /***/
    "+jqZ":
    /*!****************************************************************!*\
      !*** ./src/app/components/auth/register/register.component.ts ***!
      \****************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function jqZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "FTa3");
      /* harmony import */


      var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.component.css */
      "akM6");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _Services_image_optimization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../Services/image-optimization.service */
      "DpT1");
      /* harmony import */


      var ng2_image_compress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-image-compress */
      "PT9p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/Services/my-auth.service */
      "Sm6f");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(MyAuth, storage, fbUsuario, fb, imageOptSrvc, fbProfesional) {
          _classCallCheck(this, RegisterComponent);

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

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.UpdatePPForm = this.fb.group({
              InputImage: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              ProfileCaption: ""
            });
            this.UpdateProProPicForm = this.fb.group({
              InputImage: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              ProfileCaption: ""
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
              Activo: true
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
              TipoModalidadTrabajoProfesionalSeleccionado: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
              Neighborhood: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
              City: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
              Proname: ["", new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]()],
              DOB: "",
              NombreComercial: "",
              PhoneNumber: [""],
              Activo: true
            });
            this.FormValueChangesSub = this.FormRegisterUsuario.valueChanges.subscribe(function (obs) {
              _this.EmailErrorMessage = "";
              _this.PasswordErrorMessage = "";
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            try {
              this.FormValueChangesSub.unsubscribe();
            } catch (error) {}
          } // ESTE METODO PERMITE SELECCIONAR LA IMAGEN Y CARGARLA EN MEMORIA Y GUARDARLA EN LA VARIABLE FILE

        }, {
          key: "onChange",
          value: function onChange(fileInput) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var observableImages, image, blob, _observableImages, _image, _blob;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this.isUsuario) {
                        _context.next = 18;
                        break;
                      }

                      this.processingImage = true;
                      _context.next = 4;
                      return ng2_image_compress__WEBPACK_IMPORTED_MODULE_5__["ImageCompressService"].filesToCompressedImageSourceEx(fileInput.target.files, null);

                    case 4:
                      observableImages = _context.sent;
                      _context.next = 7;
                      return observableImages.toPromise();

                    case 7:
                      image = _context.sent;
                      this.UpdateProProPicForm.value.InputImage = image;
                      this.OutputImage = image;
                      _context.next = 12;
                      return this.imageOptSrvc.dataURItoBlob(this.OutputImage.compressedImage.imageDataUrl);

                    case 12:
                      blob = _context.sent;
                      this.file = blob;
                      this.showImage = true;
                      this.processingImageComplete = true;
                      _context.next = 33;
                      break;

                    case 18:
                      this.processingImageProgfesional = true;
                      _context.next = 21;
                      return ng2_image_compress__WEBPACK_IMPORTED_MODULE_5__["ImageCompressService"].filesToCompressedImageSourceEx(fileInput.target.files, null);

                    case 21:
                      _observableImages = _context.sent;
                      _context.next = 24;
                      return _observableImages.toPromise();

                    case 24:
                      _image = _context.sent;
                      this.UpdateProProPicForm.value.InputImage = _image;
                      this.OutputImageProfesional = _image;
                      _context.next = 29;
                      return this.imageOptSrvc.dataURItoBlob(this.OutputImageProfesional.compressedImage.imageDataUrl);

                    case 29:
                      _blob = _context.sent;
                      this.fileProfesional = _blob;
                      this.showImageProfesional = true;
                      this.processingImageCompleteProfesional = true;

                    case 33:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "OnSubmit",
          value: function OnSubmit() {
            var _this2 = this;

            this.Loading = true;
            this.MyAuth.Register(this.FormRegisterUsuario.value.Email, this.FormRegisterUsuario.value.Password).then(function (user) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                var _this3 = this;

                var FormValues, UserInfo, filePath, fileRef, task;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log(user);
                        FormValues = this.FormRegisterUsuario.value;
                        UserInfo = {
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
                          Activo: true
                        };
                        debugger;

                        if (!(this.calcularEdad(UserInfo.DOB) == true)) {
                          _context2.next = 16;
                          break;
                        }

                        console.log(UserInfo);
                        _context2.next = 8;
                        return this.MyAuth.afAuth.updateProfile({
                          displayName: UserInfo.DisplayName,
                          photoURL: UserInfo.PhotoURL
                        });

                      case 8:
                        _context2.next = 10;
                        return this.MyAuth.afStore.collection("Users").doc(user.user.uid).set(UserInfo);

                      case 10:
                        // aca mando la imagen a firebase storage
                        filePath = "Usuarios" + user.user.uid + "/ProfilePictures/" + moment__WEBPACK_IMPORTED_MODULE_9__().format("D-M-YYYY");
                        fileRef = this.storage.ref(filePath);
                        task = this.storage.upload(filePath, this.file, {
                          customMetadata: {
                            caption: this.UpdatePPForm.value.ProfileCaption
                          }
                        });
                        this.Uploading = true; // observe percentage changes

                        this.uploadPercent$ = task.percentageChanges(); // get notified when the download URL is available

                        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                          _this3.downloadURL$ = fileRef.getDownloadURL();

                          _this3.downloadURL$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(function (URL) {
                            _this3.MyAuth.UpdateProfilePic(URL).subscribe(function () {
                              _this3.Loading = false;

                              _this3.MyAuth.NavTo("Home");
                            });
                          });
                        })).subscribe(); //  aca mismo agregar la funcion de this.MyAuth para enviar email de verificacion

                      case 16:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            })["catch"](function (error) {
              // Handle Errors here.
              _this2.Loading = false;
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(error);

              switch (errorCode) {
                case "auth/email-already-in-use":
                  _this2.EmailErrorMessage = errorMessage;
                  break;

                case "auth/invalid-email":
                  _this2.EmailErrorMessage = errorMessage;
                  break;

                case "auth/operation-not-allowed":
                  console.log(errorMessage);
                  _this2.EmailErrorMessage = errorMessage;
                  break;

                case "auth/weak-password":
                  _this2.PasswordErrorMessage = errorMessage;
                  break;

                default:
                  _this2.MyAuth.Notify.openSnackBar("A ocurrido un error, porfavor intente mas tarde", "");

                  break;
              }
            });
          }
        }, {
          key: "cambiarEstado",
          value: function cambiarEstado(event) {
            if (event.tab.textLabel == "Soy usuario") {
              this.isUsuario = true;
            } else {
              this.isUsuario = false;
            }
          }
        }, {
          key: "calcularEdad",
          value: function calcularEdad(dob) {
            var hoy = Date.now();
            var fechaNacimiento = dob;
            var edadMilisegundos = hoy - dob; //anio resperensa a 1 año en milisegundos.

            var anio = 31536000000;
            var edad = Math.round(edadMilisegundos / anio);

            if (edad >= 18) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "OnSubmitProfesional",
          value: function OnSubmitProfesional() {
            var _this4 = this;

            this.Loading = true;
            this.MyAuth.Register(this.FormRegisterProfesional.value.Email, this.FormRegisterProfesional.value.Password).then(function (user) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                var _this5 = this;

                var FormValues, UserInfo, filePath, fileRef, task;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        console.log(user);
                        FormValues = this.FormRegisterProfesional.value;
                        UserInfo = {
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
                          Activo: true
                        };
                        console.log(UserInfo);
                        _context3.next = 6;
                        return this.MyAuth.afAuth.updateProfile({
                          displayName: UserInfo.DisplayName,
                          photoURL: UserInfo.PhotoURL
                        });

                      case 6:
                        _context3.next = 8;
                        return this.MyAuth.afStore.collection("Users").doc(user.user.uid).set(UserInfo);

                      case 8:
                        filePath = "Profesional" + user.user.uid + "/ProfilePictures/" + moment__WEBPACK_IMPORTED_MODULE_9__().format("D-M-YYYY");
                        fileRef = this.storage.ref(filePath);
                        task = this.storage.upload(filePath, this.file, {
                          customMetadata: {
                            caption: this.UpdatePPForm.value.ProfileCaption
                          }
                        });
                        this.Uploading = true;
                        this.uploadPercent$ = task.percentageChanges(); // get notified when the download URL is available

                        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                          _this5.downloadURL$ = fileRef.getDownloadURL();

                          _this5.downloadURL$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(function (URL) {
                            _this5.MyAuth.UpdateProfilePic(URL).subscribe(function () {
                              _this5.Loading = false;

                              _this5.MyAuth.NavTo("Home");
                            });
                          });
                        })).subscribe(); //  aca mismo agregar la funcion de this.MyAuth para enviar email de verificacion

                        this.Loading = false;
                        this.MyAuth.NavTo("Home");

                      case 16:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            })["catch"](function (error) {
              // Handle Errors here.
              _this4.Loading = false;
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(error);

              switch (errorCode) {
                case "auth/email-already-in-use":
                  _this4.EmailErrorMessage = errorMessage;
                  break;

                case "auth/invalid-email":
                  _this4.EmailErrorMessage = errorMessage;
                  break;

                case "auth/operation-not-allowed":
                  console.log(errorMessage);
                  _this4.EmailErrorMessage = errorMessage;
                  break;

                case "auth/weak-password":
                  _this4.PasswordErrorMessage = errorMessage;
                  break;

                default:
                  _this4.MyAuth.Notify.openSnackBar("A ocurrido un error, porfavor intente mas tarde", "");

                  break;
              }
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_8__["MyAuthService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _Services_image_optimization_service__WEBPACK_IMPORTED_MODULE_4__["ImageOptimizationService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: "app-register",
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_8__["MyAuthService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _Services_image_optimization_service__WEBPACK_IMPORTED_MODULE_4__["ImageOptimizationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])], RegisterComponent);
      /***/
    },

    /***/
    "FTa3":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/register/register.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FTa3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container-fluid\" id=\"grid\">\r\n  <div class=\"col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\r\n    <mat-card class=\"FullCard\">\r\n      <mat-card-header>\r\n        <mat-card-title>Registrarse</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <mat-tab-group (selectedTabChange)=\"cambiarEstado($event)\">\r\n          <mat-tab label=\"Soy usuario\" (model)=\"isUsuario\">\r\n            <form class=\"example-form\" [formGroup]=\"FormRegisterUsuario\">\r\n              <div class=\"controls-container\">\r\n                <form [formGroup]=\"UpdatePPForm\" (submit)=\"OnSubmit()\">\r\n                  <div mat-dialog-content>\r\n                    <input type=\"file\" style=\"display:none;\" formControlName=\"InputImage\" accept=\"image/*\" #InputFile\r\n                      (change)=\"onChange($event)\" required>\r\n                    <button mat-icon-button type=\"button\" (click)=\"InputFile.click()\" *ngIf=\"OutputImage == undefined\">\r\n                      <i class=\"fal fa-paperclip fa-lg\"></i>\r\n                    </button>\r\n                    <div>\r\n                      <img src=\"{{OutputImage.compressedImage.imageDataUrl}}\" width=\"150\" height=\"150\" *ngIf=\"showImage\"\r\n                        class=\"responsive-img\" />\r\n                    </div>\r\n                  </div>\r\n                  <div mat-dialog-actions>\r\n                    <mat-progress-bar *ngIf=\"Uploading\" mode=\"determinate\" [value]=\"(uploadPercent$ | async)\">\r\n                    </mat-progress-bar>\r\n                    <button mat-raised-button type=\"reset\" (click)=\"onNoClick()\">Cancelar</button>\r\n                    <button mat-raised-button color=\"primary\" (click)=\"InputFile.click()\"\r\n                      [disabled]=\"!UpdatePPForm.valid || !processingImageComplete\"\r\n                      [attr.cdkFocusInitial]=\"processingImageComplete ? '' : null\">Actualizar</button>\r\n                  </div>\r\n                </form>\r\n                <div class=\"row\" style=\"margin:0%;\">\r\n                  <div class=\"col-6\" align=right style=\"margin-top: 1%;\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                      <mat-label>Tipo de documento</mat-label>\r\n                      <mat-select [(value)]=\"TipoDocumentoSeleccionado\" required>\r\n                        <mat-option value=\"DNI\">\r\n                          DNI\r\n                        </mat-option>\r\n                        <mat-option value=\"Pasaporte\">\r\n                          Pasaporte\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\" style=\"margin-top:2.4%;\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Nro documento\" formControlName=\"nroDocumento\" type=\"text\"\r\n                        autocomplete=\"off\" accept=\"nroDocumento\" required>\r\n                      <mat-error *ngIf=\"FormRegisterUsuario.controls.nroDocumento.hasError('required')\">\r\n                        Su número de documento es <strong>obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Nombre\" formControlName=\"FirstName\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"FirstName\" required>\r\n                      <mat-error *ngIf=\"FormRegisterUsuario.controls.FirstName.hasError('required')\">\r\n                        Su nombre es <strong>obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Apellido\" formControlName=\"LastName\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"LastName\" required>\r\n                      <mat-error *ngIf=\"FormRegisterUsuario.controls.LastName.hasError('required')\">\r\n                        Su apellido es<strong> obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\" align=center>\r\n                  <mat-radio-group formControlName=\"Gender\" class=\"form-field w-100\">\r\n                    <mat-radio-button value=\"Masculino\" name=\"Gender\">Masculino</mat-radio-button>\r\n                    <mat-radio-button value=\"Femenino\" name=\"Gender\" style=\"margin: 0 20px;\">Femenino</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <mat-form-field class=\"form-field w-100\">\r\n                    <input matInput [matDatepicker]=\"dp\" placeholder=\"Fecha de Nacimiento\" formControlName=\"DOB\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dp></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Calle\" formControlName=\"Street\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Street\" required>\r\n                      <mat-error *ngIf=\"FormRegisterUsuario.controls.Street.hasError('required')\">\r\n                        Su calle es<strong> obligatoria</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Altura\" formControlName=\"Number\" type=\"number\" autocomplete=\"off\"\r\n                        accept=\"Number\" required>\r\n                      <mat-error *ngIf=\"FormRegisterUsuario.controls.Number.hasError('required')\">\r\n                        La altura de su domicilio es<strong> obligatoria</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Piso\" formControlName=\"Floor\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Floor\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Departamento\" formControlName=\"Dpto\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Dpto\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Barrio\" formControlName=\"Neighborhood\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Neighborhood\" required>\r\n                      <mat-error *ngIf=\"FormRegisterUsuario.controls.Street.hasError('required')\">\r\n                        Su barrio es<strong> obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Localidad\" formControlName=\"City\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"City\" required>\r\n                      <mat-error *ngIf=\"FormRegisterUsuario.controls.City.hasError('required')\">\r\n                        La localidad es<strong> obligatoria</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <mat-form-field class=\"form-field w-100\">\r\n                    <input matInput placeholder=\"Correo electronico\" formControlName=\"Email\" type=\"email\" required>\r\n                    <mat-hint>{{EmailErrorMessage}}</mat-hint>\r\n                    <mat-error *ngIf=\"FormRegisterUsuario.controls.Email.hasError('email')\">\r\n                      Por favor, Ingrese un correo electronico valido\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"FormRegisterUsuario.controls.Email.hasError('required')\">\r\n                      Su correo es <strong>obligatorio</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <mat-form-field class=\"form-field w-100\">\r\n                    <input matInput placeholder=\"Contraseña\" formControlName=\"Password\" type=\"password\" required>\r\n                    <mat-hint>{{PasswordErrorMessage}}</mat-hint>\r\n                    <mat-error *ngIf=\"FormRegisterUsuario.controls.Password.hasError('required')\">\r\n                      Contraseña <strong>obligatoria</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </mat-tab>\r\n          <mat-tab label=\"Soy profesional\" (model)=\"isUsuario!\">\r\n            <form class=\"example-form\" [formGroup]=\"FormRegisterProfesional\">\r\n              <div class=\"controls-container\">\r\n                <form [formGroup]=\"UpdateProProPicForm\" (submit)=\"OnSubmit()\">\r\n                  <div mat-dialog-content>\r\n                    <input type=\"file\" style=\"display:none;\" formControlName=\"InputImage\" accept=\"image/*\"\r\n                      #InputFileProfesional (change)=\"onChange($event)\" required>\r\n                    <button mat-icon-button type=\"button\" (click)=\"InputFileProfesional.click()\"\r\n                      *ngIf=\"OutputImageProfesional== undefined\">\r\n                      <i class=\"fal fa-paperclip fa-lg\"></i>\r\n                    </button>\r\n                    <div>\r\n                      <img src=\"{{OutputImageProfesional.compressedImage.imageDataUrl}}\" width=\"100px\" height=\"100px\"\r\n                        *ngIf=\"showImageProfesional\" class=\"responsive-img\" />\r\n                    </div>\r\n                  </div>\r\n                  <div mat-dialog-actions>\r\n                    <mat-progress-bar *ngIf=\"Uploading\" mode=\"determinate\" [value]=\"(uploadPercent$ | async)\">\r\n                    </mat-progress-bar>\r\n                    <button mat-raised-button type=\"reset\" (click)=\"onNoClick()\">Cancelar</button>\r\n                    <button mat-raised-button color=\"primary\" (click)=\"InputFileProfesional.click()\"\r\n                      [disabled]=\"!UpdateProProPicForm.valid || !processingImageCompleteProfesional\"\r\n                      [attr.cdkFocusInitial]=\"processingImageCompleteProfesional ? '' : null\">Actualizar</button>\r\n                  </div>\r\n                </form>\r\n                <div class=\"row\" style=\"margin:0%;\">\r\n                  <div class=\"col-6\" align=right style=\"margin-top: 1%;\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                      <mat-label>Tipo de documento</mat-label>\r\n                      <mat-select [(value)]=\"TipoDocumentoProfesionalSeleccionado\" required>\r\n                        <mat-option value=\"DNI\">\r\n                          DNI\r\n                        </mat-option>\r\n                        <mat-option value=\"Pasaporte\">\r\n                          Pasaporte\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\" style=\"margin-top:2.4%;\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Nro documento\" formControlName=\"nroDocumento\" type=\"text\"\r\n                        autocomplete=\"off\" accept=\"nroDocumento\" required>\r\n                      <mat-error *ngIf=\"FormRegisterProfesional.controls.nroDocumento.hasError('required')\">\r\n                        Su número de documento es <strong>obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Nombre\" formControlName=\"FirstName\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"FirstName\" required>\r\n                      <mat-error *ngIf=\"FormRegisterProfesional.controls.FirstName.hasError('required')\">\r\n                        Su nombre es <strong>obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Apellido\" formControlName=\"LastName\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"LastName\" required>\r\n                      <mat-error *ngIf=\"FormRegisterProfesional.controls.LastName.hasError('required')\">\r\n                        Su apellido es<strong> obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\" align=center>\r\n                  <mat-radio-group formControlName=\"Gender\" class=\"form-field w-100\">\r\n                    <mat-radio-button value=\"Masculino\" name=\"Gender\">Masculino</mat-radio-button>\r\n                    <mat-radio-button value=\"Femenino\" name=\"Gender\" style=\"margin: 0 20px;\">Femenino</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <mat-form-field class=\"form-field w-100\">\r\n                    <input matInput [matDatepicker]=\"dpp\" placeholder=\"Fecha de Nacimiento\" formControlName=\"DOB\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dpp\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dpp></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Calle\" formControlName=\"Street\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Street\" required>\r\n                      <mat-error *ngIf=\"FormRegisterProfesional.controls.Street.hasError('required')\">\r\n                        Su calle es<strong> obligatoria</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Altura\" formControlName=\"Number\" type=\"number\" autocomplete=\"off\"\r\n                        accept=\"Number\" required>\r\n                      <mat-error *ngIf=\"FormRegisterProfesional.controls.Number.hasError('required')\">\r\n                        La altura de su domicilio es<strong> necesaria</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Piso\" formControlName=\"Floor\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Floor\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Departamento\" formControlName=\"Dpto\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Dpto\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Barrio\" formControlName=\"Neighborhood\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"Neighborhood\" required>\r\n                      <mat-error *ngIf=\"FormRegisterProfesional.controls.Street.hasError('required')\">\r\n                        Su barrio es<strong> obligatorio</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\">\r\n                      <input matInput placeholder=\"Localidad\" formControlName=\"City\" type=\"text\" autocomplete=\"off\"\r\n                        accept=\"City\" required>\r\n                      <mat-error *ngIf=\"FormRegisterProfesional.controls.City.hasError('required')\">\r\n                        La localidad es<strong> obligatoria</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\" style=\"text-align: center\">\r\n                      <input matInput placeholder=\"Nombre comercial/Nombre del local\" formControlName=\"NombreComercial\"\r\n                        type=\"text\" autocomplete=\"off\" accept=\"NombreComercial\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field class=\"form-field w-100\" style=\"text-align: center\">\r\n                      <input matInput placeholder=\"Número Comercial\" formControlName=\"PhoneNumber\" type=\"text\"\r\n                        autocomplete=\"off\" accept=\"PhoneNumber\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin:0;\">\r\n                  <div class=\"col-6\" align=\"right\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                      <mat-label>Modalidad de trabajo</mat-label>\r\n                      <mat-select [(value)]=\"TipoModalidadTrabajoProfesionalSeleccionado\">\r\n                        <mat-option value=\"Domicilio\">\r\n                          Domicilio\r\n                        </mat-option>\r\n                        <mat-option value=\"Local\">\r\n                          Local\r\n                        </mat-option>\r\n                        <mat-option value=\"Hibrido\">\r\n                          Hibrido\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-3\" align=right>\r\n                    <mat-form-field appearance=\"fill\">\r\n                      <mat-label>Tipo de servicio</mat-label>\r\n                      <mat-select [(value)]=\"TipoDeServicioSeleccionado\">\r\n                        <mat-option value=\"Peluqueria\">\r\n                          Peluqueria\r\n                        </mat-option>\r\n                        <mat-option value=\"Barberia\">\r\n                          Barberia\r\n                        </mat-option>\r\n                        <mat-option value=\"Manicuria\">\r\n                          Manicuria\r\n                        </mat-option>\r\n                        <mat-option value=\"Pedicuria/Podologia\">\r\n                          Pedicuria/Podologia\r\n                        </mat-option>\r\n                        <mat-option value=\"Maquillaje\">\r\n                          Maquillaje\r\n                        </mat-option>\r\n                        <mat-option value=\"Tratamientos Corporales\">\r\n                          Tratamientos Corporales\r\n                        </mat-option>\r\n                        <mat-option value=\"Depilacion\">\r\n                          Depilación\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <mat-form-field class=\"form-field w-100\">\r\n                    <input matInput placeholder=\"Correo electronico\" formControlName=\"Email\" type=\"email\" required>\r\n                    <mat-hint>{{EmailErrorMessage}}</mat-hint>\r\n                    <mat-error *ngIf=\"FormRegisterProfesional.controls.Email.hasError('email')\">\r\n                      Por favor, Ingrese un correo electronico valido\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"FormRegisterProfesional.controls.Email.hasError('required')\">\r\n                      Su correo es <strong>obligatorio</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <mat-form-field class=\"form-field w-100\">\r\n                    <input matInput placeholder=\"Contraseña\" formControlName=\"Password\" type=\"password\" required>\r\n                    <mat-hint>{{PasswordErrorMessage}}</mat-hint>\r\n                    <mat-error *ngIf=\"FormRegisterProfesional.controls.Password.hasError('required')\">\r\n                      Contraseña <strong>obligatoria</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <div style=\"margin:0 0 15px 15px;\">\r\n          <button mat-raised-button [disabled]=\"isUsuario ? !FormRegisterUsuario.valid : !FormRegisterProfesional.valid\"\r\n            type=\"submit\" color=\"accent\" (click)=\"isUsuario ? OnSubmit() : OnSubmitProfesional()\">\r\n            <span *ngIf=\"!Loading\">Registrar</span>\r\n            <span *ngIf=\"Loading\" style=\"margin:0 19px;\"><i class=\"fal fa-spinner fa-spin\"></i></span>\r\n          </button>\r\n          <button [routerLink]=\"['/Auth/Login']\" color=\"primary\" mat-button class=\"boton_ingresar\">Ingresar</button>\r\n        </div>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "HzFZ":
    /*!**********************************************************!*\
      !*** ./src/app/components/auth/login/login.component.ts ***!
      \**********************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function HzFZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "hYhv");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.css */
      "ynrO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/Services/my-auth.service */
      "Sm6f");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(MyAuth, fb) {
          _classCallCheck(this, LoginComponent);

          this.MyAuth = MyAuth;
          this.fb = fb;
          this.NetworkErrorCount = 0;
          this.hide = true;
          this.Loading = false;
          this.EmailErrorMessage = '';
          this.PasswordErrorMessage = '';
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            // this.MyAuth.Logout();
            this.FormLogin = this.fb.group({
              Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
              Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
            });
            this.FormValueChangesSub = this.FormLogin.valueChanges.subscribe(function (obs) {
              // console.log(obs)
              _this6.EmailErrorMessage = '';
              _this6.PasswordErrorMessage = '';
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('ngOnDestroy called');

            try {
              this.LoginSub.unsubscribe();
              this.FormValueChangesSub.unsubscribe();
            } catch (err) {// console.log(err)
            }
          }
        }, {
          key: "OnSubmit",
          value: function OnSubmit() {
            this.Loading = true;
            this.Login();
          }
        }, {
          key: "LoginWith",
          value: function LoginWith(prov) {
            var _this7 = this;

            var provider;

            if (prov == 'Google') {
              provider = new firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"].GoogleAuthProvider();
            } else if (prov == 'Facebook') {
              provider = new firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"].FacebookAuthProvider();
            }

            this.MyAuth.afAuth.signInWithPopup(provider).then(function (User) {
              // console.log(User)
              _this7.MyAuth.BasicUserInfo = User.user;
              _this7.LoginSub = _this7.MyAuth.afStore.doc('Users/' + User.user.uid).get().subscribe(function (u) {
                console.log(u.data());
                var data = u.data();

                if (!data.Email) {
                  // this.AdditionalInfoRequired = true;
                  var props = {
                    Id: User.user.uid,
                    DisplayName: User.user.displayName,
                    Email: User.user.email,
                    PhotoURL: User.user.photoURL,
                    PostsCount: 0,
                    FollowersCount: 0,
                    FollowingCount: 0,
                    Provider: User.user.providerId
                  };

                  _this7.MyAuth.afAuth.updateProfile({
                    'displayName': props.DisplayName,
                    'photoURL': props.PhotoURL
                  });

                  _this7.MyAuth.afStore.doc('Users/' + User.user.uid).set(props).then(function () {
                    _this7.MyAuth.NavTo('/Home');

                    _this7.Loading = false;
                  })["catch"](function (err) {
                    console.log(err);
                  });

                  _this7.MyAuth.Notify.openSnackBar('You\'ve logged in successfully, please tell us something more about you!', '');
                } else {
                  // this.MyAuth.Notify.openSnackBar("Welcome, " + u.data().DisplayName, "", () => {
                  //   this.MyAuth.NavTo('/Home')
                  // })
                  _this7.MyAuth.NavTo('/Home');
                }
              });
            })["catch"](function (err) {
              console.log(err);

              if (err.code == 'auth/network-request-failed') {
                _this7.NetworkErrorCount++;

                if (_this7.NetworkErrorCount <= 3) {
                  console.log('Retrying: ', _this7.NetworkErrorCount);

                  _this7.LoginWith(prov);
                }
              }
            });
          }
        }, {
          key: "Login",
          value: function Login() {
            var _this8 = this;

            var Email = this.FormLogin.value.Email;
            var pwd = this.FormLogin.value.Password;
            this.MyAuth.afAuth.signInWithEmailAndPassword(Email, pwd).then(function (res) {
              console.log(res);

              if (res.user.uid) {
                // this.MyAuth.Notify.openSnackBar(`Welcome back, ${res.user.displayName}`, '')
                _this8.Loading = false;

                _this8.MyAuth.NavTo('Home');
              }
            })["catch"](function (err) {
              console.log(err);
              _this8.Loading = false;
              var errorCode = err.code;
              var errorMessage = err.message;

              switch (errorCode) {
                case 'auth/invalid-email':
                  _this8.EmailErrorMessage = errorMessage;
                  _this8.EmailErrorMessage = 'Email invalido, por favor verifique';
                  break;

                case 'auth/user-disabled':
                  _this8.EmailErrorMessage = errorMessage;
                  _this8.EmailErrorMessage = 'Usuario deshabilitado';
                  break;

                case 'auth/user-not-found':
                  console.log(errorMessage);
                  _this8.EmailErrorMessage = errorMessage;
                  _this8.EmailErrorMessage = 'Usuario no encontrado';
                  break;

                case 'auth/wrong-password':
                  _this8.PasswordErrorMessage = errorMessage;
                  _this8.PasswordErrorMessage = 'La contraseña introducida es incorrecta, por favor verifique';
                  break;

                default:
                  _this8.MyAuth.Notify.openSnackBar('Ocurrio un error, inténtelo de nuevo mas tarde', '');

                  break;
              }

              if (err.code == 'auth/network-request-failed') {
                _this8.MyAuth.Notify.openSnackBar('Existe un problema con su conexion de red, por favor verifique', '', function () {}, function () {}, 3500);
              } else {
                _this8.MyAuth.Notify.openSnackBar(_this8.EmailErrorMessage, '');
              }
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__["MyAuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__["MyAuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], LoginComponent);
      /***/
    },

    /***/
    "QRk4":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/additional-user-info/additional-user-info.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QRk4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"UserLoaded; else UserLoading\">\r\n  <div class=\"container-fluid background-gradient\">\r\n    <div class=\"col-12 col-lg-6 offset-lg-3\">\r\n      <mat-card>\r\n        <form [formGroup]=\"AdditionalInfoForm\" (submit)=\"OnSubmit()\">\r\n          <mat-card-header>\r\n            <mat-card-title class=\"title\">Hello {{MyAuth.LoggedUser.DisplayName}}, Welcome to {{MyAuth.AppTitle}}\r\n            </mat-card-title>\r\n            <mat-card-title class=\"second-title\">Tell us something more about you!</mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <div class=\"controls-container\">\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"DisplayName\" placeholder=\"DisplayName\" type=\"text\" required>\r\n                  <mat-error *ngIf=\"AdditionalInfoForm.controls.DisplayName.hasError('required')\">\r\n                    Name is <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"Email\" placeholder=\"Email\" type=\"email\" required>\r\n                  <mat-error *ngIf=\"AdditionalInfoForm.controls.Email.hasError('required')\">\r\n                    Email is <strong>required</strong>\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"AdditionalInfoForm.controls.Email.hasError('email')\">\r\n                    Please enter a valid <strong>email address</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"PhoneNumber\" type=\"number\" placeholder=\"PhoneNumber\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\" style=\"margin: 5px 0;\">\r\n                <mat-radio-group formControlName=\"Gender\" aria-required=\"true\">\r\n                  <mat-radio-button value=\"Male\" name=\"Gender\">Male</mat-radio-button>\r\n                  <mat-radio-button value=\"Female\" name=\"Gender\" style=\"margin-left: 32px;\">Female</mat-radio-button>\r\n                </mat-radio-group>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <input matInput [matDatepicker]=\"dp\" placeholder=\"Fecha Nacimiento\" formControlName=\"DOB\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #dp></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <mat-select formControlName=\"Status\" placeholder=\"Status\">\r\n                    <mat-option value=\"Single\">Single</mat-option>\r\n                    <mat-option value=\"Engaged\">Engaged</mat-option>\r\n                    <mat-option value=\"Married\">Married</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <mat-label>City</mat-label>\r\n                  <mat-select formControlName=\"LivesIn\">\r\n                    <mat-option>-- None --</mat-option>\r\n                    <mat-optgroup *ngFor=\"let State of CitiesAndStates.StatesCities\" [label]=\"State.State\">\r\n                      <mat-option *ngFor=\"let City of State.Cities\" [value]=\"City\">\r\n                        {{City}}\r\n                      </mat-option>\r\n                    </mat-optgroup>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"Interests\" placeholder=\"Interests\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"About\" placeholder=\"About\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <div style=\"margin:0 0 15px 15px;\">\r\n              <button mat-raised-button [disabled]=\"AdditionalInfoForm.pristine || AdditionalInfoForm.invalid\"\r\n                type=\"submit\" color=\"accent\">\r\n                <span *ngIf=\"!Loading\">Complete</span>\r\n                <span *ngIf=\"Loading\" style=\"margin:0 19px;\"><i class=\"fal fa-spinner fa-spin\"></i></span>\r\n              </button>\r\n              <button *ngIf=\"IsPasswordProvider\" (click)=\"Skip()\" mat-button>Skip</button>\r\n            </div>\r\n          </mat-card-actions>\r\n        </form>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n<ng-template #UserLoading>\r\n  <element-my-loader></element-my-loader>\r\n</ng-template>";
      /***/
    },

    /***/
    "akM6":
    /*!*****************************************************************!*\
      !*** ./src/app/components/auth/register/register.component.css ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function akM6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  .controls-container{\r\n    width: 100%;\r\n  }\r\n  .FullCard{\r\n    border-radius: 14px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n  \r\n  }\r\n  #grid {\r\n    background: linear-gradient(#8b73ff,#8a3788);\r\n    padding: 80px 0;\r\n    /*height: 100vh*/;\r\n    /* height: calc(100% - 64px); */\r\n  }\r\n  .boton_ingresar{\r\n    color: rgb(88, 3, 88);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixvQ0FBb0M7O0VBRXRDO0VBQ0E7SUFDRSw0Q0FBNEM7SUFDNUMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwrQkFBK0I7RUFDakM7RUFFQTtJQUNFLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuY29udHJvbHMtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5GdWxsQ2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgXHJcbiAgfVxyXG4gICNncmlkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjOGI3M2ZmLCM4YTM3ODgpO1xyXG4gICAgcGFkZGluZzogODBweCAwO1xyXG4gICAgLypoZWlnaHQ6IDEwMHZoKi87XHJcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpOyAqL1xyXG4gIH1cclxuXHJcbiAgLmJvdG9uX2luZ3Jlc2Fye1xyXG4gICAgY29sb3I6IHJnYig4OCwgMywgODgpO1xyXG4gIH1cclxuICAiXX0= */";
      /***/
    },

    /***/
    "f0Yz":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/auth/additional-user-info/additional-user-info.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: AdditionalUserInfoComponent */

    /***/
    function f0Yz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdditionalUserInfoComponent", function () {
        return AdditionalUserInfoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_additional_user_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./additional-user-info.component.html */
      "QRk4");
      /* harmony import */


      var _additional_user_info_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./additional-user-info.component.css */
      "uyJj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Services/my-auth.service */
      "Sm6f");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_Models_c_states_cities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/Models/c-states-cities */
      "v5XD");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AdditionalUserInfoComponent = /*#__PURE__*/function () {
        function AdditionalUserInfoComponent(MyAuth, fb) {
          _classCallCheck(this, AdditionalUserInfoComponent);

          this.MyAuth = MyAuth;
          this.fb = fb;
          this.CitiesAndStates = new src_app_Models_c_states_cities__WEBPACK_IMPORTED_MODULE_6__["cStatesCities"]();
          this.Loading = false;
          this.UserLoaded = false;
        }

        _createClass(AdditionalUserInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.MyAuth.afAuth.authState.subscribe(function (r) {
              _this9.MyAuth.afStore.doc("Users/".concat(r.uid)).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (res) {
                _this9.User = res;
                _this9.AdditionalInfoForm = _this9.fb.group({
                  Id: _this9.User.Id,
                  Email: [_this9.User.Email, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
                  DisplayName: [_this9.User.DisplayName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                  Gender: ['Male', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                  DOB: new Date(_this9.User.DOB).valueOf(),
                  PhoneNumber: _this9.User.PhoneNumber,
                  PhotoURL: _this9.User.PhotoURL,
                  Status: '',
                  LivesIn: '',
                  Interests: '',
                  About: ''
                });

                if (_this9.User.Provider === 'Password') {
                  _this9.AdditionalInfoForm.controls['Email'].disable();
                }

                _this9.UserLoaded = true;
              });
            });
          }
        }, {
          key: "OnSubmit",
          value: function OnSubmit() {
            console.log(this.AdditionalInfoForm);
            this.Loading = true;
            this.UpdateUserInfoOnFireStore(this.AdditionalInfoForm.value);
          }
        }, {
          key: "Skip",
          value: function Skip() {
            this.MyAuth.NavTo('Home');
          }
        }, {
          key: "UpdateUserInfoOnFireStore",
          value: function UpdateUserInfoOnFireStore(User) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      User.DOB = User.DOB.valueOf();

                      if (this.AdditionalInfoForm.controls['Email'].disabled) {
                        User.Email = this.User.Email;
                      }

                      _context4.next = 4;
                      return this.MyAuth.afAuth.updateProfile({
                        'displayName': User.DisplayName,
                        'photoURL': User.PhotoURL
                      });

                    case 4:
                      _context4.next = 6;
                      return this.MyAuth.afStore.doc('Users/' + User.Id).set(User);

                    case 6:
                      this.MyAuth.NavTo('/Home');
                      this.Loading = false;

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return AdditionalUserInfoComponent;
      }();

      AdditionalUserInfoComponent.ctorParameters = function () {
        return [{
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      AdditionalUserInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-additional-user-info',
        template: _raw_loader_additional_user_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_additional_user_info_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])], AdditionalUserInfoComponent);
      /***/
    },

    /***/
    "hYhv":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hYhv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div class=\"container-fluid\" id=\"grid\">\r\n  <div class=\"col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\r\n    <form [formGroup]=\"FormLogin\" (submit)=\"OnSubmit()\">\r\n      <mat-card class=\"FullCard\">\r\n        <mat-card-header>\r\n          <mat-card-title>Ingresar</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <div class=\"controls-container\">\r\n            <mat-form-field class=\"form-field\">\r\n              <input matInput placeholder=\"Correo electronico\" formControlName=\"Email\" type=\"email\" required>\r\n              <!-- <mat-hint>{{EmairrorMessalEge}}</mat-hint> -->\r\n              <mat-error *ngIf=\"FormLogin.controls.Email.hasError('required')\">\r\n                Su correo es <strong>obligatorio</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"form-field\">\r\n              <input matInput placeholder=\"Contraseña\" formControlName=\"Password\" [type]=\"hide ? 'password' : 'text'\"\r\n              required>\r\n              <mat-hint>{{PasswordErrorMessage}}</mat-hint>\r\n              <mat-error *ngIf=\"FormLogin.controls.Password.hasError('required')\">\r\n                Su contraseña es<strong> obligatoria</strong>\r\n              </mat-error>\r\n              <mat-error *ngIf=\"FormLogin.controls.Password.hasError('minlength')\">\r\n                Su contraseña deberia contener <strong>un mínimo de 6</strong> caracteres.\r\n              </mat-error>\r\n              <mat-icon matSuffix mat-icon-button (click)=\"hide = !hide\" style=\"cursor: pointer;\">\r\n                <span *ngIf=\"hide\"><i class=\"fal fa-eye-slash\"></i></span>\r\n                <span *ngIf=\"!hide\"><i class=\"fal fa-eye\"></i></span>\r\n              </mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions class=\"link\">\r\n\r\n          <button mat-raised-button [disabled]=\"FormLogin.pristine || FormLogin.invalid\" type=\"submit\" class=\"btn_ingresar\">\r\n            <span *ngIf=\"!Loading\">Ingresar</span>\r\n            <span *ngIf=\"Loading\" style=\"margin:0 10px;\"><i class=\"fal fa-spinner fa-spin\"></i></span>\r\n          </button>\r\n\r\n           <h6 class=\"link_recuperar\">Olvide mi contraseña <a [routerLink]=\"['/Auth/recuperar']\" >Recuperar</a></h6>\r\n           \r\n           <h6 class=\"link_register\">¿Eres nuevo? <a [routerLink]=\"[ '/Auth/Register']\">hace click</a> y registrate!</h6>\r\n\r\n          <!-- <button mat-raised-button [routerLink]=\"[ '/Register']\" color=\"primary\">Register</button> -->\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </form>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "neZz":
    /*!**************************************************************************!*\
      !*** ./src/app/Modules/FeatureRoutings/authentication-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: AuthenticationRoutingModule */

    /***/
    function neZz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () {
        return AuthenticationRoutingModule;
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


      var src_app_components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/components/auth/register/register.component */
      "+jqZ");
      /* harmony import */


      var src_app_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/components/auth/login/login.component */
      "HzFZ");
      /* harmony import */


      var src_app_components_auth_additional_user_info_additional_user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/components/auth/additional-user-info/additional-user-info.component */
      "f0Yz");
      /* harmony import */


      var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/guards/auth.guard */
      "UTcu");
      /* harmony import */


      var src_app_components_auth_recuperar_recuperar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/auth/recuperar/recuperar */
      "vbY1");
      /* harmony import */


      var src_app_components_auth_verificar_verificar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/auth/verificar/verificar.component */
      "9ryv");

      var routes = [{
        path: 'Register',
        component: src_app_components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
      }, {
        path: 'Login',
        component: src_app_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'Verificar',
        component: src_app_components_auth_verificar_verificar_component__WEBPACK_IMPORTED_MODULE_8__["VerificarComponent"]
      }, {
        path: 'AdditionInfo',
        component: src_app_components_auth_additional_user_info_additional_user_info_component__WEBPACK_IMPORTED_MODULE_5__["AdditionalUserInfoComponent"],
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
      }, {
        path: '',
        redirectTo: 'Login'
      }, {
        path: 'recuperar',
        component: src_app_components_auth_recuperar_recuperar__WEBPACK_IMPORTED_MODULE_7__["RecuperarComponent"]
      }];

      var AuthenticationRoutingModule = /*#__PURE__*/_createClass(function AuthenticationRoutingModule() {
        _classCallCheck(this, AuthenticationRoutingModule);
      });

      AuthenticationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
      })], AuthenticationRoutingModule);
      /***/
    },

    /***/
    "uyJj":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/auth/additional-user-info/additional-user-info.component.css ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function uyJj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mat-form-field, .mat-radio-group {\r\n    width:100%;\r\n}\r\n\r\n.second-title {\r\n    font-size: 12px;\r\n    color: #ff4081;\r\n}\r\n\r\n.title {\r\n    color:#3f51b5;\r\n}\r\n\r\n.background-gradient {\r\n    background: linear-gradient(to right, rgb(40, 60, 134), rgb(69, 162, 71));\r\n    padding: 64px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGl0aW9uYWwtdXNlci1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5RUFBeUU7SUFDekUsZUFBZTtBQUNuQiIsImZpbGUiOiJhZGRpdGlvbmFsLXVzZXItaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkLCAubWF0LXJhZGlvLWdyb3VwIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5zZWNvbmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNmZjQwODE7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjojM2Y1MWI1O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1ncmFkaWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYig0MCwgNjAsIDEzNCksIHJnYig2OSwgMTYyLCA3MSkpO1xyXG4gICAgcGFkZGluZzogNjRweCAwO1xyXG59Il19 */";
      /***/
    },

    /***/
    "ynrO":
    /*!***********************************************************!*\
      !*** ./src/app/components/auth/login/login.component.css ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function ynrO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".controls-container{\r\n  width: 100%;\r\n}\r\n.Olvido {\r\n  text-decoration: none;\r\n  color:white;\r\n}\r\n.controls-container * {\r\n  width: 100%;\r\n}\r\n.FullCard{\r\n  border-radius: 14px;\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n\r\n}\r\n#grid {\r\n  background: linear-gradient(#8b73ff,#8a3788);\r\n  padding: 80px 0;\r\n  height: 100vh;\r\n  /* height: calc(100% - 64px); */\r\n}\r\nbody { padding: 2em; }\r\n/* Shared */\r\n.loginBtn {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  /* width: 13em;  - apply for fixed size */\r\n  margin: 0.2em;\r\n  margin: 3px 0px !important;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  /* font-size: 16px; */\r\n  color: rgb(253, 253, 253);\r\n}\r\n.loginBtn:before {\r\n  content: \"\";\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n.loginBtn:focus {\r\n  outline: none;\r\n}\r\n.loginBtn:active {\r\n  box-shadow: inset 0 0 0 32px rgba(112, 13, 96, 0.842);\r\n}\r\n/* Facebook */\r\n.loginBtn--facebook {\r\n  background-color: #4C69BA;\r\n  background-image: linear-gradient(#4C69BA, #3B55A0);\r\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\r\n  text-shadow: 0 -1px 0 #354C8C;\r\n}\r\n.loginBtn--facebook:before {\r\n  border-right: #364e92 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n}\r\n.loginBtn--facebook:hover,\r\n.loginBtn--facebook:focus {\r\n  background-color: #5B7BD5;\r\n  background-image: linear-gradient(#5B7BD5, #4864B1);\r\n}\r\n/* Google */\r\n.loginBtn--google {\r\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n  background: #DD4B39;\r\n}\r\n.loginBtn--google:before {\r\n  border-right: #BB3F30 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n}\r\n.loginBtn--google:hover,\r\n.loginBtn--google:focus {\r\n  background: #E74B37;\r\n}\r\n.link{\r\n  font-size: 120%;\r\n  padding-left: 3%;\r\n}\r\n.btn_ingresar{\r\n  width: 30%;\r\n  padding: 0.5%;\r\n  left: 35%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG9DQUFvQzs7QUFFdEM7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsYUFBYTtFQUNiLCtCQUErQjtBQUNqQztBQUVBLE9BQU8sWUFBWSxFQUFFO0FBRXJCLFdBQVc7QUFDWDtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFEQUFxRDtBQUN2RDtBQUdBLGFBQWE7QUFDYjtFQUNFLHlCQUF5QjtFQUN6QixtREFBbUQ7RUFDbkQsK0VBQStFO0VBQy9FLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLHlHQUF5RztBQUMzRztBQUNBOztFQUVFLHlCQUF5QjtFQUN6QixtREFBbUQ7QUFDckQ7QUFHQSxXQUFXO0FBQ1g7RUFDRSxvREFBb0Q7RUFDcEQsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsdUdBQXVHO0FBQ3pHO0FBQ0E7O0VBRUUsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFNBQVM7QUFDWCIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2xzLWNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uT2x2aWRvIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5jb250cm9scy1jb250YWluZXIgKiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLkZ1bGxDYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxufVxyXG5cclxuI2dyaWQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjOGI3M2ZmLCM4YTM3ODgpO1xyXG4gIHBhZGRpbmc6IDgwcHggMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC8qIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7ICovXHJcbn1cclxuXHJcbmJvZHkgeyBwYWRkaW5nOiAyZW07IH1cclxuXHJcbi8qIFNoYXJlZCAqL1xyXG4ubG9naW5CdG4ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIHdpZHRoOiAxM2VtOyAgLSBhcHBseSBmb3IgZml4ZWQgc2l6ZSAqL1xyXG4gIG1hcmdpbjogMC4yZW07XHJcbiAgbWFyZ2luOiAzcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxNXB4IDAgNDZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBsaW5lLWhlaWdodDogMzRweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gIC8qIGZvbnQtc2l6ZTogMTZweDsgKi9cclxuICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG59XHJcbi5sb2dpbkJ0bjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDM0cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5sb2dpbkJ0bjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubG9naW5CdG46YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzMnB4IHJnYmEoMTEyLCAxMywgOTYsIDAuODQyKTtcclxufVxyXG5cclxuXHJcbi8qIEZhY2Vib29rICovXHJcbi5sb2dpbkJ0bi0tZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0QzY5QkE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM0QzY5QkEsICMzQjU1QTApO1xyXG4gIC8qZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIG5ldWVcIiwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7Ki9cclxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgIzM1NEM4QztcclxufVxyXG4ubG9naW5CdG4tLWZhY2Vib29rOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAjMzY0ZTkyIDFweCBzb2xpZDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZmFjZWJvb2sucG5nJykgNnB4IDZweCBuby1yZXBlYXQ7XHJcbn1cclxuLmxvZ2luQnRuLS1mYWNlYm9vazpob3ZlcixcclxuLmxvZ2luQnRuLS1mYWNlYm9vazpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCN0JENTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzVCN0JENSwgIzQ4NjRCMSk7XHJcbn1cclxuXHJcblxyXG4vKiBHb29nbGUgKi9cclxuLmxvZ2luQnRuLS1nb29nbGUge1xyXG4gIC8qZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFJvYm90bywgYXJpYWwsIHNhbnMtc2VyaWY7Ki9cclxuICBiYWNrZ3JvdW5kOiAjREQ0QjM5O1xyXG59XHJcbi5sb2dpbkJ0bi0tZ29vZ2xlOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAjQkIzRjMwIDFweCBzb2xpZDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZ29vZ2xlLnBuZycpIDZweCA2cHggbm8tcmVwZWF0O1xyXG59XHJcbi5sb2dpbkJ0bi0tZ29vZ2xlOmhvdmVyLFxyXG4ubG9naW5CdG4tLWdvb2dsZTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogI0U3NEIzNztcclxufVxyXG5cclxuLmxpbmt7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG4gIHBhZGRpbmctbGVmdDogMyU7XHJcbn1cclxuXHJcbi5idG5faW5ncmVzYXJ7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBwYWRkaW5nOiAwLjUlO1xyXG4gIGxlZnQ6IDM1JTtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=Modules-FeatureModules-Authentication-module-es5.js.map