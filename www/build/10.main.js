webpackJsonp([10],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(287);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_services__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, navParams, service, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.toastCtrl = toastCtrl;
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.userLogin = function () {
        var _this = this;
        this.service.loginUser(this.username, this.localPassword)
            .subscribe(function (data) {
            if (data.length == 2) {
                var toast = _this.toastCtrl.create({
                    message: 'Incorrect credentials! Please check your username or password.',
                    duration: 3000
                });
                toast.present();
            }
            else if (data.length == 1) {
                console.log(data);
                _this.navCtrl.setRoot('MainPage', {
                    loggedInUserId: data["0"].userId,
                    username: _this.username,
                    userType: data["0"].userType,
                    firstname: data["0"].firstname,
                    lastname: data["0"].lastname,
                    email: data["0"].email,
                    dpUrl: data["0"].dpUrl,
                    phone: data["0"].phone,
                    postCount: data["0"].postCount,
                }, {}, function () {
                    var toast = _this.toastCtrl.create({
                        message: 'See whats happeing and show others what might help them :)',
                        duration: 3000
                    });
                    toast.present();
                });
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "There is no account associated with this username.",
                    duration: 3000
                });
                toast.present();
            }
        }, function (error) {
            console.log('errorjee: ', error);
            var toast = _this.toastCtrl.create({
                message: "Server Problem! Please try later.",
                showCloseButton: true,
                closeButtonText: "Ok"
            });
            toast.present();
        });
    };
    Login.prototype.moveToSignup = function () {
        this.navCtrl.push('Signup');
    };
    return Login;
}());
Login = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\MapPractice\src\pages\login\login.html"*/'<!--\n  Generated template for the Login page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="bg">\n    <ion-title>Welcome Back</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n   <div class="separator">\n  </div>\n  <div class="logo-div">\n    <ion-item>\n      <ion-avatar>\n        <img src="assets/img/me.jpg" id="logo">\n      </ion-avatar>\n    </ion-item>\n  </div>\n\n   <div class="separator">\n  </div>\n\n  <div class=\'input-section\'>\n    <ion-item>\n      <ion-label fixed>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="localPassword"></ion-input>\n    </ion-item>\n  </div>\n\n  <div class="separator">\n  </div>\n\n  <div class="login-button">\n    <button ion-button block (tap)=\'userLogin()\'>Sign In</button>\n  </div>\n\n  <!-- <div class="signup-button">\n    <button ion-button block (tap)=\'checking()\'>idhr</button>\n  </div>  -->\n\n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_services__["a" /* UserServices */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map