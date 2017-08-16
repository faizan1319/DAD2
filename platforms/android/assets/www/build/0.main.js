webpackJsonp([0],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(286);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupModule = (function () {
    function SignupModule() {
    }
    return SignupModule;
}());
SignupModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* Signup */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* Signup */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* Signup */]
        ]
    })
], SignupModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_services__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { SignupValidators } from "../../validators/signupValidations";

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Signup = Signup_1 = (function () {
    function Signup(navCtrl, navParams, toastCtrl, formBuilder, 
        // public signupVal    : SignupValidators,
        service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.service = service;
        Signup_1.service = service;
        this.inputSection = formBuilder.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(20)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(20)]],
            number: [''],
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(20)], Signup_1.checkForDuplicateUsername],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].email], Signup_1.checkForDuplicateEmail],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(8)]]
            // confirmPassword : ['', this.checkConfirmPassword]
        });
    }
    Signup.prototype.ionViewDidLoad = function () {
        console.log("signup page did load");
    };
    // checkConfirmPassword(control: FormControl) {
    //   if(control.value == this.inputSection.controls.password) return null;
    //   else return true;
    // }
    Signup.checkForDuplicateEmail = function (control) {
        return new Promise(function (resolve) {
            Signup_1.service.checkForEmailAlreadyExist(control.value)
                .subscribe(function (data) {
                console.log(data);
                if (data == true) {
                    // console.log('i am in data ture check and the data is: ', data);
                    resolve({
                        "username taken!": true
                    });
                }
                else {
                    // console.log('i am in data false check');
                    resolve(null);
                }
            });
        });
    };
    Signup.checkForDuplicateUsername = function (control) {
        return new Promise(function (resolve) {
            Signup_1.service.checkForDuplicateUsername(control.value)
                .subscribe(function (data) {
                console.log(data);
                if (data == true) {
                    console.log('i am in data ture check and the data is: ', data);
                    resolve({
                        "username taken!": true
                    });
                }
                else {
                    console.log('i am in data false check');
                    resolve(null);
                }
            });
        });
    };
    Signup.prototype.enrollNewUser = function () {
        var _this = this;
        console.log('hey there');
        console.log(this.inputSection.get('firstname').value);
        console.log(this.inputSection.value);
        var body = this.inputSection.value;
        // console.log('here is the body: ',body);
        // let body = {
        //   firstname: this.firstname,
        //   lastname : this.lastname,
        //   username : this.username,
        //   email : this.email,
        //   password : this.password
        // }
        this.service.newUser(body)
            .subscribe(function (data) {
            _this.navCtrl.setRoot('Login', {}, {}, function () {
                var toast = _this.toastCtrl.create({
                    message: data.message,
                    showCloseButton: true,
                    closeButtonText: "Ok"
                });
                toast.present();
            });
        });
    };
    return Signup;
}());
Signup = Signup_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"E:\MapPractice\src\pages\signup\signup.html"*/'<!--\n  Generated template for the Signup page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="inputSection" (ngSubmit)="enrollNewUser()">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>    \n          <ion-item>\n            <ion-input type="text" placeholder="Firstname" formControlName="firstname" [class.invalid]="!inputSection.controls.firstname.valid && inputSection.controls.firstname.dirty"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-item>\n            <ion-input type="text" placeholder="Lastname" formControlName="lastname"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>          \n            <ion-input type="number" placeholder="Phone Number (03XXXXXXXXX)" formControlName="number"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row> \n\n      <ion-row>\n        <ion-col>\n          <ion-item>          \n            <ion-input type="text" placeholder="Username" formControlName="username" [class.meri]="!inputSection.controls.username.valid && inputSection.controls.username.touched"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <!-- <ion-item *ngIf="!inputSection.controls.username.valid  && (inputSection.controls.username.dirty)">\n                <p>Please enter a valid name.</p>\n      </ion-item> -->\n\n      <ion-row>\n        <ion-col>\n          <ion-item>          \n            <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-input type="password" placeholder="Password" formControlName="password" [(ngModel)]=\'pass\'></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row> \n\n    </ion-grid>\n  </form>\n\n  <div class="signup-button">\n    <button ion-button block (tap)="enrollNewUser()" [disabled]=\'!inputSection.valid\'>Sign Up</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_services__["a" /* UserServices */]])
], Signup);

var Signup_1;
//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map