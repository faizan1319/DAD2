webpackJsonp([3],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(301);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    return SettingsPageModule;
}());
SettingsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]
        ]
    })
], SettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
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
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.userData = this.navParams.get('userData');
        this.changePasswordForm = this.formBuilder.group({
            currentPassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required], []],
            newPassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required], []],
            confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required], []]
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
        console.log('user data: ', this.userData);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"E:\MapPractice\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'bg\'>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="image-upload-div">\n      <ion-item>\n        <ion-avatar>\n          <img src="assets/img/img_add.png" id="image-upload">\n        </ion-avatar>\n      </ion-item>\n    </div>\n\n    <div class="separator"></div>\n\n    <div class="info-div">\n        <ion-row style="padding:10px">\n            <ion-col>\n                <h3>General Info: </h3>\n            </ion-col>  \n          </ion-row> \n      <ion-row>\n        <ion-item>\n          <ion-label>First Name:</ion-label>\n          <ion-input type="text" [(ngModel)]=\'userData.firstname\'></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n          <ion-label>Last Name:</ion-label>\n          <ion-input type="text" [(ngModel)]=\'userData.lastname\'></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n          <ion-label>Username:</ion-label>\n          <ion-input type="text" [(ngModel)]=\'userData.username\' disabled></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n            <ion-label>Email:</ion-label>\n            <ion-input type="text" [(ngModel)]=\'userData.email\'></ion-input>\n        </ion-item>\n      </ion-row>\n    </div>\n    \n    <div class="separator"></div>\n\n    <div class="subscriptions">\n      <ion-row>\n        <ion-col>\n            <h3>Subscriptions: </h3>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\'add-circle\' id=\'add-icon\'></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div class="subs" *ngFor = \'let subscription of userData.userSubscriptions\'>\n        <button ion-button icon-only round>\n            <ion-icon name="checkmark-circle">{{subscription.categoryName}}</ion-icon>\n        </button>\n      </div>\n    </div>\n\n    <div class="separator"></div>\n\n    <div class="change-pass" [formGroup] = \'changePasswordForm\'>\n      <ion-row style="padding:10px">\n        <ion-col>\n            <h3>Change Password: </h3>\n        </ion-col>  \n      </ion-row> \n      <ion-row>\n        <ion-item>\n          <!-- <ion-label>Current Password</ion-label> -->\n          <ion-input placeholder=\'Current Password\' type="password" formControlName =\'currentPassword\'></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n          <!-- <ion-label>New Password</ion-label> -->\n          <ion-input placeholder=\'New Password\' type="password" formControlName = \'newPassword\'></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n          <!-- <ion-label>Re-Type New Password</ion-label> -->\n          <ion-input placeholder=\'Re-Type New Password\' type="password" formControlName = \'confirmPassword\'></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row style="height:15px;"></ion-row>\n      <ion-row>\n        <button ion-button round id="change-button" [disabled]=\'!changePasswordForm.valid\' (tap)=\'changePaasword()\'>Change!</button>\n      </ion-row>\n\n\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map