(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\FACULTAD\CERVANTES ANALISTA EN SISTEMAS\TESIS\BeautyWayFB\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1YZI":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/verificar/verificar.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YZI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container-fluid\" id=\"grid\">\r\n  <div class=\"col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\r\n    <form [formGroup]=\"FormVerificar\" (submit)=\"OnSubmit()\">\r\n      <mat-card class=\"FullCard\">\r\n        <mat-card-header>\r\n          <mat-card-title>Verificar cuenta</mat-card-title>\r\n        </mat-card-header>\r\n        \r\n        <mat-card-content>\r\n          <div class=\"controls-container\">\r\n            \r\n            <p>\r\n              Felicitaciones, ya haz creado tu cuenta!\r\n              <br>\r\n              Ahora queda el ultimo paso, debes de verificar tu cuenta,\r\n              con el mail que te mandamos.\r\n              <br>\r\n            </p>\r\n            <i class=\"fal fa-comment-lines\" style=\"width:300px\"></i>\r\n            <!--Este icono debe de ser un signo de email, debe estar centrado y con un tamaño mas grande. -->  \r\n            <p>\r\n\r\n              <br>\r\n              Si ya confirmaste el email que te enviamos a tu casilla de correo\r\n              <br>\r\n              haz click en volver para acceder a tu cuenta  \r\n            </p>\r\n            \r\n            \r\n            \r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n         \r\n          <button mat-raised-button type=\"submit\">\r\n            <span *ngIf=\"!Loading\">Volver</span>\r\n            <span *ngIf=\"Loading\" style=\"margin:0 10px;\"><i class=\"fal fa-spinner fa-spin\"></i></span>\r\n          </button>\r\n          \r\n          \r\n          <!-- <button mat-raised-button [routerLink]=\"[ '/Register']\" color=\"primary\">Register</button> -->\r\n        </mat-card-actions>\r\n        <mat-card-actions>\r\n\r\n          <!--\r\n          <button mat-raised-button (click)=\"LoginWith('Google')\" type=\"button\" class=\"loginBtn loginBtn--google\">\r\n            Login with Google\r\n          </button> -->\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </form>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "3B9c":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Dialogs/friend-requests-dialog/friend-requests-dialog.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function B9c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <mat-list dense>\r\n  <div *ngIf=\"Loading\" style=\"text-align: center;\">\r\n    <element-my-loader></element-my-loader>\r\n  </div>\r\n  <div *ngIf=\"!Loading && NoRequests\">\r\n    No pending Requests!\r\n  </div>\r\n  <mat-list-item *ngFor=\"let Request of Requests; index as i\">\r\n    <img mat-list-avatar [src]=\"Request.AspNetUserAction.ProfilePicThumbURL\"\r\n      alt=\"Avatar of {{Request.AspNetUserAction.FirstName +' '+Request.AspNetUserAction.LastName}}\">\r\n    <h4 mat-line class=\"Requester-Name\">{{Request.AspNetUserAction.FirstName+' '+Request.AspNetUserAction.LastName}}</h4>\r\n    <button mat-icon-button (click)=\"RequestAction(Request.Id, true, Request.AspNetUserAction)\">\r\n      <i style=\"margin-left: 8px;\" class=\"fal fa-check-circle fa-2x\"></i>\r\n    </button>\r\n    <button mat-icon-button (click)=\"RequestAction(Request.Id, false, Request.AspNetUserAction)\">\r\n      <i style=\"margin-left: 8px;\" class=\"fal fa-times-circle fa-2x\"></i>\r\n    </button>\r\n    <p mat-line class=\"Request-Message\">Wants to be your friend</p>\r\n  </mat-list-item>\r\n</mat-list> -->";
      /***/
    },

    /***/
    "3Zh1":
    /*!*******************************************!*\
      !*** ./src/app/Services/chats.service.ts ***!
      \*******************************************/

    /*! exports provided: ChatsService */

    /***/
    function Zh1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatsService", function () {
        return ChatsService;
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


      var _my_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-auth.service */
      "Sm6f");
      /* harmony import */


      var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/functions */
      "RgrY");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _follow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./follow.service */
      "dhyO");

      var ChatsService = /*#__PURE__*/function () {
        function ChatsService(MyAuth, FollowSrv, afFunctions) {
          _classCallCheck(this, ChatsService);

          this.MyAuth = MyAuth;
          this.FollowSrv = FollowSrv;
          this.afFunctions = afFunctions;
        }

        _createClass(ChatsService, [{
          key: "SendAMessage",
          value: function SendAMessage(To, Text) {
            var SendAMessage = this.afFunctions.httpsCallable('SendAMessage');
            return SendAMessage({
              To: To,
              Text: Text
            });
          }
        }, {
          key: "LoadMessages",
          value: function LoadMessages(UserId) {
            var _this = this;

            var SentMessages$ = this.MyAuth.afStore.collection("Messages", function (ref) {
              return ref.where('ToId', '==', UserId).where('FromId', '==', _this.MyAuth.BasicUserInfo.uid);
            }).valueChanges({
              idField: 'DocId'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
            var ReceivedMessages$ = this.MyAuth.afStore.collection("Messages", function (ref) {
              return ref.where('FromId', '==', UserId).where('ToId', '==', _this.MyAuth.BasicUserInfo.uid);
            }).valueChanges({
              idField: 'DocId'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
            var combinedReturn = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(SentMessages$, ReceivedMessages$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (res) {
              var ret = res[0].concat(res[1]);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(ret);
            }));
            return combinedReturn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
          }
        }, {
          key: "GetUnfollowChatUserIds",
          value: function GetUnfollowChatUserIds() {
            var _this2 = this;

            var SentMessages$ = this.MyAuth.afStore.collection("Messages", function (ref) {
              return ref.where('FromId', '==', _this2.MyAuth.BasicUserInfo.uid).orderBy('SentOn', 'desc');
            }).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
            var ReceivedMessages$ = this.MyAuth.afStore.collection("Messages", function (ref) {
              return ref.where('ToId', '==', _this2.MyAuth.BasicUserInfo.uid).orderBy('SentOn', 'desc');
            }).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
            var combinedReturn = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(SentMessages$, ReceivedMessages$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (res) {
              var SentMessageUsers = res[0];
              var ReceivedMessageUsers = res[1];
              var SentMessageUserIds = [];
              var ReceivedMessageUserIds = [];
              SentMessageUsers.forEach(function (e) {
                SentMessageUserIds.push(e.ToId);
              });
              ReceivedMessageUsers.forEach(function (e) {
                ReceivedMessageUserIds.push(e.FromId);
              });

              var CombinedUserIds = _toConsumableArray(new Set(SentMessageUserIds.concat(ReceivedMessageUserIds)));

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(CombinedUserIds);
            }));
            return combinedReturn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
          }
        }, {
          key: "GetLastMessage",
          value: function GetLastMessage(WithUserId) {
            var _this3 = this;

            var SentMessages$ = this.MyAuth.afStore.collection("Messages", function (ref) {
              return ref.where('ToId', '==', WithUserId).where('FromId', '==', _this3.MyAuth.BasicUserInfo.uid).orderBy('SentOn', 'desc').limit(1);
            }).valueChanges({
              idField: 'DocId'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
            var ReceivedMessages$ = this.MyAuth.afStore.collection("Messages", function (ref) {
              return ref.where('FromId', '==', WithUserId).where('ToId', '==', _this3.MyAuth.BasicUserInfo.uid).orderBy('SentOn', 'desc').limit(1);
            }).valueChanges({
              idField: 'DocId'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
            var ReceivedMessagesForDeleveryReport$ = this.MyAuth.afStore.collection("Messages", function (ref) {
              return ref.where('FromId', '==', WithUserId).where('ToId', '==', _this3.MyAuth.BasicUserInfo.uid).orderBy('SentOn', 'desc');
            }).valueChanges({
              idField: 'DocId'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
            var combinedReturn = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(SentMessages$, ReceivedMessages$, ReceivedMessagesForDeleveryReport$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (ret) {
              var ReceivedMessages = ret[2];
              ReceivedMessages.filter(function (message) {
                return message.Status == 1;
              }).forEach(function (message) {
                // console.log(message)
                _this3.UpdateMessageStatus(message.DocId, 2).subscribe(function (r) {
                  return console.log(r);
                });
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (res) {
              var ret = res[0].concat(res[1]);

              if (ret.length == 2) {
                var ret2 = ret.sort(function (a, b) {
                  return a.SentOn - b.SentOn;
                }).slice(1);
                return ret2;
              } else if (ret.length == 1) return ret;

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
            }));
            return combinedReturn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
          }
        }, {
          key: "GetActiveChatUsersList",
          value: function GetActiveChatUsersList() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.FollowSrv.GetAUserFollowersNFollowingUserIds(this.MyAuth.BasicUserInfo.uid), this.GetUnfollowChatUserIds()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (r) {
              return _toConsumableArray(new Set(r[1].concat(r[0])));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
          }
        }, {
          key: "UpdateMessageStatus",
          value: function UpdateMessageStatus(DocId, Status) {
            var UpdateMessageStatus = this.afFunctions.httpsCallable('UpdateMessageStatus');
            return UpdateMessageStatus({
              DocId: DocId,
              Status: Status
            });
          }
        }, {
          key: "DeleteAMessage",
          value: function DeleteAMessage(MessageId) {
            var DeleteAMessageFn = this.afFunctions.httpsCallable('DeleteAMessage');
            return DeleteAMessageFn({
              MessageId: MessageId
            });
          }
        }]);

        return ChatsService;
      }();

      ChatsService.ctorParameters = function () {
        return [{
          type: _my_auth_service__WEBPACK_IMPORTED_MODULE_2__["MyAuthService"]
        }, {
          type: _follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"]
        }, {
          type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_3__["AngularFireFunctions"]
        }];
      };

      ChatsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_my_auth_service__WEBPACK_IMPORTED_MODULE_2__["MyAuthService"], _follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"], _angular_fire_functions__WEBPACK_IMPORTED_MODULE_3__["AngularFireFunctions"]])], ChatsService);
      /***/
    },

    /***/
    "3kr4":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customElements/my-loader/my-loader.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kr4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"div-center {{Classes}}\" style=\"padding: 20%\">\r\n  <div class=\"sk-circle\">\r\n    <div class=\"sk-circle1 sk-child\"></div>\r\n    <div class=\"sk-circle2 sk-child\"></div>\r\n    <div class=\"sk-circle3 sk-child\"></div>\r\n    <div class=\"sk-circle4 sk-child\"></div>\r\n    <div class=\"sk-circle5 sk-child\"></div>\r\n    <div class=\"sk-circle6 sk-child\"></div>\r\n    <div class=\"sk-circle7 sk-child\"></div>\r\n    <div class=\"sk-circle8 sk-child\"></div>\r\n    <div class=\"sk-circle9 sk-child\"></div>\r\n    <div class=\"sk-circle10 sk-child\"></div>\r\n    <div class=\"sk-circle11 sk-child\"></div>\r\n    <div class=\"sk-circle12 sk-child\"></div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "6OaO":
    /*!******************************************************************************************!*\
      !*** ./src/app/components/Dialogs/confirmation-dialog/confirmation-dialog.component.css ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function OaO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "6hCR":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customElements/mini-navbar/mini-navbar.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<mat-list>\r\n  <mat-list-item>\r\n    <div class=\"div-center\" style=\"width:100%\">\r\n      <button mat-icon-button routerLinkActive=\"active\" routerLink=\"/Home\">\r\n        <i class=\"fal fa-home\"></i>\r\n      </button>\r\n      <button mat-icon-button routerLinkActive=\"active\" routerLink=\"/User/{{MyAuth.LoggedUser?.Id}}\">\r\n        <i class=\"fal fa-user\"></i>\r\n      </button>\r\n      <button mat-icon-button routerLinkActive=\"active\" routerLink=\"/Messages\">\r\n        <i class=\"fal fa-comment-alt-lines\"></i>\r\n      </button>\r\n      <button mat-icon-button routerLinkActive=\"active\" routerLink=\"/Search\">\r\n        <i class=\"fal fa-search\"></i>\r\n      </button>\r\n    </div>\r\n  </mat-list-item>\r\n</mat-list>-->";
      /***/
    },

    /***/
    "7UEU":
    /*!*********************************************************!*\
      !*** ./src/app/components/auth/recuperar/recuperar.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function UEU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".controls-container{\r\n  width: 100%;\r\n}\r\n.Olvido {\r\n  text-decoration: none;\r\n  color:white;\r\n}\r\n.controls-container * {\r\n  width: 100%;\r\n}\r\n.FullCard{\r\n  border-radius: 14px;\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n\r\n}\r\n#grid {\r\n  background: linear-gradient(#8b73ff,#8a3788);\r\n  padding: 80px 0;\r\n  height: 100vh;\r\n  /* height: calc(100% - 64px); */\r\n}\r\nbody { padding: 2em; }\r\n/* Shared */\r\n.loginBtn {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  /* width: 13em;  - apply for fixed size */\r\n  margin: 0.2em;\r\n  margin: 3px 0px !important;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  /* font-size: 16px; */\r\n  color: rgb(253, 253, 253);\r\n}\r\n.loginBtn:before {\r\n  content: \"\";\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n.loginBtn:focus {\r\n  outline: none;\r\n}\r\n.loginBtn:active {\r\n  box-shadow: inset 0 0 0 32px rgba(112, 13, 96, 0.842);\r\n}\r\n/* Facebook */\r\n.loginBtn--facebook {\r\n  background-color: #4C69BA;\r\n  background-image: linear-gradient(#4C69BA, #3B55A0);\r\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\r\n  text-shadow: 0 -1px 0 #354C8C;\r\n}\r\n.loginBtn--facebook:before {\r\n  border-right: #364e92 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n}\r\n.loginBtn--facebook:hover,\r\n.loginBtn--facebook:focus {\r\n  background-color: #5B7BD5;\r\n  background-image: linear-gradient(#5B7BD5, #4864B1);\r\n}\r\n/* Google */\r\n.loginBtn--google {\r\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n  background: #DD4B39;\r\n}\r\n.loginBtn--google:before {\r\n  border-right: #BB3F30 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n}\r\n.loginBtn--google:hover,\r\n.loginBtn--google:focus {\r\n  background: #E74B37;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3VwZXJhci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG9DQUFvQzs7QUFFdEM7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsYUFBYTtFQUNiLCtCQUErQjtBQUNqQztBQUVBLE9BQU8sWUFBWSxFQUFFO0FBRXJCLFdBQVc7QUFDWDtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFEQUFxRDtBQUN2RDtBQUdBLGFBQWE7QUFDYjtFQUNFLHlCQUF5QjtFQUN6QixtREFBbUQ7RUFDbkQsK0VBQStFO0VBQy9FLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLHlHQUF5RztBQUMzRztBQUNBOztFQUVFLHlCQUF5QjtFQUN6QixtREFBbUQ7QUFDckQ7QUFHQSxXQUFXO0FBQ1g7RUFDRSxvREFBb0Q7RUFDcEQsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsdUdBQXVHO0FBQ3pHO0FBQ0E7O0VBRUUsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InJlY3VwZXJhci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbHMtY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5PbHZpZG8ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRyb2xzLWNvbnRhaW5lciAqIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uRnVsbENhcmR7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG59XHJcblxyXG4jZ3JpZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4YjczZmYsIzhhMzc4OCk7XHJcbiAgcGFkZGluZzogODBweCAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgLyogaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTsgKi9cclxufVxyXG5cclxuYm9keSB7IHBhZGRpbmc6IDJlbTsgfVxyXG5cclxuLyogU2hhcmVkICovXHJcbi5sb2dpbkJ0biB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogd2lkdGg6IDEzZW07ICAtIGFwcGx5IGZvciBmaXhlZCBzaXplICovXHJcbiAgbWFyZ2luOiAwLjJlbTtcclxuICBtYXJnaW46IDNweCAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDE1cHggMCA0NnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbiAgLyogZm9udC1zaXplOiAxNnB4OyAqL1xyXG4gIGNvbG9yOiByZ2IoMjUzLCAyNTMsIDI1Myk7XHJcbn1cclxuLmxvZ2luQnRuOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMzRweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmxvZ2luQnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5sb2dpbkJ0bjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDMycHggcmdiYSgxMTIsIDEzLCA5NiwgMC44NDIpO1xyXG59XHJcblxyXG5cclxuLyogRmFjZWJvb2sgKi9cclxuLmxvZ2luQnRuLS1mYWNlYm9vayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDNjlCQTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzRDNjlCQSwgIzNCNTVBMCk7XHJcbiAgLypmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgbmV1ZVwiLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsqL1xyXG4gIHRleHQtc2hhZG93OiAwIC0xcHggMCAjMzU0QzhDO1xyXG59XHJcbi5sb2dpbkJ0bi0tZmFjZWJvb2s6YmVmb3JlIHtcclxuICBib3JkZXItcmlnaHQ6ICMzNjRlOTIgMXB4IHNvbGlkO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9mYWNlYm9vay5wbmcnKSA2cHggNnB4IG5vLXJlcGVhdDtcclxufVxyXG4ubG9naW5CdG4tLWZhY2Vib29rOmhvdmVyLFxyXG4ubG9naW5CdG4tLWZhY2Vib29rOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3QkQ1O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNUI3QkQ1LCAjNDg2NEIxKTtcclxufVxyXG5cclxuXHJcbi8qIEdvb2dsZSAqL1xyXG4ubG9naW5CdG4tLWdvb2dsZSB7XHJcbiAgLypmb250LWZhbWlseTogXCJSb2JvdG9cIiwgUm9ib3RvLCBhcmlhbCwgc2Fucy1zZXJpZjsqL1xyXG4gIGJhY2tncm91bmQ6ICNERDRCMzk7XHJcbn1cclxuLmxvZ2luQnRuLS1nb29nbGU6YmVmb3JlIHtcclxuICBib3JkZXItcmlnaHQ6ICNCQjNGMzAgMXB4IHNvbGlkO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9nb29nbGUucG5nJykgNnB4IDZweCBuby1yZXBlYXQ7XHJcbn1cclxuLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsXHJcbi5sb2dpbkJ0bi0tZ29vZ2xlOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjRTc0QjM3O1xyXG59Il19 */";
      /***/
    },

    /***/
    "7vBP":
    /*!************************************************************************************************!*\
      !*** ./src/app/components/customElements/person-profile-card/person-profile-card.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: PersonProfileCardComponent */

    /***/
    function vBP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonProfileCardComponent", function () {
        return PersonProfileCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_person_profile_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./person-profile-card.component.html */
      "t1FH");
      /* harmony import */


      var _person_profile_card_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./person-profile-card.component.css */
      "GKsj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Services/my-auth.service */
      "Sm6f");
      /* harmony import */


      var src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/Services/follow.service */
      "dhyO");

      var PersonProfileCardComponent = /*#__PURE__*/function () {
        function PersonProfileCardComponent(MyAuth, followSrv) {
          _classCallCheck(this, PersonProfileCardComponent);

          this.MyAuth = MyAuth;
          this.followSrv = followSrv;
        }

        _createClass(PersonProfileCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.Who == 'Following') {
              this.UserToDisplay = this.Data.SecondUser;
            } else if (this.Who == 'Followers') {
              this.UserToDisplay = this.Data.FirstUser;
            }
          }
        }]);

        return PersonProfileCardComponent;
      }();

      PersonProfileCardComponent.ctorParameters = function () {
        return [{
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"]
        }, {
          type: src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"]
        }];
      };

      PersonProfileCardComponent.propDecorators = {
        Data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        Who: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PersonProfileCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'element-person-profile-card',
        template: _raw_loader_person_profile_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_person_profile_card_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"], src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"]])], PersonProfileCardComponent);
      /***/
    },

    /***/
    "8mqn":
    /*!************************************************************************!*\
      !*** ./src/app/components/home/right-column/right-column.component.ts ***!
      \************************************************************************/

    /*! exports provided: RightColumnComponent */

    /***/
    function mqn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RightColumnComponent", function () {
        return RightColumnComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_right_column_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./right-column.component.html */
      "HO7J");
      /* harmony import */


      var _right_column_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./right-column.component.css */
      "ZllK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/Services/my-auth.service */
      "Sm6f");
      /* harmony import */


      var _Dialogs_profile_pic_update_dialog_profile_pic_update_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../Dialogs/profile-pic-update-dialog/profile-pic-update-dialog.component */
      "naqG");

      var RightColumnComponent = /*#__PURE__*/function () {
        function RightColumnComponent(MyAuth, dialog) {
          _classCallCheck(this, RightColumnComponent);

          this.MyAuth = MyAuth;
          this.dialog = dialog;
        }

        _createClass(RightColumnComponent, [{
          key: "openProfilePicUpdateDialog",
          value: function openProfilePicUpdateDialog() {
            var dialogRef = this.dialog.open(_Dialogs_profile_pic_update_dialog_profile_pic_update_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ProfilePicUpdateDialogComponent"], {
              //width: '250px',
              data: {}
            });
            dialogRef.afterClosed().subscribe(function () {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RightColumnComponent;
      }();

      RightColumnComponent.ctorParameters = function () {
        return [{
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__["MyAuthService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      };

      RightColumnComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-right-column',
        template: _raw_loader_right_column_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_right_column_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__["MyAuthService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])], RightColumnComponent);
      /***/
    },

    /***/
    "9ryv":
    /*!******************************************************************!*\
      !*** ./src/app/components/auth/verificar/verificar.component.ts ***!
      \******************************************************************/

    /*! exports provided: VerificarComponent */

    /***/
    function ryv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerificarComponent", function () {
        return VerificarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_verificar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./verificar.component.html */
      "1YZI");
      /* harmony import */


      var _verificar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./verificar.component.css */
      "loFn");
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

      var VerificarComponent = /*#__PURE__*/function () {
        function VerificarComponent(fb, myAuth) {
          _classCallCheck(this, VerificarComponent);

          this.fb = fb;
          this.myAuth = myAuth;
          this.NetworkErrorCount = 0;
          this.EmairrorMessalEge = '';
          this.Loading = false;
        }

        _createClass(VerificarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.FormVerificar = this.fb.group({
              Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
            });
          }
        }, {
          key: "OnSubmit",
          value: function OnSubmit() {
            this.Loading = true;
            this.myAuth.NavTo('/Auth/Login');
          }
        }]);

        return VerificarComponent;
      }();

      VerificarComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__["MyAuthService"]
        }];
      };

      VerificarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verificar',
        template: _raw_loader_verificar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verificar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__["MyAuthService"]])], VerificarComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sidenav-container {\r\n   height: 100%;\r\n }\r\n \r\n .sidenav {\r\n   width: 200px;\r\n }\r\n \r\n .sidenav .mat-toolbar {\r\n   background: inherit;\r\n }\r\n \r\n .mat-toolbar.mat-primary {\r\n   position: sticky;\r\n   top: 0;\r\n   z-index: 2;\r\n   background-color:#8B73FF ;\r\n }\r\n \r\n .fill-remaining-space {\r\n    /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\r\n    flex: 1 1 auto;\r\n  }\r\n \r\n .toolbar {\r\n  margin-bottom: 0px;\r\n  height: 56px;\r\n  font-size: 50px;\r\n}\r\n \r\n .btn-profile-menu {\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 50%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n \r\n .user-name {\r\n  margin-left: 5px;\r\n}\r\n \r\n /* .logo-image {\r\n  width: 300px;\r\n  border-radius: 0;\r\n  object-fit: cover;\r\n  position: fixed;\r\n  margin-top: 35px;\r\n} */\r\n \r\n ::ng-deep .mat-menu-content{\r\n  background-color:#8B73FF;\r\n  color: #efefef;\r\n  text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csWUFBWTtDQUNkOztDQUVBO0dBQ0UsWUFBWTtDQUNkOztDQUVBO0dBQ0UsbUJBQW1CO0NBQ3JCOztDQUVBO0dBQ0UsZ0JBQWdCO0dBQ2hCLE1BQU07R0FDTixVQUFVO0dBQ1YseUJBQXlCO0NBQzNCOztDQUVEO0lBQ0k7cURBQ2lEO0lBQ2pELGNBQWM7RUFDaEI7O0NBRUY7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0NBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCOztDQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztDQUVBOzs7Ozs7R0FNRzs7Q0FFSDtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gfVxyXG4gXHJcbiAuc2lkZW5hdiB7XHJcbiAgIHdpZHRoOiAyMDBweDtcclxuIH1cclxuIFxyXG4gLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuIH1cclxuIFxyXG4gLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgdG9wOiAwO1xyXG4gICB6LWluZGV4OiAyO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiM4QjczRkYgO1xyXG4gfVxyXG5cclxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gXHJcbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxuLnRvb2xiYXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG4uYnRuLXByb2ZpbGUtbWVudSB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4udXNlci1uYW1lIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4vKiAubG9nby1pbWFnZSB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbn0gKi9cclxuXHJcbjo6bmctZGVlcCAubWF0LW1lbnUtY29udGVudHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM4QjczRkY7XHJcbiAgY29sb3I6ICNlZmVmZWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
      /***/
    },

    /***/
    "AtoI":
    /*!********************************************************************************!*\
      !*** ./src/app/components/customElements/mini-navbar/mini-navbar.component.ts ***!
      \********************************************************************************/

    /*! exports provided: MiniNavbarComponent */

    /***/
    function AtoI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiniNavbarComponent", function () {
        return MiniNavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mini_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mini-navbar.component.html */
      "6hCR");
      /* harmony import */


      var _mini_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mini-navbar.component.css */
      "Ki0P");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Services/my-auth.service */
      "Sm6f");

      var MiniNavbarComponent = /*#__PURE__*/function () {
        function MiniNavbarComponent(MyAuth) {
          _classCallCheck(this, MiniNavbarComponent);

          this.MyAuth = MyAuth;
        }

        _createClass(MiniNavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MiniNavbarComponent;
      }();

      MiniNavbarComponent.ctorParameters = function () {
        return [{
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"]
        }];
      };

      MiniNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'element-mini-navbar',
        template: _raw_loader_mini_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mini_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"]])], MiniNavbarComponent);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyDpgslwSHEi13pn5VVF3o-T8iBHcSTcCm8",
          authDomain: "beautyway-e27eb.firebaseapp.com",
          projectId: "beautyway-e27eb",
          storageBucket: "beautyway-e27eb.appspot.com",
          messagingSenderId: "656870158086",
          appId: "1:656870158086:web:322f90d26445ecdcce3887",
          measurementId: "G-R69GDHNJTB"
        }
      };
      /***/
    },

    /***/
    "B+sD":
    /*!**************************************************!*\
      !*** ./src/app/Services/notification.service.ts ***!
      \**************************************************/

    /*! exports provided: NotificationService */

    /***/
    function BSD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
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


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService(snackBar) {
          _classCallCheck(this, NotificationService);

          this.snackBar = snackBar;
        }

        _createClass(NotificationService, [{
          key: "openSnackBar",
          value: function openSnackBar(message, action, _afterDismissed, _onAction, duration) {
            var snackBar = this.snackBar.open(message, action, {
              duration: duration | 2000
            });
            snackBar.afterDismissed().subscribe(function (res) {
              if (_afterDismissed != null) _afterDismissed();
            }, function (err) {
              console.log(err);
            });
            snackBar.onAction().subscribe(function (res) {
              if (_onAction != null) _onAction();
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ctorParameters = function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }];
      };

      NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])], NotificationService);
      /***/
    },

    /***/
    "DhUw":
    /*!**************************************************************************!*\
      !*** ./src/app/components/home/middle-column/middle-column.component.ts ***!
      \**************************************************************************/

    /*! exports provided: MiddleColumnComponent */

    /***/
    function DhUw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiddleColumnComponent", function () {
        return MiddleColumnComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_middle_column_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./middle-column.component.html */
      "cve6");
      /* harmony import */


      var _middle_column_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./middle-column.component.css */
      "pS+A");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Services_image_optimization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Services/image-optimization.service */
      "DpT1");
      /* harmony import */


      var ng2_image_compress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-image-compress */
      "PT9p");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/Services/my-auth.service */
      "Sm6f");
      /* harmony import */


      var src_app_Services_poster_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/Services/poster.service */
      "ZLc+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var MiddleColumnComponent = /*#__PURE__*/function () {
        function MiddleColumnComponent(MyAuth, poster, storage, imageOptSrvc) {
          _classCallCheck(this, MiddleColumnComponent);

          this.MyAuth = MyAuth;
          this.poster = poster;
          this.storage = storage;
          this.imageOptSrvc = imageOptSrvc;
          this.InputCaption = "";
          this.Compressing = false;
          this.Uploading = false;
          this.PostsAreLoading = true;
          this.HasFile = false;
          this.showImage = false;
          this.DisablePostBtn = true;
          this.NewPostsArrived = true;
          this.moment = moment__WEBPACK_IMPORTED_MODULE_7__;
          this.ActivePostPanel = 0;
          this.DateTimeFormat = {
            sameDay: "[Today] - h:mm a",
            nextDay: "[Tomorrow] - h:mm a",
            nextWeek: "dddd - h:mm a",
            lastDay: "[Yesterday] - h:mm a",
            lastWeek: "[Last] dddd - h:mm a",
            sameElse: "ddd, M/D/YY - h:mm a"
          };
        }

        _createClass(MiddleColumnComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.PostsToDisplay$ = this.poster.GetAllPosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["share"])());
          }
        }, {
          key: "TrackByPostId",
          value: function TrackByPostId(Index, Post) {
            return Post.Id;
          }
        }, {
          key: "OnChange",
          value: function OnChange(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var MainImgSizes, ObservableImage, resImage, UploadableBlob, ThumbImgSizes, ObsThumbImage, ThumbImage, UploadableThumbBlob;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.Compressing = true;
                      event.target.files[0] ? this.HasFile = true : this.HasFile = false;
                      this.FileName = event.target.files[0].name;
                      _context.next = 5;
                      return this.imageOptSrvc.AdjustImageHeightWidth(event.target.files[0], "Post").toPromise();

                    case 5:
                      MainImgSizes = _context.sent;
                      _context.next = 8;
                      return ng2_image_compress__WEBPACK_IMPORTED_MODULE_5__["ImageCompressService"].filesToCompressedImageSourceEx(event.target.files, MainImgSizes);

                    case 8:
                      ObservableImage = _context.sent;
                      _context.next = 11;
                      return ObservableImage.toPromise();

                    case 11:
                      resImage = _context.sent;
                      this.OptimizedImage = resImage;
                      this.showImage = true;
                      _context.next = 16;
                      return this.PreviewLoaded(this.OptimizedImage.compressedImage.imageDataUrl).toPromise();

                    case 16:
                      this.ImageCords = _context.sent;
                      _context.next = 19;
                      return this.imageOptSrvc.dataURItoBlob(resImage.compressedImage.imageDataUrl);

                    case 19:
                      UploadableBlob = _context.sent;
                      this.UploadableImage = UploadableBlob;
                      _context.next = 23;
                      return this.imageOptSrvc.AdjustImageHeightWidth(event.target.files[0], "PostThumb").toPromise();

                    case 23:
                      ThumbImgSizes = _context.sent;
                      _context.next = 26;
                      return ng2_image_compress__WEBPACK_IMPORTED_MODULE_5__["ImageCompressService"].filesToCompressedImageSourceEx(event.target.files, ThumbImgSizes);

                    case 26:
                      ObsThumbImage = _context.sent;
                      _context.next = 29;
                      return ObsThumbImage.toPromise();

                    case 29:
                      ThumbImage = _context.sent;
                      _context.next = 32;
                      return this.imageOptSrvc.dataURItoBlob(ThumbImage.compressedImage.imageDataUrl);

                    case 32:
                      UploadableThumbBlob = _context.sent;
                      this.UploadableThumbImage = UploadableThumbBlob;
                      this.CompressingCompleted = true;
                      this.DisablePostBtn = false;

                    case 36:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "UploadThePost",
          value: function UploadThePost() {
            var _this4 = this;

            this.Uploading = true;
            this.DisablePostBtn = true;
            var Cap = this.InputCaption;
            var ImagePath = this.MyAuth.LoggedUser.Id + "/PostedImages/" + this.FileName + "-" + moment__WEBPACK_IMPORTED_MODULE_7__().format("D-M-YYYY");
            var ImageThumbPath = this.MyAuth.LoggedUser.Id + "/PostedImages/" + this.FileName + "-" + moment__WEBPACK_IMPORTED_MODULE_7__().format("D-M-YYYY") + ".Thumb";
            var ImageRef = this.storage.ref(ImagePath);
            var ImageThumbRef = this.storage.ref(ImageThumbPath);
            var ImageUploadTask = this.storage.upload(ImagePath, this.UploadableImage, {
              customMetadata: {
                Caption: Cap
              }
            });
            var ThumbImageUploadTask = this.storage.upload(ImageThumbPath, this.UploadableThumbImage, {
              customMetadata: {
                PostImageThumbFor: ImagePath
              }
            });
            this.uploadPercent = ImageUploadTask.percentageChanges();
            ImageUploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              console.log("Finalize");
              ImageRef.getDownloadURL().subscribe(function (ImageURL) {
                ImageThumbRef.getDownloadURL().subscribe(function (ThumbURL) {
                  // var newPost: INewPost = {
                  //   Owner: CurrentUser,
                  //   Caption: Cap,
                  //   ImageURL: ImageURL,
                  //   ThumbURL: ThumbURL,
                  //   ImageMeta: {
                  //     Height: this.ImageCords.Height,
                  //     Width: this.ImageCords.Width,
                  //   },
                  // };
                  var unPost = {
                    Owner: _this4.MyAuth.LoggedUser,
                    OwnerId: _this4.MyAuth.LoggedUser.Id,
                    HeartsCount: 0,
                    CommentsCount: 0,
                    IsHeartedByUser: false,
                    PostedOn: new Date().getUTCMilliseconds(),
                    Caption: Cap,
                    ImageURL: ImageURL,
                    ThumbURL: ThumbURL,
                    ImageMeta: {
                      Height: _this4.ImageCords.Height,
                      Width: _this4.ImageCords.Width
                    }
                  };

                  _this4.poster.AddAPost(unPost).then(function (res) {
                    // if (res.Code == 200) {
                    if (res != null) {
                      _this4.MyAuth.Notify.openSnackBar(res.Message, "");

                      _this4.DisablePostBtn = false;

                      _this4.clearUploadItems();
                    } else {
                      _this4.MyAuth.Notify.openSnackBar("Something went wrong, please try later", "");

                      _this4.clearUploadItems();
                    }
                  }, function (err) {
                    console.log(err);

                    _this4.MyAuth.Notify.openSnackBar("Something went wrong, please try later", "");

                    _this4.clearUploadItems();
                  });
                });
              });
            })).subscribe();
          }
        }, {
          key: "PreviewLoaded",
          value: function PreviewLoaded(image) {
            var img = new Image();
            img.src = image;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(img, "load").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (event) {
              var ret = {
                Height: event.target.height,
                Width: event.target.width
              };
              return ret;
            }));
          }
        }, {
          key: "clearUploadItems",
          value: function clearUploadItems() {
            this.Uploading = false;
            this.showImage = false;
            this.InputCaption = "";
            this.FileName = null;
            this.HasFile = false;
          }
        }]);

        return MiddleColumnComponent;
      }();

      MiddleColumnComponent.ctorParameters = function () {
        return [{
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_9__["MyAuthService"]
        }, {
          type: src_app_Services_poster_service__WEBPACK_IMPORTED_MODULE_10__["PosterService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]
        }, {
          type: src_app_Services_image_optimization_service__WEBPACK_IMPORTED_MODULE_4__["ImageOptimizationService"]
        }];
      };

      MiddleColumnComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-middle-column",
        template: _raw_loader_middle_column_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_middle_column_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_9__["MyAuthService"], src_app_Services_poster_service__WEBPACK_IMPORTED_MODULE_10__["PosterService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"], src_app_Services_image_optimization_service__WEBPACK_IMPORTED_MODULE_4__["ImageOptimizationService"]])], MiddleColumnComponent);
      /***/
    },

    /***/
    "DpT1":
    /*!********************************************************!*\
      !*** ./src/app/Services/image-optimization.service.ts ***!
      \********************************************************/

    /*! exports provided: ImageOptimizationService */

    /***/
    function DpT1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageOptimizationService", function () {
        return ImageOptimizationService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ImageOptimizationService = /*#__PURE__*/function () {
        function ImageOptimizationService() {
          _classCallCheck(this, ImageOptimizationService);
        }

        _createClass(ImageOptimizationService, [{
          key: "AdjustImageHeightWidth",
          value: function AdjustImageHeightWidth(ImageFile, CompressFor) {
            var _this5 = this;

            var width;
            var height; //if (CompressFor == 'ProfilePic') {

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var fr = new FileReader();

              fr.onload = function () {
                var img = new Image();

                img.onload = function () {
                  height = _this5.AdjustHeight(img.height, CompressFor);
                  width = _this5.AdjustWidth(img.width, CompressFor);
                  _this5.resizeOptions = {
                    Resize_Max_Height: height,
                    Resize_Max_Width: width,
                    Resize_Quality: 80,
                    Resize_Type: 'jpg'
                  };
                  observer.next(_this5.resizeOptions);
                  observer.complete();
                };

                img.src = fr.result; // This is the data URL 
              };

              fr.readAsDataURL(ImageFile);
            });
          }
        }, {
          key: "AdjustHeight",
          value: function AdjustHeight(h, CompressFor) {
            if (CompressFor == 'ProfilePic' || CompressFor == 'Post') {
              if (h >= 1000) {
                if (h >= 2000 && h <= 2999) return h / 3;else {
                  if (h >= 3000) return h / 4;
                }
                return h / 2;
              } else {
                return h / 100 * 75;
              }
            } else if (CompressFor == 'ProfilePicThumb') {
              if (h >= 1000) {
                if (h >= 2000 && h <= 2999) return h / 6;else {
                  if (h >= 3000) return h / 8;
                }
                return h / 4;
              } else {
                return h / 100 * 35;
              }
            }
          }
        }, {
          key: "AdjustWidth",
          value: function AdjustWidth(w, CompressFor) {
            if (CompressFor == 'ProfilePic' || CompressFor == 'Post') {
              if (w >= 1000) {
                if (w >= 2000 && w <= 2999) return w / 3;else {
                  if (w >= 3000) return w / 4;
                }
                return w / 2;
              } else {
                return w / 100 * 75;
              }
            } else if (CompressFor == 'ProfilePicThumb') {
              if (w >= 1000) {
                if (w >= 2000 && w <= 2999) return w / 6;else {
                  if (w >= 3000) return w / 8;
                }
                return w / 4;
              } else {
                return w / 100 * 35;
              }
            }
          }
        }, {
          key: "dataURItoBlob",
          value: function dataURItoBlob(dataURI) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var byteString, mimeString, ia, i;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // convert base64/URLEncoded data component to raw binary data held in a string
                      if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]); // separate out the mime component

                      mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to a typed array

                      ia = new Uint8Array(byteString.length);

                      for (i = 0; i < byteString.length; i++) {
                        ia[i] = byteString.charCodeAt(i);
                      }

                      return _context2.abrupt("return", new Blob([ia], {
                        type: mimeString
                      }));

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }]);

        return ImageOptimizationService;
      }();

      ImageOptimizationService.ctorParameters = function () {
        return [];
      };

      ImageOptimizationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ImageOptimizationService);
      /***/
    },

    /***/
    "GKsj":
    /*!*************************************************************************************************!*\
      !*** ./src/app/components/customElements/person-profile-card/person-profile-card.component.css ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GKsj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@media (min-width: 376px){\r\n.extra-small {\r\n    width: 200px;\r\n}\r\n}\r\n\r\n@media (min-width: 576px){\r\n.extra-small {\r\n   width: auto;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbi1wcm9maWxlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7R0FDRyxXQUFXO0VBQ1o7QUFDRiIsImZpbGUiOiJwZXJzb24tcHJvZmlsZS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMzc2cHgpe1xyXG4uZXh0cmEtc21hbGwge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XHJcbi5leHRyYS1zbWFsbCB7XHJcbiAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "HO7J":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/right-column/right-column.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HO7J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<mat-card style=\" background: #f4f2f5; color: black\" >\r\n  <mat-card-header>\r\n    <img mat-card-avatar src=\"{{MyAuth.LoggedUser?.PhotoURL}}\">\r\n    <mat-card-title (click)=\"MyAuth.NavTo('/User/'+MyAuth.LoggedUser?.Id)\" class=\"MousePointer\">\r\n      {{MyAuth.LoggedUser?.DisplayName}}</mat-card-title>\r\n    <mat-card-subtitle>{{MyAuth.LoggedUser?.About}}</mat-card-subtitle>\r\n    <button mat-icon-button class=\"btn-menu\" [matMenuTriggerFor]=\"menu\" aria-label=\"Open basic menu\">\r\n      <i class=\"fal fa-ellipsis-v fa-lg\"></i>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"openProfilePicUpdateDialog()\">Actualizar foto de perfil</button>\r\n      <button mat-menu-item>Configuracion</button>\r\n      <button mat-menu-item (click)=\"MyAuth.Logout();\">Desconectar</button>\r\n    </mat-menu>\r\n  </mat-card-header>\r\n</mat-card>-->\r\n\r\n<mat-card style=\"margin-top: 0px; background: #efe7ff;; color: #5c4ca2\">\r\n  <mat-card-header>\r\n    <mat-card-title (click)=\"MyAuth.NavTo('/Messages')\" class=\"MousePointer\">Mensajes</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content class=\"chat-heads-container\">\r\n    <app-messages-dialog></app-messages-dialog>\r\n  </mat-card-content>    \r\n  \r\n</mat-card>\r\n\r\n<!-- <mat-card>\r\n  <app-notifications-dialog></app-notifications-dialog>\r\n</mat-card> -->";
      /***/
    },

    /***/
    "JyHi":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/Dialogs/messages-dialog/chat-head/chat-head.component.css ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function JyHi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LWhlYWQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "Ki0P":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/customElements/mini-navbar/mini-navbar.component.css ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function Ki0P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".active {\r\n    border: 1px solid;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmktbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoibWluaS1uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "KuVT":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/customElements/post-card/post-card.component.css ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function KuVT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-menu {\r\n    margin-left: auto;\r\n}\r\n.card-actions {\r\n    display: flex; \r\n    justify-content: space-around;\r\n}\r\n.color-orangered {\r\n    color: blue;\r\n}\r\n.font-24px {\r\n    font-size: 24px;\r\n}\r\n.imgviewable {\r\n    padding-top: 10px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    opacity: 0;\r\n    transition-duration: 300ms;\r\n}\r\n.Commenter-Name {\r\n    color:#4169e1;\r\n}\r\n.Comment-Date {\r\n    color:#5f9ea0;\r\n    font-size: 10px;\r\n}\r\n.Comment-Message {\r\n    color: rgba(0, 0, 0, 0.54);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDViwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoicG9zdC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1tZW51IHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5jYXJkLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4uY29sb3Itb3JhbmdlcmVkIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59XHJcbi5mb250LTI0cHgge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5pbWd2aWV3YWJsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG59XHJcbi5Db21tZW50ZXItTmFtZSB7XHJcbiAgICBjb2xvcjojNDE2OWUxO1xyXG59XHJcbi5Db21tZW50LURhdGUge1xyXG4gICAgY29sb3I6IzVmOWVhMDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uQ29tbWVudC1NZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG59Il19 */";
      /***/
    },

    /***/
    "LYCh":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Dialogs/messages-dialog/messages-dialog.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LYCh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"UserIdListToDisplay$ | async as UserIdList; else UserIdListLoading\">\r\n    <mat-list dense>\r\n        <ng-container *ngFor=\"let UserId of UserIdList; let i=index\">\r\n            <app-chat-head [UserId]=\"UserId\"></app-chat-head>\r\n        </ng-container>\r\n    </mat-list>\r\n</ng-container>\r\n<ng-template #UserIdListLoading>\r\n    <element-my-loader></element-my-loader>\r\n</ng-template>";
      /***/
    },

    /***/
    "NrK8":
    /*!********************************************!*\
      !*** ./src/app/Modules/Material.module.ts ***!
      \********************************************/

    /*! exports provided: MaterialModule2 */

    /***/
    function NrK8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule2", function () {
        return MaterialModule2;
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "1yaQ"); // import { MatMomentDateModule } from '@angular/material-moment-adapter';
      // import { MatFormFieldModule, MatInputModule, MatSnackBarModule, MatSidenavModule, MatCardModule, MatButtonModule, MatDialogModule, MatDatepickerModule, MatToolbarModule, MatMenuModule, MatIconModule, MatRadioModule, MatListModule, MatCommonModule, MatProgressBarModule, MatProgressSpinnerModule, MatGridListModule, MatButtonToggleModule, MatExpansionModule, MatTabsModule, MatSelectModule } from '@angular/material';


      var MaterialModule2 = /*#__PURE__*/_createClass(function MaterialModule2() {
        _classCallCheck(this, MaterialModule2);
      });

      MaterialModule2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], // MatSidenavModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_22__["MatMomentDateModule"]],
        declarations: []
      })], MaterialModule2);
      /***/
    },

    /***/
    "OApB":
    /*!********************************************************************************************!*\
      !*** ./src/app/components/Dialogs/notifications-dialog/notifications-dialog.component.css ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function OApB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "OgY9":
    /*!**********************************************************************!*\
      !*** ./src/app/components/home/left-column/left-column.component.ts ***!
      \**********************************************************************/

    /*! exports provided: LeftColumnComponent */

    /***/
    function OgY9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeftColumnComponent", function () {
        return LeftColumnComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_left_column_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./left-column.component.html */
      "pYGd");
      /* harmony import */


      var _left_column_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./left-column.component.css */
      "tXAP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Services/my-auth.service */
      "Sm6f");

      var LeftColumnComponent = /*#__PURE__*/function () {
        function LeftColumnComponent(MyAuth) {
          _classCallCheck(this, LeftColumnComponent);

          this.MyAuth = MyAuth;
        }

        _createClass(LeftColumnComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LeftColumnComponent;
      }();

      LeftColumnComponent.ctorParameters = function () {
        return [{
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"]
        }];
      };

      LeftColumnComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-left-column',
        template: _raw_loader_left_column_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_left_column_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"]])], LeftColumnComponent);
      /***/
    },

    /***/
    "Ptfk":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customElements/post-card/post-card.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ptfk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card style=\"margin-bottom: 16px; background: #efe7ff; color: #5c4ca2;\">\r\n  <mat-card-header *ngIf=\"UserLoaded\"  >\r\n    <img mat-card-avatar src=\"{{Owner.PhotoURL}}\" [routerLink]=\"[ '/User', Owner.Id ]\" class=\"MousePointer\" /> -->\r\n     <mat-card-title [routerLink]=\"[ '/User', Owner.Id ]\" class=\"MousePointer\">\r\n      {{Owner.NombreComercial}}</mat-card-title>\r\n    <mat-card-subtitle style=\"color: #463a77\">{{moment(PostData.PostedOn).calendar(null, DateTimeFormat)}}</mat-card-subtitle>\r\n    <button class=\"card-menu\" align=\"end\" mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Open basic menu\">\r\n      <i class=\"fal fa-ellipsis-v fa-lg\"></i>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <ng-container *ngIf=\"Owner.Id != MyAuth.LoggedUser.Id\">\r\n        <ng-container *ngIf=\"CheckFollowStatus$ | async as FollowStatus; else FollowStatusLoading\">\r\n          <button *ngIf=\"FollowStatus == 'No'\" mat-menu-item (click)=\"FollowOwner()\">\r\n            <i class=\"\"></i>Seguir\r\n          </button>\r\n        </ng-container>\r\n        <ng-template #FollowStatusLoading>\r\n          <span mat-menu-item><i class=\"fal fa-spinner fa-spin\"></i></span>\r\n        </ng-template>\r\n      </ng-container>\r\n      <button mat-menu-item [routerLink]=\"[ '/User', Owner.Id ]\">\r\n        <i class=\"fal fa-user\"></i>Ver perfil\r\n      </button>\r\n      <button mat-menu-item *ngIf=\"Owner.Id == MyAuth.LoggedUser.Id\" (click)=\"DeletePost()\">\r\n        <i class=\"fal fa-trash-alt\"></i> Eliminar \r\n      </button>\r\n    </mat-menu>\r\n  </mat-card-header>\r\n  <div *ngIf=\"!ImageLoaded\" class=\"div-center\" style=\"height: 60vh\">\r\n    <element-my-loader></element-my-loader>\r\n  </div>\r\n\r\n  <img mat-card-image class=\"imgviewable\" [ngStyle]=\"{'opacity': ImageOpacity}\"\r\n    (load)=\"ImgLoaded(Image,PostData.ImageURL);\" #Image src=\"{{PostData.ThumbURL}}\">\r\n    \r\n  <mat-card-content *ngIf=\"PostData.Caption\">\r\n    {{PostData.Caption}}\r\n  </mat-card-content>\r\n\r\n  <mat-card-actions class=\"card-actions\"  >\r\n    <mat-expansion-panel [disabled]=\"true\" class=\"w-100\" [expanded]=\"ShowComments\" hideToggle>\r\n      <mat-expansion-panel-header class=\"row\" style=\"background: #efe7ff;;\">\r\n        <div class=\"col div-center\">\r\n          <button mat-icon-button (click)=\"AddRemoveHeart()\">\r\n            <ng-container *ngIf=\"IsHeartedByUser$ | async as IsHeartedByUser; else IsHeartLoading\">\r\n              <span class=\"font-24px color-orangered\" style=\"color:#8b73ff\">\r\n                <i [ngClass]=\"{'fas': IsHeartedByUser==1, 'fal': IsHeartedByUser==2}\" class=\"fal fa-heart\"></i>\r\n                <span class=\"fa-xs\"> {{PostData.HeartsCount}}</span>\r\n              </span>\r\n            </ng-container>\r\n            <ng-template #IsHeartLoading>\r\n              <span><i class=\"fal fa-spinner fa-spin\" ></i></span>\r\n            </ng-template>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col div-center\">\r\n          <button mat-icon-button (click)=\"PanelToggle()\">\r\n            <span class=\"font-24px color-orangered\" style=\"color:#8b73ff\">\r\n              <i class=\"fal fa-comment-alt\"></i>\r\n              <span class=\"fa-xs\"> {{PostData.CommentsCount}}</span>\r\n            </span>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col div-center\">\r\n          <button mat-icon-button>\r\n            <span class=\"font-24px color-orangered\" style=\"color:#8b73ff\">\r\n              <i class=\"fal fa-share-alt\"></i>\r\n            </span>\r\n          </button>\r\n        </div>\r\n      </mat-expansion-panel-header>\r\n\r\n      <!-- Comments section -->\r\n      <ng-container *ngIf=\"Comments$ | async as Comments; else CommentsLoading\">\r\n        <mat-list dense>\r\n          <div>\r\n            <mat-list-item *ngFor=\"let comment of Comments; trackBy:TrackByCommentId\">\r\n              <img mat-list-avatar [src]=\"comment.Commenter.PhotoURL\">\r\n              <h4 mat-line (click)=\"MyAuth.NavTo('User/'+comment.Commenter.Id)\" class=\"Commenter-Name MousePointer\">\r\n                {{comment.Commenter.DisplayName}}</h4>\r\n              <p class=\"Comment-Date\"> {{moment(comment.CommentedOn).calendar(null, DateTimeFormat)}} </p>\r\n              <p mat-line class=\"Comment-Message\">{{comment.CommentMsg}} </p>\r\n            </mat-list-item>\r\n          </div>\r\n        </mat-list>\r\n      </ng-container>\r\n      <ng-template #CommentsLoading>\r\n        <element-my-loader></element-my-loader>\r\n      </ng-template>\r\n\r\n      <mat-action-row style=\"justify-content: space-between;\">\r\n        <mat-form-field style=\"width:95%;\">\r\n          <input matInput [(ngModel)]=\"CommentText\" (keyup.enter)=\"PostAComment()\"\r\n            placeholder=\"¿Qué piensas acerca de esto?\" autocomplete=\"off\">\r\n          <button matSuffix mat-icon-button style=\"align-self: center;\">\r\n            <mat-icon matSuffix style=\"cursor: pointer;\" (click)=\"PostAComment()\">\r\n              <span *ngIf=\"!CommentUploading\"><i class=\"fal fa-paper-plane fa-lg\"></i></span>\r\n              <span *ngIf=\"CommentUploading\"><i class=\"fal fa-spinner fa-spin\"></i></span>\r\n            </mat-icon>\r\n          </button>\r\n        </mat-form-field>\r\n      </mat-action-row>\r\n    </mat-expansion-panel>\r\n  </mat-card-actions>\r\n</mat-card>";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sm6f":
    /*!*********************************************!*\
      !*** ./src/app/Services/my-auth.service.ts ***!
      \*********************************************/

    /*! exports provided: MyAuthService */

    /***/
    function Sm6f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyAuthService", function () {
        return MyAuthService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./notification.service */
      "B+sD");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/functions */
      "RgrY");

      var MyAuthService = /*#__PURE__*/function () {
        function MyAuthService(afAuth, afStore, afFunctions, breakpointObserver, router, Notify, Dialogs) {
          var _this6 = this;

          _classCallCheck(this, MyAuthService);

          this.afAuth = afAuth;
          this.afStore = afStore;
          this.afFunctions = afFunctions;
          this.breakpointObserver = breakpointObserver;
          this.router = router;
          this.Notify = Notify;
          this.Dialogs = Dialogs;
          this.AppTitle = 'BeautyWay';
          this.ViewTitle = '';
          this.DefaultUserPicURL = 'https://firebasestorage.googleapis.com/v0/b/socially.appspot.com/o/Default%20Profile%20Picture%2FDefault%20Profile%20Picture.jpeg?alt=media&token=8dd77808-082e-4848-aede-a628e16fd80b';
          this.LoggedUserLoading = true;
          this.IsUserLoggedIn = false;
          this.moment = moment__WEBPACK_IMPORTED_MODULE_7__;
          this.LoggedUserLoading = true;
          afAuth.onAuthStateChanged(function (user) {
            // console.log('onAuthStateChanged: ', user);
            if (user) {
              // if(!user.emailVerified){
              //   //debugger;
              //   //this.NavTo('Auth/Verificar'); //Esto carga al iniciar el formulario logi, deberia ser solo cuando clickea en aceptar
              //   user.sendEmailVerification();//Aveces anda aveces no, que esta pasando?
              // }
              // else{
              _this6.LoggedUserLoading = true; // this.BasicUserInfo = user;

              _this6.IsUserLoggedIn = true;

              _this6.GetAUserInfoFromStore(user.uid).subscribe(function (UserInfoFromStore) {
                _this6.LoggedUser = UserInfoFromStore;
                _this6.LoggedUserLoading = false;

                _this6.Notify.openSnackBar("Bienvenido, ".concat(_this6.LoggedUser.DisplayName), '');

                if (UserInfoFromStore.DisplayName == null || UserInfoFromStore.DisplayName === '') {
                  _this6.NavTo('Auth/AdditionInfo');
                } else {
                  _this6.NavTo('Home');
                }
              }); // }

            } else {
              // signed out
              _this6.LoggedUserLoading = false;
              _this6.IsUserLoggedIn = false;
              _this6.LoggedUser = null;

              _this6.Notify.openSnackBar('Por favor ingrese a sistema con su correo y contraseña.', ':)', function () {
                _this6.NavTo('/Auth/Login');
              });
            }
          }, function (err) {
            console.error(err);
          });
        }

        _createClass(MyAuthService, [{
          key: "Register",
          value: function Register(Email, Password) {
            return this.afAuth.createUserWithEmailAndPassword(Email, Password);
          }
        }, {
          key: "SendEmail",
          value: function SendEmail(Email) {
            return this.afAuth.sendPasswordResetEmail(Email);
          }
        }, {
          key: "GetAllUsersFromStore",
          value: function GetAllUsersFromStore() {
            return this.afStore.collection('Users/').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
          }
        }, {
          key: "GetAllProfesionalsFromStore",
          value: function GetAllProfesionalsFromStore() {
            return this.afStore.collection('Users/', function (ref) {
              return ref.where('TipoDeUsuario', '==', 'profesional');
            }).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
          }
        }, {
          key: "GetAUserInfoFromStore",
          value: function GetAUserInfoFromStore(UserId) {
            return this.afStore.doc('Users/' + UserId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
          }
        }, {
          key: "UpdateUserInfo",
          value: function UpdateUserInfo(Value) {
            // if (!Value.Email)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afStore.doc("Users/".concat(this.LoggedUser.Id)).update(Value));
          }
        }, {
          key: "UpdateProfilePic",
          value: function UpdateProfilePic(PhotoURL) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afStore.doc("Users/".concat(this.LoggedUser.Id)).update({
              "PhotoURL": PhotoURL
            }));
          }
        }, {
          key: "Logout",
          value: function Logout() {
            var _this7 = this;

            this.afAuth.signOut().then(function () {
              _this7.LoggedUserLoading = true;
              _this7.IsUserLoggedIn = false; // this.Notify.openSnackBar("You've logged out successfully", "Login again", () => {
              //   this.NavTo("/Auth/Login");
              // })
            })["catch"](function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "NavTo",
          value: function NavTo(url) {
            console.log('navigating to: ', url);
            this.router.navigate([url]);
          }
        }]);

        return MyAuthService;
      }();

      MyAuthService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
        }, {
          type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_11__["AngularFireFunctions"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
        }];
      };

      MyAuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _angular_fire_functions__WEBPACK_IMPORTED_MODULE_11__["AngularFireFunctions"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]])], MyAuthService);
      /***/
    },

    /***/
    "SsqU":
    /*!****************************************************************************!*\
      !*** ./src/app/components/customElements/my-loader/my-loader.component.ts ***!
      \****************************************************************************/

    /*! exports provided: MyLoaderComponent */

    /***/
    function SsqU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyLoaderComponent", function () {
        return MyLoaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_my_loader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./my-loader.component.html */
      "3kr4");
      /* harmony import */


      var _my_loader_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-loader.component.css */
      "yWh8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MyLoaderComponent = /*#__PURE__*/function () {
        function MyLoaderComponent() {
          _classCallCheck(this, MyLoaderComponent);
        }

        _createClass(MyLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MyLoaderComponent;
      }();

      MyLoaderComponent.ctorParameters = function () {
        return [];
      };

      MyLoaderComponent.propDecorators = {
        Classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      MyLoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'element-my-loader',
        template: _raw_loader_my_loader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_loader_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MyLoaderComponent);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Services/my-auth.service */
      "Sm6f");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _components_Dialogs_profile_pic_update_dialog_profile_pic_update_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/Dialogs/profile-pic-update-dialog/profile-pic-update-dialog.component */
      "naqG");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(MyAuth, dialog) {
          _classCallCheck(this, AppComponent);

          this.MyAuth = MyAuth;
          this.dialog = dialog;
          this.UserInfoLoading = true;
          this.isHandset$ = this.MyAuth.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) {
            return result.matches;
          }));
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.MyAuth.afAuth.authState.subscribe(function (authUser) {
              if (authUser) {
                if (authUser.providerData[0].providerId != 'password') _this8.UpdateFirestoreUserInfo(authUser);
              }
            });
          }
        }, {
          key: "UpdateFirestoreUserInfo",
          value: function UpdateFirestoreUserInfo(authUser) {
            // console.log(authUser)
            var storeUserRef = this.MyAuth.afStore.doc("Users/" + authUser.uid).ref;
            storeUserRef.set({
              DisplayName: authUser.displayName,
              PhotoURL: authUser.photoURL
            }, {
              merge: true
            });
          }
        }, {
          key: "Logout",
          value: function Logout() {
            this.MyAuth.Logout();
          }
        }, {
          key: "openProfilePicUpdateDialog",
          value: function openProfilePicUpdateDialog() {
            var dialogRef = this.dialog.open(_components_Dialogs_profile_pic_update_dialog_profile_pic_update_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ProfilePicUpdateDialogComponent"], {
              //width: '250px',
              data: {}
            });
            dialogRef.afterClosed().subscribe(function () {
              console.log('The dialog was closed');
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])], AppComponent);
      /***/
    },

    /***/
    "U7Bq":
    /*!************************************************************************************************!*\
      !*** ./src/app/components/Dialogs/friend-requests-dialog/friend-requests-dialog.component.css ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function U7Bq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".Requester-Name {\r\n    color:#4169e1;\r\n    font-size: 1rem !important;\r\n}\r\n.Request-Message {\r\n    color: rgba(0, 0, 0, 0.54);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZC1yZXF1ZXN0cy1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJmcmllbmQtcmVxdWVzdHMtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUmVxdWVzdGVyLU5hbWUge1xyXG4gICAgY29sb3I6IzQxNjllMTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5SZXF1ZXN0LU1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "UTcu":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function UTcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _Services_my_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Services/my-auth.service */
      "Sm6f");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(MyAuth) {
          _classCallCheck(this, AuthGuard);

          this.MyAuth = MyAuth;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this9 = this;

            // console.log("AuthGaurd");
            return this.MyAuth.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              return !!user;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (IsLoggedIn) {
              // console.log(IsLoggedIn)
              if (!IsLoggedIn) {
                console.log("Access denied, require login.");

                _this9.MyAuth.NavTo('/Auth/Login');
              }
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _Services_my_auth_service__WEBPACK_IMPORTED_MODULE_3__["MyAuthService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_3__["MyAuthService"]])], AuthGuard);
      /***/
    },

    /***/
    "UzBJ":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Dialogs/profile-pic-update-dialog/profile-pic-update-dialog.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UzBJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<h1 mat-dialog-title>Actualiza tu foto de pérfil</h1>\r\n<form [formGroup]=\"UpdatePPForm\" (submit)=\"OnSubmit()\">\r\n  <div mat-dialog-content>\r\n    <input type=\"file\" style=\"display:none;\" formControlName=\"InputImage\" accept=\"image/*\" #InputFile\r\n      (change)=\"onChange($event)\" required>\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"ProfileCaption\" autofocus placeholder=\"Título de tu publicación\">\r\n    </mat-form-field>\r\n    <button mat-icon-button type=\"button\" (click)=\"InputFile.click()\">\r\n      <i class=\"fal fa-paperclip fa-lg\"></i>\r\n    </button>\r\n    <div>\r\n      <img src=\"{{OutputImage.compressedImage.imageDataUrl}}\" *ngIf=\"showImage\" class=\"responsive-img\" />\r\n    </div>\r\n  </div>\r\n  <div mat-dialog-actions>\r\n    <mat-progress-bar *ngIf=\"Uploading\" mode=\"determinate\" [value]=\"(uploadPercent$ | async)\">\r\n    </mat-progress-bar>\r\n    <button mat-raised-button type=\"reset\" (click)=\"onNoClick()\">Cancelar</button>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!UpdatePPForm.valid || !processingImageComplete\"\r\n      [attr.cdkFocusInitial]=\"processingImageComplete ? '' : null\">Actualizar</button>\r\n  </div>\r\n</form>";
      /***/
    },

    /***/
    "VCBj":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/Dialogs/messages-dialog/messages-dialog.component.css ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function VCBj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlcy1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-toolbar class=\"toolbar\" color=\"primary\">\r\n  <img src=\"./assets/Image/logo.png\" *ngIf=\" !MyAuth.IsUserLoggedIn;\" width=\"15%\" class=\"logo-image\">\r\n  <!-- <span mat-button [routerLink]=\"[ '/Home']\" class=\"MousePointer\">{{MyAuth.AppTitle}}</span> -->\r\n  <img src=\"./assets/Image/logo.png\" *ngIf=\"!MyAuth.LoggedUserLoading && MyAuth.IsUserLoggedIn;\" width=\"100\"\r\n    class=\"logo-image\">\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <span class=\"align-center\"></span>\r\n  <span class=\"spacer\"></span>\r\n\r\n  <ng-container *ngIf=\"!MyAuth.LoggedUserLoading && MyAuth.IsUserLoggedIn; else UserLoading\">\r\n    <!--<button mat-icon-button [matMenuTriggerFor]=\"DropMessages\">\r\n      <i class=\"fal fa-comment\"></i>\r\n    </button>-->\r\n    <!--<button mat-icon-button [matMenuTriggerFor]=\"DropNotifications\">\r\n      <i class=\"fal fa-bell\"></i>\r\n    </button>-->\r\n    <button mat-icon-button [routerLink]=\"[ '/Home']\" routerLinkActive=\"active-route\">\r\n      <i class=\"fal fa-home\" style=\"color: #ffffff\"></i>\r\n      <span class=\"d-none d-lg-block\" mat-line></span>\r\n    </button>\r\n    <button mat-icon-button [matMenuTriggerFor]=\"DropFriendRequests\">\r\n      <i class=\"fal fa-user-circle\" style=\"color: #ffffff\"></i>\r\n    </button>\r\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n      <img class=\"btn-profile-menu\" [src]=\"MyAuth.LoggedUser?.PhotoURL\" alt=\"...\">\r\n    </button>\r\n\r\n    <!-- <mat-menu #DropMessages=\"matMenu\">\r\n      <ng-template matMenuContent>\r\n        <app-messages-dialog></app-messages-dialog>\r\n      </ng-template>\r\n    </mat-menu> -->\r\n    <!-- <mat-menu #DropNotifications=\"matMenu\">\r\n      <app-notifications-dialog></app-notifications-dialog>\r\n    </mat-menu> -->\r\n       <mat-menu #DropFriendRequests=\"matMenu\" [overlapTrigger]=\"true\">\r\n      <ng-template matMenuContent>\r\n        <app-friend-requests-dialog></app-friend-requests-dialog>\r\n      </ng-template>\r\n    </mat-menu>\r\n\r\n    <mat-menu #menu=\"matMenu\">\r\n      <h3 class=\"user-name\">{{MyAuth.LoggedUser?.DisplayName}}</h3>\r\n      <button mat-menu-item (click)=\"MyAuth.NavTo('User/'+MyAuth.LoggedUser?.Id)\">\r\n        <span><i class=\"fal fa-id-card\"></i> Ver perfil</span>\r\n      </button>\r\n      <button mat-menu-item (click)=\"openProfilePicUpdateDialog()\">\r\n        <span><i class=\"fal fa-edit\"></i> Actualizar foto de perfil</span>\r\n      </button>\r\n      <button mat-menu-item (click)=\"Logout()\">\r\n        <span><i class=\"fal fa-sign-out-alt\"></i> Desconectar</span>\r\n      </button>\r\n    </mat-menu>\r\n  </ng-container>\r\n  <ng-template #UserLoading>\r\n    <span *ngIf=\"MyAuth.IsUserLoggedIn\"><i class=\"fal fa-spinner fa-spin\"></i></span>\r\n  </ng-template>\r\n</mat-toolbar>\r\n<!-- Add Content Here -->\r\n<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/functions */
      "RgrY");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _Modules_app_dialogs_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./Modules/app-dialogs.module */
      "nmhw");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _Services_my_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./Services/my-auth.service */
      "Sm6f");
      /* harmony import */


      var _Services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./Services/notification.service */
      "B+sD");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "UTcu");
      /* harmony import */


      var _Services_user_resolver_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./Services/user-resolver.service */
      "gNy4");
      /* harmony import */


      var ng2_image_compress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng2-image-compress */
      "PT9p");
      /* harmony import */


      var _Services_image_optimization_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./Services/image-optimization.service */
      "DpT1");
      /* harmony import */


      var _Modules_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./Modules/shared.module */
      "jNvo");
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "HTFn");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _components_Dialogs_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/Dialogs/confirmation-dialog/confirmation-dialog.component */
      "r/ck");
      /* harmony import */


      var _components_Dialogs_profile_pic_update_dialog_profile_pic_update_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/Dialogs/profile-pic-update-dialog/profile-pic-update-dialog.component */
      "naqG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _Modules_Material_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./Modules/Material.module */
      "NrK8");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_27__);
      /* harmony import */


      var _components_auth_recuperar_recuperar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/auth/recuperar/recuperar */
      "vbY1");
      /* harmony import */


      var _components_auth_verificar_verificar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./components/auth/verificar/verificar.component */
      "9ryv"); // import { UserPhotoComponent } from './components/customElements/user-photo/user-photo.component';


      firebase__WEBPACK_IMPORTED_MODULE_27__["initializeApp"](src_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].firebase);

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _components_Dialogs_profile_pic_update_dialog_profile_pic_update_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ProfilePicUpdateDialogComponent"], _components_Dialogs_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmationDialogComponent"], _components_auth_recuperar_recuperar__WEBPACK_IMPORTED_MODULE_28__["RecuperarComponent"], _components_auth_verificar_verificar_component__WEBPACK_IMPORTED_MODULE_29__["VerificarComponent"] // UserPhotoComponent
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _Modules_Material_module__WEBPACK_IMPORTED_MODULE_25__["MaterialModule2"], // MatButtonModule,
        // MatToolbarModule,
        // MatMenuModule,
        // MatSnackBarModule,
        // MatDialogModule,
        // MatFormFieldModule,
        // MatProgressBarModule,
        // MatSidenavModule,
        // MatIconModule,
        // MatListModule,
        _Modules_app_dialogs_module__WEBPACK_IMPORTED_MODULE_11__["AppDialogsModule"], _Modules_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].firebase, 'facetest-fe341'), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"], _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuthGuardModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"], _angular_fire_functions__WEBPACK_IMPORTED_MODULE_8__["AngularFireFunctionsModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__["LayoutModule"]],
        providers: [_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_13__["MyAuthService"], _Services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _Services_user_resolver_service__WEBPACK_IMPORTED_MODULE_16__["UserResolverService"], ng2_image_compress__WEBPACK_IMPORTED_MODULE_17__["ImageCompressService"], ng2_image_compress__WEBPACK_IMPORTED_MODULE_17__["ResizeOptions"], _Services_image_optimization_service__WEBPACK_IMPORTED_MODULE_18__["ImageOptimizationService"]],
        entryComponents: [_components_Dialogs_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmationDialogComponent"], _components_Dialogs_profile_pic_update_dialog_profile_pic_update_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ProfilePicUpdateDialogComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZLc+":
    /*!********************************************!*\
      !*** ./src/app/Services/poster.service.ts ***!
      \********************************************/

    /*! exports provided: PosterService */

    /***/
    function ZLc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PosterService", function () {
        return PosterService;
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


      var _my_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-auth.service */
      "Sm6f");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/functions */
      "RgrY");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var PosterService = /*#__PURE__*/function () {
        function PosterService(MyAuth, afAuth, afStore, afFunctions) {
          _classCallCheck(this, PosterService);

          this.MyAuth = MyAuth;
          this.afAuth = afAuth;
          this.afStore = afStore;
          this.afFunctions = afFunctions;
        }

        _createClass(PosterService, [{
          key: "AddAPost",
          value: function AddAPost(p) {
            // const AddAPost = this.afFunctions.httpsCallable('AddAPost');
            // return AddAPost(p)
            return this.afStore.collection('Posts').add(p);
          }
        }, {
          key: "DeleteAPost",
          value: function DeleteAPost(PostId) {
            var DeletePost = this.afFunctions.httpsCallable('DeletePost');
            return DeletePost({
              PostId: PostId
            });
          }
        }, {
          key: "GetAllPosts",
          value: function GetAllPosts() {
            return this.afStore.collection('Posts').valueChanges({
              idField: 'Id'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
              var ret = res.sort(function (a, b) {
                return b.PostedOn - a.PostedOn;
              });
              return ret;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
          }
        }, {
          key: "GetAPost",
          value: function GetAPost(PostId) {
            return this.afStore.doc("Posts/".concat(PostId)).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (r) {
              r.Id = PostId;
              return r;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
          }
        }, {
          key: "GetAUserPosts",
          value: function GetAUserPosts(UserId) {
            return this.afStore.collection("Posts", function (ref) {
              return ref.where('OwnerId', '==', UserId);
            }).valueChanges({
              idField: 'Id'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
          }
        }, {
          key: "GetAPostComments",
          value: function GetAPostComments(PostId) {
            return this.afStore.collection("Comments/", function (ref) {
              return ref.where('PostId', '==', PostId).orderBy("CommentedOn");
            }).valueChanges({
              idField: 'Id'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
          }
        }, {
          key: "GetAPostHearts",
          value: function GetAPostHearts(PostId) {
            return this.afStore.collection('Hearts/', function (ref) {
              return ref.where('PostId', '==', PostId);
            }).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
          }
        }, {
          key: "CheckIsPostHeartedByUser",
          value: function CheckIsPostHeartedByUser(PostId, UserId) {
            return this.afStore.doc("Hearts/".concat(PostId, "_").concat(UserId)).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
              // 1=Hearted, 2=not Hearted.
              res = res ? 1 : 2;
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
          }
        }, {
          key: "NewComment",
          value: function NewComment(PostId, CommentMsg) {
            var AddAComment = this.afFunctions.httpsCallable('AddAComment');
            return AddAComment({
              'PostId': PostId,
              'CommentMsg': CommentMsg
            });
          }
        }, {
          key: "AddRemoveHeart",
          value: function AddRemoveHeart(PostId) {
            var AddRemoveHeart = this.afFunctions.httpsCallable('AddRemoveHeart');
            return AddRemoveHeart({
              'PostId': PostId
            });
          }
        }]);

        return PosterService;
      }();

      PosterService.ctorParameters = function () {
        return [{
          type: _my_auth_service__WEBPACK_IMPORTED_MODULE_2__["MyAuthService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }, {
          type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctions"]
        }];
      };

      PosterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_my_auth_service__WEBPACK_IMPORTED_MODULE_2__["MyAuthService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctions"]])], PosterService);
      /***/
    },

    /***/
    "ZllK":
    /*!*************************************************************************!*\
      !*** ./src/app/components/home/right-column/right-column.component.css ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function ZllK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-menu {\r\n    position: absolute;\r\n    right: 5px;\r\n}\r\n\r\n.chat-heads-container {\r\n    height: calc(100vh - 211px);\r\n    overflow: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpZ2h0LWNvbHVtbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixjQUFjO0FBQ2xCIiwiZmlsZSI6InJpZ2h0LWNvbHVtbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5jaGF0LWhlYWRzLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMTFweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufSJdfQ== */";
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "cve6":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/middle-column/middle-column.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cve6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin:0 15px;\">\r\n  <mat-card *ngIf=\"MyAuth.LoggedUser.TipoDeUsuario =='profesional'\"\r\n    style=\"margin-bottom: 16px; background: #8b73ff\">\r\n    <mat-card-header>\r\n      <mat-card-title>Realizar una publicación</mat-card-title>\r\n    </mat-card-header>\r\n    <input type=\"file\" #InputImage (change)=\"OnChange($event)\" style=\"display: none;\" accept=\"image/*\" required>\r\n    <mat-form-field style=\"width:95%;\">\r\n      <input matInput [(ngModel)]=\"InputCaption\" placeholder=\"Título de tu publicación\"\r\n        autocomplete=\"off\">\r\n      <button matSuffix mat-icon-button (click)=\"InputImage.click()\" style=\"color: #c3ff73\">\r\n        <i class=\"fal fa-paperclip fa-lg\"></i>\r\n      </button>\r\n      <button style=\"margin:0 3px ; color: #c3ff73\" matSuffix mat-icon-button [disabled]=\"!HasFile || !CompressingCompleted\"\r\n        (click)=\"UploadThePost()\" align=\"end\">\r\n        <span *ngIf=\"!Uploading\"><i class=\"fal fa-paper-plane fa-lg\"></i></span>\r\n        <span *ngIf=\"Uploading\"><i class=\"fal fa-circle-notch fa-spin\"></i></span>\r\n      </button>\r\n    </mat-form-field>\r\n    <mat-card-content>\r\n      <mat-progress-bar mode=\"determinate\" *ngIf=\"Uploading\" style=\"margin-bottom: 2px;\" color=\"warn\"\r\n        [value]=\"(uploadPercent | async)\">\r\n      </mat-progress-bar>\r\n      <img *ngIf=\"showImage && HasFile\" (load)=\"PreviewLoaded($event)\" style=\"margin-top:3px;\" mat-card-image\r\n        src=\"{{OptimizedImage.compressedImage.imageDataUrl}}\" alt=\"{{OptimizedImage.fileName}}\">\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <ng-container *ngIf=\"PostsToDisplay$ | async as Posts; else PostsLoading\">\r\n    <ng-container *ngIf=\"Posts.length; else NoPosts\">\r\n      <div *ngFor=\"let post of Posts; trackBy: TrackByPostId\">\r\n        <element-post-card [PostData]=\"post\"></element-post-card>\r\n      </div>\r\n    </ng-container>\r\n    <ng-template #NoPosts>\r\n      <mat-card style=\"margin: 20px 0;\">\r\n        ¡Agregar tu primer publicacion!\r\n      </mat-card>\r\n    </ng-template>\r\n  </ng-container>\r\n  <ng-template #PostsLoading>\r\n    <element-my-loader></element-my-loader>\r\n  </ng-template>\r\n</div>";
      /***/
    },

    /***/
    "dhyO":
    /*!********************************************!*\
      !*** ./src/app/Services/follow.service.ts ***!
      \********************************************/

    /*! exports provided: FollowService */

    /***/
    function dhyO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowService", function () {
        return FollowService;
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


      var _my_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-auth.service */
      "Sm6f");
      /* harmony import */


      var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/functions */
      "RgrY");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var FollowService = /*#__PURE__*/function () {
        function FollowService(MyAuth, afFunctions, afStore) {
          _classCallCheck(this, FollowService);

          this.MyAuth = MyAuth;
          this.afFunctions = afFunctions;
          this.afStore = afStore;
        }

        _createClass(FollowService, [{
          key: "FollowAUser",
          value: function FollowAUser(Id, DisplayName, PhotoURL) {
            // const FollowAUserFn = this.afFunctions.httpsCallable('FollowAUser')
            // const props = { Id, DisplayName, PhotoURL };
            return this.afStore.collection('Follows').doc(this.MyAuth.LoggedUser.Id + "_" + Id).set({
              "DocId": Id
            }); // return FollowAUserFn(props)
          }
        }, {
          key: "UnfollowAUser",
          value: function UnfollowAUser(UserId) {
            // const UnfollowAUserFn = this.afFunctions.httpsCallable('UnfollowAUser');
            return this.afStore.collection('Follows').doc(this.MyAuth.LoggedUser.Id + "_" + UserId)["delete"](); // return UnfollowAUserFn({ UserId })
          }
        }, {
          key: "GetFollowStatus",
          value: function GetFollowStatus(UserId) {
            return this.afStore.doc("Follows/".concat(this.MyAuth.LoggedUser.Id, "_").concat(UserId)).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (r) {
              if (r == undefined) return 'No';else return r;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
          }
        }, {
          key: "GetAUserFollowers",
          value: function GetAUserFollowers(UserId) {
            return this.afStore.collection('Follows', function (ref) {
              return ref.where('SecondUser.Id', '==', UserId);
            }).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
          }
        }, {
          key: "GetAUserFollowing",
          value: function GetAUserFollowing(UserId) {
            return this.afStore.collection('Follows', function (ref) {
              return ref.where('FirstUser.Id', '==', UserId);
            }).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
          }
        }, {
          key: "GetAUserFollowersNFollowingUserIds",
          value: function GetAUserFollowersNFollowingUserIds(UserId) {
            var _this10 = this;

            var CombinedReturn = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.GetAUserFollowing(UserId), this.GetAUserFollowers(UserId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
              var combined = res[0].concat(res[1]);
              return combined;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (res) {
              var ret = [];
              if (res.length) res.forEach(function (e) {
                ret.push(e.FirstUser.Id == _this10.MyAuth.LoggedUser.Id ? e.SecondUser.Id : e.FirstUser.Id);
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(ret);
            }));
            return CombinedReturn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
          }
        }]);

        return FollowService;
      }();

      FollowService.ctorParameters = function () {
        return [{
          type: _my_auth_service__WEBPACK_IMPORTED_MODULE_2__["MyAuthService"]
        }, {
          type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_3__["AngularFireFunctions"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }];
      };

      FollowService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_my_auth_service__WEBPACK_IMPORTED_MODULE_2__["MyAuthService"], _angular_fire_functions__WEBPACK_IMPORTED_MODULE_3__["AngularFireFunctions"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])], FollowService); // Code	Meaning
      // 0	  Pending
      // 1	  Accepted
      // 2	  Declined
      // 3	  Blocked

      /***/
    },

    /***/
    "gNy4":
    /*!***************************************************!*\
      !*** ./src/app/Services/user-resolver.service.ts ***!
      \***************************************************/

    /*! exports provided: UserResolverService */

    /***/
    function gNy4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserResolverService", function () {
        return UserResolverService;
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


      var _my_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-auth.service */
      "Sm6f");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var UserResolverService = /*#__PURE__*/function () {
        function UserResolverService(MyAuth) {
          _classCallCheck(this, UserResolverService);

          this.MyAuth = MyAuth;
        }

        _createClass(UserResolverService, [{
          key: "resolve",
          value: function resolve(route, state) {
            var _this11 = this;

            console.log('Resoler rosolve method'); //console.info('par route: ', route, 'State: ', state);

            var loggedUserID = this.MyAuth.LoggedUser.Id;
            return this.MyAuth.GetAUserInfoFromStore(loggedUserID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resUser) {
              console.log(resUser);
              _this11.MyAuth.LoggedUser = resUser;
              return resUser;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (u) {
              return console.log(u);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err, caught) {
              console.log(err);
              console.log(caught);
              return caught;
            }));
          }
        }]);

        return UserResolverService;
      }();

      UserResolverService.ctorParameters = function () {
        return [{
          type: _my_auth_service__WEBPACK_IMPORTED_MODULE_2__["MyAuthService"]
        }];
      };

      UserResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_my_auth_service__WEBPACK_IMPORTED_MODULE_2__["MyAuthService"]])], UserResolverService);
      /***/
    },

    /***/
    "gQvH":
    /*!****************************************************************************!*\
      !*** ./src/app/components/customElements/post-card/post-card.component.ts ***!
      \****************************************************************************/

    /*! exports provided: PostCardComponent */

    /***/
    function gQvH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostCardComponent", function () {
        return PostCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_post_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./post-card.component.html */
      "Ptfk");
      /* harmony import */


      var _post_card_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./post-card.component.css */
      "KuVT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/Services/my-auth.service */
      "Sm6f");
      /* harmony import */


      var src_app_Services_poster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/Services/poster.service */
      "ZLc+");
      /* harmony import */


      var src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/Services/follow.service */
      "dhyO");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var PostCardComponent = /*#__PURE__*/function () {
        function PostCardComponent(MyAuth, poster, followSrv) {
          _classCallCheck(this, PostCardComponent);

          this.MyAuth = MyAuth;
          this.poster = poster;
          this.followSrv = followSrv;
          this.UserLoaded = false;
          this.ImageLoaded = false;
          this.CommentUploading = false;
          this.ShowComments = false;
          this.ImageOpacity = 0;
          this.moment = moment__WEBPACK_IMPORTED_MODULE_4__;
          this.DateTimeFormat = {
            sameDay: '[Today] - h:mm a',
            nextDay: '[Tomorrow] - h:mm a',
            nextWeek: 'dddd - h:mm a',
            lastDay: '[Yesterday] - h:mm a',
            lastWeek: '[Last] ddd - h:mm a',
            sameElse: 'D/M/YY - h:mm a'
          };
        }

        _createClass(PostCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.MyAuth.GetAUserInfoFromStore(this.PostData.OwnerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function (User) {
              _this12.Owner = User;
              _this12.UserLoaded = true;
            });
            this.Comments$ = this.poster.GetAPostComments(this.PostData.Id);
            this.IsHeartedByUser$ = this.poster.CheckIsPostHeartedByUser(this.PostData.Id, this.MyAuth.LoggedUser.Id);
            this.CheckFollowStatus$ = this.followSrv.GetFollowStatus(this.PostData.OwnerId);
            this.ImgHeight = this.PostData.ImageMeta.Height;
            this.ImgWidth = this.PostData.ImageMeta.Width;
          }
        }, {
          key: "PostAComment",
          value: function PostAComment() {
            var _this13 = this;

            this.CommentUploading = true;
            this.poster.NewComment(this.PostData.Id, this.CommentText).subscribe(function (r) {
              _this13.CommentText = '';
              console.log(r);
              _this13.CommentUploading = false;
            });
          }
        }, {
          key: "PanelToggle",
          value: function PanelToggle() {
            this.ShowComments = !this.ShowComments;
          }
        }, {
          key: "AddRemoveHeart",
          value: function AddRemoveHeart() {
            this.poster.AddRemoveHeart(this.PostData.Id).subscribe(function (r) {
              console.log(r);
            });
          }
        }, {
          key: "FollowOwner",
          value: function FollowOwner() {
            this.followSrv.FollowAUser(this.Owner.Id, this.Owner.DisplayName, this.Owner.PhotoURL).then(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "ImgLoaded",
          value: function ImgLoaded(Image, ImageURL) {
            Image.src = ImageURL;
            this.ImageLoaded = true;
            this.ImageOpacity = 1;
          }
        }, {
          key: "TrackByCommentId",
          value: function TrackByCommentId(Comment) {
            return Comment.Id;
          }
        }, {
          key: "DeletePost",
          value: function DeletePost() {
            var _this14 = this;

            this.poster.DeleteAPost(this.PostData.Id).subscribe(function (r) {
              // console.log(r)
              _this14.MyAuth.Notify.openSnackBar(r.Message, '');
            });
          }
        }]);

        return PostCardComponent;
      }();

      PostCardComponent.ctorParameters = function () {
        return [{
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__["MyAuthService"]
        }, {
          type: src_app_Services_poster_service__WEBPACK_IMPORTED_MODULE_6__["PosterService"]
        }, {
          type: src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_7__["FollowService"]
        }];
      };

      PostCardComponent.propDecorators = {
        PostData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PostCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'element-post-card',
        template: _raw_loader_post_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_card_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__["MyAuthService"], src_app_Services_poster_service__WEBPACK_IMPORTED_MODULE_6__["PosterService"], src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_7__["FollowService"]])], PostCardComponent);
      /***/
    },

    /***/
    "jNvo":
    /*!******************************************!*\
      !*** ./src/app/Modules/shared.module.ts ***!
      \******************************************/

    /*! exports provided: SharedModule */

    /***/
    function jNvo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_customElements_my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/customElements/my-loader/my-loader.component */
      "SsqU");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _components_customElements_mini_navbar_mini_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components/customElements/mini-navbar/mini-navbar.component */
      "AtoI"); // import { MatListModule, MatButtonModule } from '@angular/material';


      var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_customElements_my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_5__["MyLoaderComponent"], _components_customElements_mini_navbar_mini_navbar_component__WEBPACK_IMPORTED_MODULE_8__["MiniNavbarComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], // MaterialModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], // MaterialModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _components_customElements_my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_5__["MyLoaderComponent"], _components_customElements_mini_navbar_mini_navbar_component__WEBPACK_IMPORTED_MODULE_8__["MiniNavbarComponent"]]
      })], SharedModule);
      /***/
    },

    /***/
    "ktGj":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Dialogs/confirmation-dialog/confirmation-dialog.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ktGj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h3 mat-dialog-title>{{dialogData.Title}}</h3>\r\n<mat-dialog-content>\r\n  {{dialogData.Message}}\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-raised-button mat-dialog-close>No</button>\r\n  <button mat-stroked-button mat-dialog-close=\"true\">Yes</button>\r\n</mat-dialog-actions>";
      /***/
    },

    /***/
    "lnuH":
    /*!***********************************************************************************************!*\
      !*** ./src/app/components/Dialogs/friend-requests-dialog/friend-requests-dialog.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: FriendRequestsDialogComponent */

    /***/
    function lnuH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FriendRequestsDialogComponent", function () {
        return FriendRequestsDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_friend_requests_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./friend-requests-dialog.component.html */
      "3B9c");
      /* harmony import */


      var _friend_requests_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./friend-requests-dialog.component.css */
      "U7Bq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Services/my-auth.service */
      "Sm6f");
      /* harmony import */


      var src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/Services/follow.service */
      "dhyO");

      var FriendRequestsDialogComponent = /*#__PURE__*/function () {
        function FriendRequestsDialogComponent(MyAuth, FollowSrv) {
          _classCallCheck(this, FriendRequestsDialogComponent);

          this.MyAuth = MyAuth;
          this.FollowSrv = FollowSrv;
          this.Loading = true;
          this.NoRequests = false;
        }

        _createClass(FriendRequestsDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.getPendingRequests();
          }
        }, {
          key: "getPendingRequests",
          value: function getPendingRequests() {// this.friendsService.PendingFriendRequests().subscribe(r => {
            //   r.length !== 0 ? this.Requests = r : this.NoRequests = true;
            //   this.Loading = false;
            // });
          }
        }, {
          key: "RequestAction",
          value: function RequestAction(ReqId, IsAccepted, User) {// this.friendsService.RequestAction(ReqId, IsAccepted).subscribe(r => {
            //   console.log(r);
            //   if (r === 'Accepted') {
            //     this.MyAuth.notify.openSnackBar("You and " + User.DisplayName + " are now friends!",
            //       'View ' + User.DisplayName, () => { },
            //       () => {
            //         this.MyAuth.NavTo('/User/' + User.Id);
            //       }
            //     );
            //     this.getPendingRequests();
            //   }
            //   else
            //     this.MyAuth.notify.openSnackBar("You've rejected " + User.DisplayName + "'s friend request.", 'Block ' + User.DisplayName,{},{}, 3500);
            // })
          }
        }]);

        return FriendRequestsDialogComponent;
      }();

      FriendRequestsDialogComponent.ctorParameters = function () {
        return [{
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"]
        }, {
          type: src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"]
        }];
      };

      FriendRequestsDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-friend-requests-dialog',
        template: _raw_loader_friend_requests_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_friend_requests_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"], src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"]])], FriendRequestsDialogComponent);
      /***/
    },

    /***/
    "loFn":
    /*!*******************************************************************!*\
      !*** ./src/app/components/auth/verificar/verificar.component.css ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function loFn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#icono{\r\nwidth: 500px;\r\n}\r\n.controls-container{\r\n    width: 100%;\r\n  }\r\n.Olvido {\r\n    text-decoration: none;\r\n    color:white;\r\n  }\r\n.controls-container * {\r\n    width: 100%;\r\n  }\r\n.FullCard{\r\n    border-radius: 14px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n  \r\n  }\r\n#grid {\r\n    background: linear-gradient(#8b73ff,#8a3788);\r\n    padding: 80px 0;\r\n    height: 100vh;\r\n    /* height: calc(100% - 64px); */\r\n  }\r\nbody { padding: 2em; }\r\n/* Shared */\r\n.loginBtn {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    /* width: 13em;  - apply for fixed size */\r\n    margin: 0.2em;\r\n    margin: 3px 0px !important;\r\n    padding: 0 15px 0 46px;\r\n    border: none;\r\n    text-align: left;\r\n    line-height: 34px;\r\n    white-space: nowrap;\r\n    border-radius: 0.2em;\r\n    /* font-size: 16px; */\r\n    color: rgb(253, 253, 253);\r\n  }\r\n.loginBtn:before {\r\n    content: \"\";\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 34px;\r\n    height: 100%;\r\n  }\r\n.loginBtn:focus {\r\n    outline: none;\r\n  }\r\n.loginBtn:active {\r\n    box-shadow: inset 0 0 0 32px rgba(112, 13, 96, 0.842);\r\n  }\r\n/* Facebook */\r\n.loginBtn--facebook {\r\n    background-color: #4C69BA;\r\n    background-image: linear-gradient(#4C69BA, #3B55A0);\r\n    /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\r\n    text-shadow: 0 -1px 0 #354C8C;\r\n  }\r\n.loginBtn--facebook:before {\r\n    border-right: #364e92 1px solid;\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n  }\r\n.loginBtn--facebook:hover,\r\n  .loginBtn--facebook:focus {\r\n    background-color: #5B7BD5;\r\n    background-image: linear-gradient(#5B7BD5, #4864B1);\r\n  }\r\n/* Google */\r\n.loginBtn--google {\r\n    /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n    background: #DD4B39;\r\n  }\r\n.loginBtn--google:before {\r\n    border-right: #BB3F30 1px solid;\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n  }\r\n.loginBtn--google:hover,\r\n  .loginBtn--google:focus {\r\n    background: #E74B37;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7SUFDSSxXQUFXO0VBQ2I7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7QUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLG9DQUFvQzs7RUFFdEM7QUFFQTtJQUNFLDRDQUE0QztJQUM1QyxlQUFlO0lBQ2YsYUFBYTtJQUNiLCtCQUErQjtFQUNqQztBQUVBLE9BQU8sWUFBWSxFQUFFO0FBRXJCLFdBQVc7QUFFWDtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDQTtJQUNFLHFEQUFxRDtFQUN2RDtBQUdBLGFBQWE7QUFDYjtJQUNFLHlCQUF5QjtJQUN6QixtREFBbUQ7SUFDbkQsK0VBQStFO0lBQy9FLDZCQUE2QjtFQUMvQjtBQUNBO0lBQ0UsK0JBQStCO0lBQy9CLHlHQUF5RztFQUMzRztBQUNBOztJQUVFLHlCQUF5QjtJQUN6QixtREFBbUQ7RUFDckQ7QUFHQSxXQUFXO0FBQ1g7SUFDRSxvREFBb0Q7SUFDcEQsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSwrQkFBK0I7SUFDL0IsdUdBQXVHO0VBQ3pHO0FBQ0E7O0lBRUUsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InZlcmlmaWNhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ljb25ve1xyXG53aWR0aDogNTAwcHg7XHJcbn1cclxuLmNvbnRyb2xzLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuT2x2aWRvIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY29udHJvbHMtY29udGFpbmVyICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5GdWxsQ2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gICNncmlkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjOGI3M2ZmLCM4YTM3ODgpO1xyXG4gICAgcGFkZGluZzogODBweCAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC8qIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7ICovXHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkgeyBwYWRkaW5nOiAyZW07IH1cclxuICBcclxuICAvKiBTaGFyZWQgKi9cclxuICBcclxuICAubG9naW5CdG4ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIHdpZHRoOiAxM2VtOyAgLSBhcHBseSBmb3IgZml4ZWQgc2l6ZSAqL1xyXG4gICAgbWFyZ2luOiAwLjJlbTtcclxuICAgIG1hcmdpbjogM3B4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDAgNDZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIC8qIGZvbnQtc2l6ZTogMTZweDsgKi9cclxuICAgIGNvbG9yOiByZ2IoMjUzLCAyNTMsIDI1Myk7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAubG9naW5CdG46YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDMycHggcmdiYSgxMTIsIDEzLCA5NiwgMC44NDIpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBGYWNlYm9vayAqL1xyXG4gIC5sb2dpbkJ0bi0tZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNjlCQTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNEM2OUJBLCAjM0I1NUEwKTtcclxuICAgIC8qZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIG5ldWVcIiwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7Ki9cclxuICAgIHRleHQtc2hhZG93OiAwIC0xcHggMCAjMzU0QzhDO1xyXG4gIH1cclxuICAubG9naW5CdG4tLWZhY2Vib29rOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmlnaHQ6ICMzNjRlOTIgMXB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2ZhY2Vib29rLnBuZycpIDZweCA2cHggbm8tcmVwZWF0O1xyXG4gIH1cclxuICAubG9naW5CdG4tLWZhY2Vib29rOmhvdmVyLFxyXG4gIC5sb2dpbkJ0bi0tZmFjZWJvb2s6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVCN0JENTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNUI3QkQ1LCAjNDg2NEIxKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogR29vZ2xlICovXHJcbiAgLmxvZ2luQnRuLS1nb29nbGUge1xyXG4gICAgLypmb250LWZhbWlseTogXCJSb2JvdG9cIiwgUm9ib3RvLCBhcmlhbCwgc2Fucy1zZXJpZjsqL1xyXG4gICAgYmFja2dyb3VuZDogI0RENEIzOTtcclxuICB9XHJcbiAgLmxvZ2luQnRuLS1nb29nbGU6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yaWdodDogI0JCM0YzMCAxcHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZ29vZ2xlLnBuZycpIDZweCA2cHggbm8tcmVwZWF0O1xyXG4gIH1cclxuICAubG9naW5CdG4tLWdvb2dsZTpob3ZlcixcclxuICAubG9naW5CdG4tLWdvb2dsZTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTc0QjM3O1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "naqG":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/components/Dialogs/profile-pic-update-dialog/profile-pic-update-dialog.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ProfilePicUpdateDialogComponent */

    /***/
    function naqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePicUpdateDialogComponent", function () {
        return ProfilePicUpdateDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_pic_update_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile-pic-update-dialog.component.html */
      "UzBJ");
      /* harmony import */


      var _profile_pic_update_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile-pic-update-dialog.component.css */
      "pgX+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_Services_image_optimization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/Services/image-optimization.service */
      "DpT1");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/Services/my-auth.service */
      "Sm6f");
      /* harmony import */


      var ng2_image_compress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-image-compress */
      "PT9p");
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
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG"); // import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


      var ProfilePicUpdateDialogComponent = /*#__PURE__*/function () {
        function ProfilePicUpdateDialogComponent(dialogRef, imageOptSrvc, storage, fb, MyAuth, data) {
          _classCallCheck(this, ProfilePicUpdateDialogComponent);

          this.dialogRef = dialogRef;
          this.imageOptSrvc = imageOptSrvc;
          this.storage = storage;
          this.fb = fb;
          this.MyAuth = MyAuth;
          this.data = data;
          this.showImage = false;
          this.processingImage = false;
          this.processingImageComplete = false;
          this.processingUpload = false;
          this.Uploading = false;
        }

        _createClass(ProfilePicUpdateDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.UpdatePPForm = this.fb.group({
              InputImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              ProfileCaption: ''
            });
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "onChange",
          value: function onChange(fileInput) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var optimizeOptions, observableImages, image, blob;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.processingImage = true;
                      this.file = fileInput.target.files[0]; //this.UpdatePPForm.value.InputImage = fileInput.target.files[0];

                      _context3.next = 4;
                      return this.imageOptSrvc.AdjustImageHeightWidth(fileInput.target.files[0], 'ProfilePic').toPromise();

                    case 4:
                      optimizeOptions = _context3.sent;
                      _context3.next = 7;
                      return ng2_image_compress__WEBPACK_IMPORTED_MODULE_8__["ImageCompressService"].filesToCompressedImageSourceEx(fileInput.target.files, optimizeOptions);

                    case 7:
                      observableImages = _context3.sent;
                      _context3.next = 10;
                      return observableImages.toPromise();

                    case 10:
                      image = _context3.sent;
                      this.OutputImage = image;
                      _context3.next = 14;
                      return this.imageOptSrvc.dataURItoBlob(this.OutputImage.compressedImage.imageDataUrl);

                    case 14:
                      blob = _context3.sent;
                      this.file = blob;
                      this.showImage = true;
                      this.processingImageComplete = true;

                    case 18:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "OnSubmit",
          value: function OnSubmit() {
            var _this15 = this;

            var filePath = this.MyAuth.LoggedUser.Email + '/ProfilePictures/' + moment__WEBPACK_IMPORTED_MODULE_9__().format('D-M-YYYY');
            var fileRef = this.storage.ref(filePath);
            var task = this.storage.upload(filePath, this.file, {
              customMetadata: {
                caption: this.UpdatePPForm.value.ProfileCaption
              }
            });
            this.Uploading = true; // observe percentage changes

            this.uploadPercent$ = task.percentageChanges(); // get notified when the download URL is available

            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this15.downloadURL$ = fileRef.getDownloadURL();

              _this15.downloadURL$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(function (URL) {
                _this15.MyAuth.UpdateProfilePic(URL).subscribe(function () {
                  _this15.dialogRef.close();
                });
              });
            })).subscribe();
          }
        }]);

        return ProfilePicUpdateDialogComponent;
      }();

      ProfilePicUpdateDialogComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"]
        }, {
          type: src_app_Services_image_optimization_service__WEBPACK_IMPORTED_MODULE_5__["ImageOptimizationService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_7__["MyAuthService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      ProfilePicUpdateDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile-pic-update-dialog',
        template: _raw_loader_profile_pic_update_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_pic_update_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"], src_app_Services_image_optimization_service__WEBPACK_IMPORTED_MODULE_5__["ImageOptimizationService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_7__["MyAuthService"], Object])], ProfilePicUpdateDialogComponent);
      /***/
    },

    /***/
    "nmhw":
    /*!***********************************************!*\
      !*** ./src/app/Modules/app-dialogs.module.ts ***!
      \***********************************************/

    /*! exports provided: AppDialogsModule */

    /***/
    function nmhw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppDialogsModule", function () {
        return AppDialogsModule;
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


      var _components_Dialogs_friend_requests_dialog_friend_requests_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../components/Dialogs/friend-requests-dialog/friend-requests-dialog.component */
      "lnuH");
      /* harmony import */


      var _components_Dialogs_messages_dialog_messages_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/Dialogs/messages-dialog/messages-dialog.component */
      "oN1d");
      /* harmony import */


      var _components_Dialogs_notifications_dialog_notifications_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/Dialogs/notifications-dialog/notifications-dialog.component */
      "qmzW");
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared.module */
      "jNvo");
      /* harmony import */


      var _components_home_left_column_left_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/home/left-column/left-column.component */
      "OgY9");
      /* harmony import */


      var _components_home_right_column_right_column_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/home/right-column/right-column.component */
      "8mqn");
      /* harmony import */


      var _components_home_middle_column_middle_column_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components/home/middle-column/middle-column.component */
      "DhUw");
      /* harmony import */


      var _components_customElements_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../components/customElements/post-card/post-card.component */
      "gQvH");
      /* harmony import */


      var _components_customElements_person_profile_card_person_profile_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../components/customElements/person-profile-card/person-profile-card.component */
      "7vBP");
      /* harmony import */


      var _components_Dialogs_messages_dialog_chat_head_chat_head_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../components/Dialogs/messages-dialog/chat-head/chat-head.component */
      "yCc1");
      /* harmony import */


      var _Material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./Material.module */
      "NrK8"); // import { MatCardModule, MatMenuModule, MatListModule, MatFormFieldModule, MatProgressBarModule, MatExpansionModule, MatIconModule, MatButtonModule, MatInputModule } from '@angular/material';


      var AppDialogsModule = /*#__PURE__*/_createClass(function AppDialogsModule() {
        _classCallCheck(this, AppDialogsModule);
      });

      AppDialogsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_Dialogs_friend_requests_dialog_friend_requests_dialog_component__WEBPACK_IMPORTED_MODULE_2__["FriendRequestsDialogComponent"], _components_Dialogs_messages_dialog_messages_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MessagesDialogComponent"], _components_Dialogs_messages_dialog_chat_head_chat_head_component__WEBPACK_IMPORTED_MODULE_11__["ChatHeadComponent"], _components_Dialogs_notifications_dialog_notifications_dialog_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsDialogComponent"], _components_home_left_column_left_column_component__WEBPACK_IMPORTED_MODULE_6__["LeftColumnComponent"], _components_home_right_column_right_column_component__WEBPACK_IMPORTED_MODULE_7__["RightColumnComponent"], _components_home_middle_column_middle_column_component__WEBPACK_IMPORTED_MODULE_8__["MiddleColumnComponent"], _components_customElements_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_9__["PostCardComponent"], _components_customElements_person_profile_card_person_profile_card_component__WEBPACK_IMPORTED_MODULE_10__["PersonProfileCardComponent"]],
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], // Material modules //
        _Material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule2"]],
        exports: [_components_Dialogs_friend_requests_dialog_friend_requests_dialog_component__WEBPACK_IMPORTED_MODULE_2__["FriendRequestsDialogComponent"], _components_Dialogs_messages_dialog_messages_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MessagesDialogComponent"], _components_Dialogs_messages_dialog_chat_head_chat_head_component__WEBPACK_IMPORTED_MODULE_11__["ChatHeadComponent"], _components_Dialogs_notifications_dialog_notifications_dialog_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsDialogComponent"], _components_home_left_column_left_column_component__WEBPACK_IMPORTED_MODULE_6__["LeftColumnComponent"], _components_home_right_column_right_column_component__WEBPACK_IMPORTED_MODULE_7__["RightColumnComponent"], _components_home_middle_column_middle_column_component__WEBPACK_IMPORTED_MODULE_8__["MiddleColumnComponent"], _components_customElements_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_9__["PostCardComponent"], _components_customElements_person_profile_card_person_profile_card_component__WEBPACK_IMPORTED_MODULE_10__["PersonProfileCardComponent"]]
      })], AppDialogsModule);
      /***/
    },

    /***/
    "oN1d":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/Dialogs/messages-dialog/messages-dialog.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: MessagesDialogComponent */

    /***/
    function oN1d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesDialogComponent", function () {
        return MessagesDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_messages_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./messages-dialog.component.html */
      "LYCh");
      /* harmony import */


      var _messages_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./messages-dialog.component.css */
      "VCBj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Services/my-auth.service */
      "Sm6f");
      /* harmony import */


      var src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/Services/follow.service */
      "dhyO");
      /* harmony import */


      var src_app_Services_chats_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/Services/chats.service */
      "3Zh1");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var MessagesDialogComponent = /*#__PURE__*/function () {
        function MessagesDialogComponent(MyAuth, FollowSrv, ChatSrv) {
          _classCallCheck(this, MessagesDialogComponent);

          this.MyAuth = MyAuth;
          this.FollowSrv = FollowSrv;
          this.ChatSrv = ChatSrv;
        }

        _createClass(MessagesDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.UserIdListToDisplay$ = this.ChatSrv.GetActiveChatUsersList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (r) {
              if (r.length > 0) {
                var Combined = _toConsumableArray(new Set(r[1].concat(r[0])));

                return Combined;
              }
            }));
          }
        }, {
          key: "GetAUser",
          value: function GetAUser(UserId) {
            return this.MyAuth.GetAUserInfoFromStore(UserId);
          }
        }, {
          key: "LastMessage",
          value: function LastMessage(UserId) {
            return this.ChatSrv.GetLastMessage(UserId);
          }
        }]);

        return MessagesDialogComponent;
      }();

      MessagesDialogComponent.ctorParameters = function () {
        return [{
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"]
        }, {
          type: src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"]
        }, {
          type: src_app_Services_chats_service__WEBPACK_IMPORTED_MODULE_6__["ChatsService"]
        }];
      };

      MessagesDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-messages-dialog',
        template: _raw_loader_messages_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_messages_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"], src_app_Services_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"], src_app_Services_chats_service__WEBPACK_IMPORTED_MODULE_6__["ChatsService"]])], MessagesDialogComponent);
      /***/
    },

    /***/
    "pS+A":
    /*!***************************************************************************!*\
      !*** ./src/app/components/home/middle-column/middle-column.component.css ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function pSA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-profile {\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 50%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZS1jb2x1bW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFpQjtPQUFqQixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoibWlkZGxlLWNvbHVtbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1wcm9maWxlIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiB9Il19 */";
      /***/
    },

    /***/
    "pYGd":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/left-column/left-column.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pYGd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-list class=\"d-none d-md-block\">\r\n  <mat-list-item class=\"MousePointer\" style=\"color:#ffffff\" [routerLink]=\"[ '/Home']\" routerLinkActive=\"active-route\">\r\n    <i class=\"fal fa-home\" style=\"color: #ffffff\"></i>\r\n    <span class=\"d-none d-lg-block\" mat-line>Inicio</span>\r\n  </mat-list-item>\r\n  <mat-list-item class=\"MousePointer\" style=\"color:#ffffff\" [routerLink]=\"[ '/User', MyAuth.LoggedUser?.Id ]\" routerLinkActive=\"active-route\">\r\n    <i class=\"fal fa-user\" style=\"color: #ffffff\"></i>\r\n    <span class=\"d-none d-lg-block\" mat-line>Perfil</span>\r\n  </mat-list-item>\r\n  <mat-list-item class=\"MousePointer\" style=\"color:#ffffff\" [routerLink]=\"[ '/Messages']\" routerLinkActive=\"active-route\">\r\n    <i class=\"fal fa-comment-alt-lines\" style=\"color: #ffffff\"></i>\r\n    <span class=\"d-none d-lg-block\" mat-line>Mensajes</span>\r\n  </mat-list-item>\r\n  <mat-list-item class=\"MousePointer\" style=\"color:#ffffff\" [routerLink]=\"[ '/Search']\" routerLinkActive=\"active-route\">\r\n    <i class=\"fal fa-search\" style=\"color: #ffffff\"></i>\r\n    <span class=\"d-none d-lg-block\" mat-line>Buscar</span>\r\n  </mat-list-item>\r\n</mat-list>";
      /***/
    },

    /***/
    "pgX+":
    /*!******************************************************************************************************!*\
      !*** ./src/app/components/Dialogs/profile-pic-update-dialog/profile-pic-update-dialog.component.css ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pgX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep.mat-dialog-container {\r\n    background-color: #8b73ff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcGljLXVwZGF0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJwcm9maWxlLXBpYy11cGRhdGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiNzNmZjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "qmzW":
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/Dialogs/notifications-dialog/notifications-dialog.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: NotificationsDialogComponent */

    /***/
    function qmzW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsDialogComponent", function () {
        return NotificationsDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_notifications_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./notifications-dialog.component.html */
      "xhhR");
      /* harmony import */


      var _notifications_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./notifications-dialog.component.css */
      "OApB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotificationsDialogComponent = /*#__PURE__*/function () {
        function NotificationsDialogComponent() {
          _classCallCheck(this, NotificationsDialogComponent);
        }

        _createClass(NotificationsDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotificationsDialogComponent;
      }();

      NotificationsDialogComponent.ctorParameters = function () {
        return [];
      };

      NotificationsDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notifications-dialog',
        template: _raw_loader_notifications_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notifications_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NotificationsDialogComponent);
      /***/
    },

    /***/
    "r/ck":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/Dialogs/confirmation-dialog/confirmation-dialog.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ConfirmationDialogComponent */

    /***/
    function rCk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function () {
        return ConfirmationDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirmation_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirmation-dialog.component.html */
      "ktGj");
      /* harmony import */


      var _confirmation_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirmation-dialog.component.css */
      "6OaO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG"); // import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


      var ConfirmationDialogComponent = /*#__PURE__*/function () {
        function ConfirmationDialogComponent(dialogRef, dialogData) {
          _classCallCheck(this, ConfirmationDialogComponent);

          this.dialogRef = dialogRef;
          this.dialogData = dialogData;
        }

        _createClass(ConfirmationDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.dialogData); // this.dialogRef.afterClosed().subscribe(res => {
            //   console.log(res)
            // })
          }
        }]);

        return ConfirmationDialogComponent;
      }();

      ConfirmationDialogComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      ConfirmationDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirmation-dialog',
        template: _raw_loader_confirmation_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirmation_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])], ConfirmationDialogComponent);
      /***/
    },

    /***/
    "t1FH":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customElements/person-profile-card/person-profile-card.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function t1FH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"padding-bottom: 10px;\">\r\n  <mat-card>\r\n    <img mat-card-image [src]=\"UserToDisplay.PhotoURL\" [routerLink]=\"[ '/User', UserToDisplay.Id ]\" class=\"MousePointer\">\r\n    <mat-card-title [routerLink]=\"[ '/User', UserToDisplay.Id ]\" class=\"MousePointer\">{{UserToDisplay.DisplayName}}</mat-card-title>\r\n    <mat-card-content>\r\n      <p>{{UserToDisplay.About}}</p>\r\n    </mat-card-content>\r\n    <mat-card-actions align=\"end\">\r\n      <button mat-button [routerLink]=\"[ '/User', UserToDisplay.Id ]\">Ver perfil</button>\r\n      <button mat-button [routerLink]=\"[ '/Messages', UserToDisplay.Id ]\">Mensaje</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>";
      /***/
    },

    /***/
    "tHCZ":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Dialogs/messages-dialog/chat-head/chat-head.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tHCZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"Show\" dense>\r\n  <ng-container *ngIf=\"User$ | async as User; else UserLoading\">\r\n    <mat-list-item [routerLink]=\"[ '/Messages', User.Id ]\" routerLinkActive=\"active-route\"\r\n      class=\"user-tab MousePointer\">\r\n      <img mat-list-avatar [src]=\"User.PhotoURL\">\r\n      <h4 mat-line>{{User.DisplayName}}</h4>\r\n      <p mat-line>\r\n        <ng-container *ngIf=\"LastMessage$ | async as LastMessage; else LastMessageLoading\">\r\n          <ng-container *ngIf=\"LastMessage?.SentOn; else NoLastmessage\">\r\n            <span *ngIf=\"LastMessage.Status==0\"><i class=\"fal fa-spinner fa-spin\"></i> </span>\r\n            <span *ngIf=\"LastMessage.Status==1 && LastMessage.FromId==MyAuth.LoggedUser?.Id\">\r\n              <i class=\"fal fa-check\"></i>\r\n            </span>\r\n            <span *ngIf=\"LastMessage.Status==2 && LastMessage.FromId==MyAuth.LoggedUser?.Id\">\r\n              <i class=\"fal fa-check-double\"></i>\r\n            </span>\r\n            <span style=\"color: blue\" *ngIf=\"LastMessage.Status==3 && LastMessage.FromId==MyAuth.LoggedUser?.Id\">\r\n              <i class=\"fal fa-check-double\"></i>\r\n            </span>\r\n            <span>{{' '+LastMessage.Text}}</span>\r\n          </ng-container>\r\n          <ng-template #NoLastmessage>\r\n          </ng-template>\r\n        </ng-container>\r\n      </p>\r\n      <ng-template #LastMessageLoading>\r\n        Loading...\r\n      </ng-template>\r\n    </mat-list-item>\r\n  </ng-container>\r\n  <ng-template #UserLoading>\r\n    <mat-list-item>\r\n      <span mat-list-avatar class=\"div-center\"><i class=\"fal fa-spinner fa-spin\"></i></span>\r\n      <p mat-line>Loading...</p>\r\n    </mat-list-item>\r\n  </ng-template>\r\n</ng-container>";
      /***/
    },

    /***/
    "tXAP":
    /*!***********************************************************************!*\
      !*** ./src/app/components/home/left-column/left-column.component.css ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function tXAP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ColorOnHover:hover {\r\n   background-color: #3f51b5; \r\n}\r\n\r\n.active-route {\r\n   border-color: #ffffff !important;\r\n   border-left: 5px solid transparent;\r\n}\r\n\r\nspan{\r\n   font-size: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnQtY29sdW1uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyx5QkFBeUI7QUFDNUI7O0FBRUE7R0FDRyxnQ0FBZ0M7R0FDaEMsa0NBQWtDO0FBQ3JDOztBQUVBO0dBQ0csZUFBZTtBQUNsQiIsImZpbGUiOiJsZWZ0LWNvbHVtbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNvbG9yT25Ib3Zlcjpob3ZlciB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7IFxyXG59XHJcblxyXG4uYWN0aXZlLXJvdXRlIHtcclxuICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgIGZvbnQtc2l6ZTogNTBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "vEFL":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/recuperar/recuperar.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vEFL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container-fluid\" id=\"grid\">\r\n    <div class=\"col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\r\n      <form [formGroup]=\"FormRecuperar\" (submit)=\"OnSubmit()\">\r\n        <mat-card class=\"FullCard\">\r\n          <mat-card-header>\r\n            <mat-card-title>Recuperar contraseña</mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <div class=\"controls-container\">\r\n              <mat-form-field class=\"form-field\">\r\n                <input matInput placeholder=\"Correo electronico\" formControlName=\"Email\" type=\"email\" required>\r\n                <mat-hint>{{EmairrorMessalEge}}</mat-hint> \r\n                 <mat-error *ngIf=\"FormRecuperar.controls.Email.hasError('required')\">\r\n                  Su correo es <strong>obligatorio</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <button mat-raised-button [disabled]=\"FormRecuperar.pristine || FormRecuperar.invalid\" type=\"submit\">\r\n              <span *ngIf=\"!Loading\">Recuperar</span>\r\n              <span *ngIf=\"Loading\" style=\"margin:0 10px;\"><i class=\"fal fa-spinner fa-spin\"></i></span>\r\n            </button>\r\n\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </form>\r\n    </div>\r\n  </div>\r\n";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _components_auth_recuperar_recuperar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/auth/recuperar/recuperar */
      "vbY1");
      /* harmony import */


      var _components_auth_verificar_verificar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/auth/verificar/verificar.component */
      "9ryv");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | Modules-FeatureModules-home-module */
          "Modules-FeatureModules-home-module").then(__webpack_require__.bind(null,
          /*! ./Modules/FeatureModules/home.module */
          "d4Jw")).then(function (m) {
            return m.HomeModule;
          });
        }
      }, {
        path: 'Auth',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | Modules-FeatureModules-Authentication-module */
          [__webpack_require__.e("default~Modules-FeatureModules-Authentication-module~Modules-FeatureModules-user-profile-module"), __webpack_require__.e("Modules-FeatureModules-Authentication-module")]).then(__webpack_require__.bind(null,
          /*! ./Modules/FeatureModules/Authentication.module */
          "+13j")).then(function (m) {
            return m.AuthenticationModule;
          });
        }
      }, {
        path: 'User',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | Modules-FeatureModules-user-profile-module */
          [__webpack_require__.e("default~Modules-FeatureModules-Authentication-module~Modules-FeatureModules-user-profile-module"), __webpack_require__.e("Modules-FeatureModules-user-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./Modules/FeatureModules/user-profile.module */
          "CrA4")).then(function (m) {
            return m.UserProfileModule;
          });
        }
      }, {
        path: 'Messages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | Modules-FeatureModules-messages-module */
          "Modules-FeatureModules-messages-module").then(__webpack_require__.bind(null,
          /*! ./Modules/FeatureModules/messages.module */
          "GIkD")).then(function (m) {
            return m.MessagesModule;
          });
        }
      }, {
        path: '',
        redirectTo: '/Home',
        pathMatch: 'full'
      }, {
        path: 'recuperar',
        component: _components_auth_recuperar_recuperar__WEBPACK_IMPORTED_MODULE_3__["RecuperarComponent"]
      }, {
        path: 'Verificar',
        component: _components_auth_verificar_verificar_component__WEBPACK_IMPORTED_MODULE_4__["VerificarComponent"]
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vbY1":
    /*!********************************************************!*\
      !*** ./src/app/components/auth/recuperar/recuperar.ts ***!
      \********************************************************/

    /*! exports provided: RecuperarComponent */

    /***/
    function vbY1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecuperarComponent", function () {
        return RecuperarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_recuperar_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./recuperar.html */
      "vEFL");
      /* harmony import */


      var _recuperar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recuperar.css */
      "7UEU");
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

      var RecuperarComponent = /*#__PURE__*/function () {
        function RecuperarComponent(fb, myAuth) {
          _classCallCheck(this, RecuperarComponent);

          this.fb = fb;
          this.myAuth = myAuth;
          this.NetworkErrorCount = 0;
          this.EmairrorMessalEge = '';
          this.Loading = false;
        }

        _createClass(RecuperarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.FormRecuperar = this.fb.group({
              Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
            });
          }
        }, {
          key: "OnSubmit",
          value: function OnSubmit() {
            var _this16 = this;

            this.Loading = true;
            this.myAuth.afAuth.sendPasswordResetEmail(this.FormRecuperar.controls['Email'].value).then(function (response) {
              // user.sendPasswordResetEmail(this.FormRecuperar.value.Email).then(() => {
              _this16.Loading = false;

              _this16.myAuth.Notify.openSnackBar('Correo enviado correctamente, revise su casilla', ''); // }).catch((error: any) => {
              //   this.Loading = false;
              //   this.myAuth.Notify.openSnackBar('Hubo un error al recuperar su cuenta', '');
              // });


              _this16.myAuth.NavTo('/Auth/Login');
            }, function (error) {
              _this16.Loading = false;

              _this16.myAuth.Notify.openSnackBar('Hubo un error al recuperar su cuenta', '');
            });
          }
        }]);

        return RecuperarComponent;
      }();

      RecuperarComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__["MyAuthService"]
        }];
      };

      RecuperarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recuperar',
        template: _raw_loader_recuperar_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recuperar_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_5__["MyAuthService"]])], RecuperarComponent);
      /***/
    },

    /***/
    "xhhR":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Dialogs/notifications-dialog/notifications-dialog.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xhhR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "yCc1":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/Dialogs/messages-dialog/chat-head/chat-head.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ChatHeadComponent */

    /***/
    function yCc1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatHeadComponent", function () {
        return ChatHeadComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chat_head_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chat-head.component.html */
      "tHCZ");
      /* harmony import */


      var _chat_head_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chat-head.component.css */
      "JyHi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Services/my-auth.service */
      "Sm6f");
      /* harmony import */


      var src_app_Services_chats_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/Services/chats.service */
      "3Zh1");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ChatHeadComponent = /*#__PURE__*/function () {
        function ChatHeadComponent(MyAuth, ChatSrv) {
          _classCallCheck(this, ChatHeadComponent);

          this.MyAuth = MyAuth;
          this.ChatSrv = ChatSrv;
          this.Show = true;
        }

        _createClass(ChatHeadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.LastMessage$ = this.ChatSrv.GetLastMessage(this.UserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (r) {
              if (!r.Text) {// this.Show = false;
              }
            }));
            this.User$ = this.MyAuth.GetAUserInfoFromStore(this.UserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (r) {
              if (!r) {
                _this17.Show = false;
              }
            }));
          }
        }]);

        return ChatHeadComponent;
      }();

      ChatHeadComponent.ctorParameters = function () {
        return [{
          type: src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"]
        }, {
          type: src_app_Services_chats_service__WEBPACK_IMPORTED_MODULE_5__["ChatsService"]
        }];
      };

      ChatHeadComponent.propDecorators = {
        UserId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ChatHeadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat-head',
        template: _raw_loader_chat_head_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_head_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_my_auth_service__WEBPACK_IMPORTED_MODULE_4__["MyAuthService"], src_app_Services_chats_service__WEBPACK_IMPORTED_MODULE_5__["ChatsService"]])], ChatHeadComponent);
      /***/
    },

    /***/
    "yWh8":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/customElements/my-loader/my-loader.component.css ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function yWh8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sk-circle {\r\n    /* margin: 100px auto; */\r\n    width: 40px;\r\n    height: 40px;\r\n    position: relative;\r\n  }\r\n  .sk-circle .sk-child {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n  }\r\n  .sk-circle .sk-child:before {\r\n    content: '';\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 15%;\r\n    height: 15%;\r\n    background-color: #333;\r\n    border-radius: 100%;\r\n    animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\r\n  }\r\n  .sk-circle .sk-circle2 {\r\n    transform: rotate(30deg); }\r\n  .sk-circle .sk-circle3 {\r\n    transform: rotate(60deg); }\r\n  .sk-circle .sk-circle4 {\r\n    transform: rotate(90deg); }\r\n  .sk-circle .sk-circle5 {\r\n    transform: rotate(120deg); }\r\n  .sk-circle .sk-circle6 {\r\n    transform: rotate(150deg); }\r\n  .sk-circle .sk-circle7 {\r\n    transform: rotate(180deg); }\r\n  .sk-circle .sk-circle8 {\r\n    transform: rotate(210deg); }\r\n  .sk-circle .sk-circle9 {\r\n    transform: rotate(240deg); }\r\n  .sk-circle .sk-circle10 {\r\n    transform: rotate(270deg); }\r\n  .sk-circle .sk-circle11 {\r\n    transform: rotate(300deg); }\r\n  .sk-circle .sk-circle12 {\r\n    transform: rotate(330deg); }\r\n  .sk-circle .sk-circle2:before {\r\n    animation-delay: -1.1s; }\r\n  .sk-circle .sk-circle3:before {\r\n    animation-delay: -1s; }\r\n  .sk-circle .sk-circle4:before {\r\n    animation-delay: -0.9s; }\r\n  .sk-circle .sk-circle5:before {\r\n    animation-delay: -0.8s; }\r\n  .sk-circle .sk-circle6:before {\r\n    animation-delay: -0.7s; }\r\n  .sk-circle .sk-circle7:before {\r\n    animation-delay: -0.6s; }\r\n  .sk-circle .sk-circle8:before {\r\n    animation-delay: -0.5s; }\r\n  .sk-circle .sk-circle9:before {\r\n    animation-delay: -0.4s; }\r\n  .sk-circle .sk-circle10:before {\r\n    animation-delay: -0.3s; }\r\n  .sk-circle .sk-circle11:before {\r\n    animation-delay: -0.2s; }\r\n  .sk-circle .sk-circle12:before {\r\n    animation-delay: -0.1s; }\r\n  @keyframes sk-circleBounceDelay {\r\n    0%, 80%, 100% {\r\n      transform: scale(0);\r\n    } 40% {\r\n      transform: scale(1);\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtFQUNSO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFFWCw4REFBOEQ7RUFDeEU7RUFDQTtJQUdVLHdCQUF3QixFQUFFO0VBQ3BDO0lBR1Usd0JBQXdCLEVBQUU7RUFDcEM7SUFHVSx3QkFBd0IsRUFBRTtFQUNwQztJQUdVLHlCQUF5QixFQUFFO0VBQ3JDO0lBR1UseUJBQXlCLEVBQUU7RUFDckM7SUFHVSx5QkFBeUIsRUFBRTtFQUNyQztJQUdVLHlCQUF5QixFQUFFO0VBQ3JDO0lBR1UseUJBQXlCLEVBQUU7RUFDckM7SUFHVSx5QkFBeUIsRUFBRTtFQUNyQztJQUdVLHlCQUF5QixFQUFFO0VBQ3JDO0lBR1UseUJBQXlCLEVBQUU7RUFDckM7SUFFVSxzQkFBc0IsRUFBRTtFQUNsQztJQUVVLG9CQUFvQixFQUFFO0VBQ2hDO0lBRVUsc0JBQXNCLEVBQUU7RUFDbEM7SUFFVSxzQkFBc0IsRUFBRTtFQUNsQztJQUVVLHNCQUFzQixFQUFFO0VBQ2xDO0lBRVUsc0JBQXNCLEVBQUU7RUFDbEM7SUFFVSxzQkFBc0IsRUFBRTtFQUNsQztJQUVVLHNCQUFzQixFQUFFO0VBQ2xDO0lBRVUsc0JBQXNCLEVBQUU7RUFDbEM7SUFFVSxzQkFBc0IsRUFBRTtFQUNsQztJQUVVLHNCQUFzQixFQUFFO0VBWWxDO0lBQ0U7TUFFVSxtQkFBbUI7SUFDN0IsRUFBRTtNQUVRLG1CQUFtQjtJQUM3QjtFQUNGIiwiZmlsZSI6Im15LWxvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNrLWNpcmNsZSB7XHJcbiAgICAvKiBtYXJnaW46IDEwMHB4IGF1dG87ICovXHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAuc2stY2lyY2xlIC5zay1jaGlsZDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHNrLWNpcmNsZUJvdW5jZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMiB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7IH1cclxuICAuc2stY2lyY2xlIC5zay1jaXJjbGUzIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTsgfVxyXG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7IH1cclxuICAuc2stY2lyY2xlIC5zay1jaXJjbGU2IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTsgfVxyXG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTcge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlOCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7IH1cclxuICAuc2stY2lyY2xlIC5zay1jaXJjbGU5IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTsgfVxyXG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTEwIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxyXG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTExIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTsgfVxyXG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTEyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTsgfVxyXG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xczsgfVxyXG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTM6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTFzOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNDpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNTpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjdzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNzpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjZzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjZzOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlODpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlOTpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTA6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zczsgfVxyXG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTExOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMnM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7IH1cclxuICAuc2stY2lyY2xlIC5zay1jaXJjbGUxMjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjFzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjFzOyB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5IHtcclxuICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH0gNDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2stY2lyY2xlQm91bmNlRGVsYXkge1xyXG4gICAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfSA0MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9Il19 */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map