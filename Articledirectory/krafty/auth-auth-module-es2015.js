(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-xs-offset-3\">\n        <app-alert [message]=\"error\" *ngIf=\"error\" (close)=\"onClose()\"></app-alert>\n        <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n            <app-loading-spinner></app-loading-spinner>\n        </div>\n      <div class=\"text-center\" *ngIf=\"!isLoading\">\n           <div class=\"header-title\">\n              <h1>\n                LOGIN\n              </h1>\n              <h4>\n                 Login or register from here to gain access.\n              </h4>\n           </div>\n        </div>\n      </div>\n    </div>\n    \n   <div class=\"row\">\n    <div class=\"col-xs-4 col-xs-offset-4 text-center\">\n        <div class=\"form\">\n            <form  #authform=\"ngForm\" (ngSubmit)=\"onSubmit(authform)\" *ngIf=\"!isLoading\">\n                <div class=\"form-group\">\n                    <input type=\"text\" id=\"username\" class=\"form-control\" placeholder=\"Username\"\n                    ngModel name=\"username\" required #username=\"ngModel\">\n                    <span *ngIf=\"!username.valid && username.touched\" class=\"help-block\">This field is required!</span>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" id=\"password\" placeholder=\"Password\" class=\"form-control\"\n                    ngModel name=\"password\" \n                    required pattern=\"((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{6,50})\" #password=\"ngModel\">\n                    <span *ngIf=\"!password.valid && password.touched\" class=\"help-block\">\n                        Password requires at least 1 lower case character, 1 upper case character, 1 number, \n                        1 special character and must be at least 6 characters and at most 50\n                    </span>              \n                </div>\n                <div class=\"text-center\">\n                    <button type=\"submit\" class=\" btn btn-block send-button\"\n                    [disabled]=\"!authform.valid\">LOGIN</button>\n                </div>\n                <br>\n                <div class=\"text-center\">\n                    <button type=\"button\" class=\" btn btn-block switch-button\"\n                    (click)=\"onSwitchMode()\">SWITCH TO SIGNUP</button>\n                </div>\n                <br />\n            </form>\n        </div>\n   </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-xs-offset-3\">\n        <app-alert [message]=\"error\" *ngIf=\"error\" (close)=\"onClose()\"></app-alert>\n        <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n            <app-loading-spinner></app-loading-spinner>\n        </div>\n      <div class=\"text-center\" *ngIf=\"!isLoading\">\n           <div class=\"header-title\">\n              <h1>\n                SIGNUP\n              </h1>\n              <h4>\n                 Login or register from here to gain access.\n              </h4>\n           </div>\n        </div>\n      </div>\n    </div>\n    \n   <div class=\"row\">\n    <div class=\"col-xs-4 col-xs-offset-4 text-center\">\n        <div class=\"form\">\n            <form  #authform=\"ngForm\" (ngSubmit)=\"onSubmit(authform)\" *ngIf=\"!isLoading\">\n                <div class=\"form-group\">\n                    <input type=\"text\" id=\"username\" class=\"form-control\" placeholder=\"Username\"\n                    ngModel name=\"username\" required #username=\"ngModel\">\n                    <span *ngIf=\"!username.valid && username.touched\" class=\"help-block\">This field is required!</span>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" id=\"password\" placeholder=\"Password\" class=\"form-control\"\n                    ngModel name=\"password\" \n                    required pattern=\"((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{6,50})\" #password=\"ngModel\">\n                    <span *ngIf=\"!password.valid && password.touched\" class=\"help-block\">\n                        Password requires at least 1 lower case character, 1 upper case character, 1 number, \n                        1 special character and must be at least 6 characters and at most 50\n                    </span>              \n                </div>\n                <div class=\"text-center\">\n                    <button type=\"submit\" class=\" btn btn-block send-button\"\n                    [disabled]=\"!authform.valid\">SIGNUP</button>\n                </div>\n                <br>\n                <div class=\"text-center\">\n                    <button type=\"button\" class=\" btn btn-block switch-button\"\n                    (click)=\"onSwitchMode()\">SWITCH TO LOGIN</button>\n                </div>\n                <br />    \n                <h5 class=\"small mt-3\">\n                    By signing up, you are indicating that you have read and agreed to the \n                    <a style=\"cursor: pointer;text-decoration: none;\" >Terms of Use</a> and \n                    <a style=\"cursor: pointer;text-decoration: none\" >Privacy Policy</a>.\n                </h5>\n            </form>\n        </div>\n   </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reverse_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reverse-auth.guard */ "./src/app/auth/reverse-auth.guard.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");







const routes = [
    { path: '', canActivate: [_reverse_auth_guard__WEBPACK_IMPORTED_MODULE_3__["ReverseAuthGuard"]], component: _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"], children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
            { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] }
        ] }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthComponent = class AuthComponent {
    ngOnInit() {
    }
};
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")).default]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Bungee|Bungee+Inline|Monoton&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Salsa|Titan+One&display=swap');\r\ninput.ng-invalid.ng-touched {\r\n    border: 1px solid tomato;\r\n}\r\nh1{\r\n    font-family: 'Bungee', cursive;\r\n}\r\nh4 {\r\n    font-family: 'Bungee Inline', cursive;\r\n}\r\nspan{\r\n    text-align: left;\r\n    font-family: 'Salsa', cursive;\r\n}\r\nbutton {\r\n    font-family: 'Titan One', cursive;\r\n}\r\n.container {\r\n    margin-top:20vh;\r\n    margin-bottom: 20vh;\r\n}\r\n.send-button{\r\n    background: -webkit-gradient(linear, left top, right top, from(#0cebeb), color-stop(#20e3b2), to(#29ffc6));\r\n    background: linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6);\r\n    width:100%;\r\n    font-weight: 600;\r\n    color:black;\r\n    padding: 8px 25px;\r\n    }\r\n.switch-button {\r\n    background: -webkit-gradient(linear, left top, right top, from(#ff9966), to(#ff5e62));\r\n    background: linear-gradient(to right, #ff9966, #ff5e62);\r\n    width:100%;\r\n    font-weight: 600;\r\n    color:black;\r\n    padding: 8px 25px;\r\n    }\r\n.header-title{\r\n    margin: 3rem 0;\r\n    }\r\nbutton[disabled]{\r\n    opacity: 1;\r\n}\r\n::-webkit-input-placeholder{\r\n\tcolor:indianred;\r\n\tfont-family: 'Bungee Inline';\r\n  }\r\n::-moz-placeholder{\r\n\tcolor:indianred;\r\n\tfont-family: 'Bungee Inline';\r\n  }\r\n::-ms-input-placeholder{\r\n\tcolor:indianred;\r\n\tfont-family: 'Bungee Inline';\r\n  }\r\n::placeholder{\r\n\tcolor:indianred;\r\n\tfont-family: 'Bungee Inline';\r\n  }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdHQUFnRztBQUNoRyxtRkFBbUY7QUFFbkY7SUFDSSx3QkFBd0I7QUFDNUI7QUFHQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0kscUNBQXFDO0FBQ3pDO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLDBHQUFnRTtJQUFoRSxnRUFBZ0U7SUFDaEUsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCO0FBRUo7SUFDSSxxRkFBdUQ7SUFBdkQsdURBQXVEO0lBQ3ZELFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQjtBQUVKO0lBQ0ksY0FBYztJQUNkO0FBR0o7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtDQUNDLGVBQWU7Q0FDZiw0QkFBNEI7RUFDM0I7QUFIRjtDQUNDLGVBQWU7Q0FDZiw0QkFBNEI7RUFDM0I7QUFIRjtDQUNDLGVBQWU7Q0FDZiw0QkFBNEI7RUFDM0I7QUFIRjtDQUNDLGVBQWU7Q0FDZiw0QkFBNEI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJ1bmdlZXxCdW5nZWUrSW5saW5lfE1vbm90b24mZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U2Fsc2F8VGl0YW4rT25lJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRvbWF0bztcclxufVxyXG5cclxuXHJcbmgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlO1xyXG59XHJcbmg0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQnVuZ2VlIElubGluZScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYWxzYScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ1RpdGFuIE9uZScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDoyMHZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjB2aDtcclxufVxyXG5cclxuLnNlbmQtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMGNlYmViLCAjMjBlM2IyLCAjMjlmZmM2KTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMjVweDtcclxuICAgIH1cclxuXHJcbi5zd2l0Y2gtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmOTk2NiwgI2ZmNWU2Mik7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgcGFkZGluZzogOHB4IDI1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuLmhlYWRlci10aXRsZXtcclxuICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5idXR0b25bZGlzYWJsZWRde1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlcntcclxuXHRjb2xvcjppbmRpYW5yZWQ7XHJcblx0Zm9udC1mYW1pbHk6ICdCdW5nZWUgSW5saW5lJztcclxuICB9XHJcbiAgICAiXX0= */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
        this.error = null;
    }
    ngOnInit() {
    }
    onClose() {
        this.error = null;
    }
    onSwitchMode() {
        this.router.navigate(['/auth', 'signup']);
    }
    onSubmit(form) {
        const username = form.value.username;
        const password = form.value.password;
        this.isLoading = true;
        this.authService.login(username, password).subscribe(resData => {
            if (!resData.valid) {
                this.error = "An error Occured! Invalid Username or Password";
            }
            else {
                this.error = null;
                this.router.navigate(['/articles']);
            }
            this.isLoading = false;
        });
        form.reset();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/reverse-auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/auth/reverse-auth.guard.ts ***!
  \********************************************/
/*! exports provided: ReverseAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReverseAuthGuard", function() { return ReverseAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ReverseAuthGuard = class ReverseAuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        const user = JSON.parse(sessionStorage.getItem('userData'));
        if (user) {
            this.router.navigate(['/articles']);
            return false;
        }
        else {
            return true;
        }
    }
};
ReverseAuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ReverseAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ReverseAuthGuard);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Bungee|Bungee+Inline|Monoton&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Salsa|Titan+One&display=swap');\r\ninput.ng-invalid.ng-touched {\r\n    border: 1px solid tomato;\r\n}\r\nh1{\r\n    font-family: 'Bungee', cursive;\r\n}\r\nh4 {\r\n    font-family: 'Bungee Inline', cursive;\r\n}\r\nh5 {\r\n    font-family: 'Salsa', cursive;\r\n}\r\nspan{\r\n    text-align: left;\r\n    font-family: 'Salsa', cursive;\r\n}\r\nbutton {\r\n    font-family: 'Titan One', cursive;\r\n}\r\n.container {\r\n    margin-top:20vh;\r\n    margin-bottom: 20vh;\r\n}\r\n.send-button{\r\n    background: -webkit-gradient(linear, left top, right top, from(#0cebeb), color-stop(#20e3b2), to(#29ffc6));\r\n    background: linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6);\r\n    width:100%;\r\n    font-weight: 600;\r\n    color:black;\r\n    padding: 8px 25px;\r\n    }\r\n.switch-button {\r\n    background: -webkit-gradient(linear, left top, right top, from(#ff9966), to(#ff5e62));\r\n    background: linear-gradient(to right, #ff9966, #ff5e62);\r\n    width:100%;\r\n    font-weight: 600;\r\n    color:black;\r\n    padding: 8px 25px;\r\n    }\r\n.header-title{\r\n    margin: 3rem 0;\r\n    }\r\nbutton[disabled]{\r\n    opacity: 1;\r\n}\r\n::-webkit-input-placeholder{\r\n\tcolor:indianred;\r\n\tfont-family: 'Bungee Inline';\r\n  }\r\n::-moz-placeholder{\r\n\tcolor:indianred;\r\n\tfont-family: 'Bungee Inline';\r\n  }\r\n::-ms-input-placeholder{\r\n\tcolor:indianred;\r\n\tfont-family: 'Bungee Inline';\r\n  }\r\n::placeholder{\r\n\tcolor:indianred;\r\n\tfont-family: 'Bungee Inline';\r\n  }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0dBQWdHO0FBQ2hHLG1GQUFtRjtBQUVuRjtJQUNJLHdCQUF3QjtBQUM1QjtBQUdBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSwwR0FBZ0U7SUFBaEUsZ0VBQWdFO0lBQ2hFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQjtBQUVKO0lBQ0kscUZBQXVEO0lBQXZELHVEQUF1RDtJQUN2RCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakI7QUFFSjtJQUNJLGNBQWM7SUFDZDtBQUdKO0lBQ0ksVUFBVTtBQUNkO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsNEJBQTRCO0VBQzNCO0FBSEY7Q0FDQyxlQUFlO0NBQ2YsNEJBQTRCO0VBQzNCO0FBSEY7Q0FDQyxlQUFlO0NBQ2YsNEJBQTRCO0VBQzNCO0FBSEY7Q0FDQyxlQUFlO0NBQ2YsNEJBQTRCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJ1bmdlZXxCdW5nZWUrSW5saW5lfE1vbm90b24mZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U2Fsc2F8VGl0YW4rT25lJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRvbWF0bztcclxufVxyXG5cclxuXHJcbmgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlO1xyXG59XHJcbmg0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQnVuZ2VlIElubGluZScsIGN1cnNpdmU7XHJcbn1cclxuaDUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYWxzYScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYWxzYScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ1RpdGFuIE9uZScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDoyMHZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjB2aDtcclxufVxyXG5cclxuLnNlbmQtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMGNlYmViLCAjMjBlM2IyLCAjMjlmZmM2KTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMjVweDtcclxuICAgIH1cclxuXHJcbi5zd2l0Y2gtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmOTk2NiwgI2ZmNWU2Mik7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgcGFkZGluZzogOHB4IDI1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuLmhlYWRlci10aXRsZXtcclxuICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5idXR0b25bZGlzYWJsZWRde1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlcntcclxuXHRjb2xvcjppbmRpYW5yZWQ7XHJcblx0Zm9udC1mYW1pbHk6ICdCdW5nZWUgSW5saW5lJztcclxuICB9XHJcbiAgICAiXX0= */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SignupComponent = class SignupComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
        this.error = null;
    }
    ngOnInit() {
    }
    onClose() {
        this.error = null;
    }
    onSwitchMode() {
        this.router.navigate(['/auth']);
    }
    onSubmit(form) {
        const username = form.value.username;
        const password = form.value.password;
        this.isLoading = true;
        this.authService.signup(username, password).subscribe(resData => {
            if (!resData.valid)
                this.error = "An error occured! User Already Exists";
            else {
                this.error = null;
                this.router.navigate(['/articles']);
            }
            this.isLoading = false;
        });
        form.reset();
    }
};
SignupComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map