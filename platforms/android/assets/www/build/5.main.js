webpackJsonp([5],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsModule = (function () {
    function NotificationsModule() {
    }
    return NotificationsModule;
}());
NotificationsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* Notifications */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* Notifications */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* Notifications */]
        ]
    })
], NotificationsModule);

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notifications; });
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
 * Generated class for the Notifications page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Notifications = (function () {
    function Notifications(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Notifications.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Notifications');
    };
    return Notifications;
}());
Notifications = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"E:\MapPractice\src\pages\notifications\notifications.html"*/'<!--\n  Generated template for the Notifications page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>notifications</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/me.jpg">\n          </ion-avatar>\n          <h2>Faizan Khan</h2>\n          <p>just posted a new post.</p>\n          <ion-note>2m</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image1.jpg">\n          </ion-thumbnail>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/daniyal.jpg">\n          </ion-avatar>\n          <h2>Daniyal</h2>\n          <p>suggested on your post.</p>\n          <ion-note>4h</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image2.jpg">\n          </ion-thumbnail>\n        </ion-item>\n\n    <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/me.jpg">\n          </ion-avatar>\n          <h2>Faizan Khan</h2>\n          <p>just posted a new post.</p>\n          <ion-note>2m</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image1.jpg">\n          </ion-thumbnail>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/daniyal.jpg">\n          </ion-avatar>\n          <h2>Daniyal</h2>\n          <p>suggested on your post.</p>\n          <ion-note>4h</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image2.jpg">\n          </ion-thumbnail>\n        </ion-item>\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/me.jpg">\n          </ion-avatar>\n          <h2>Faizan Khan</h2>\n          <p>just posted a new post.</p>\n          <ion-note>2m</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image1.jpg">\n          </ion-thumbnail>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/daniyal.jpg">\n          </ion-avatar>\n          <h2>Daniyal</h2>\n          <p>suggested on your post.</p>\n          <ion-note>4h</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image2.jpg">\n          </ion-thumbnail>\n        </ion-item>\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/me.jpg">\n          </ion-avatar>\n          <h2>Faizan Khan</h2>\n          <p>just posted a new post.</p>\n          <ion-note>2m</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image1.jpg">\n          </ion-thumbnail>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/daniyal.jpg">\n          </ion-avatar>\n          <h2>Daniyal</h2>\n          <p>suggested on your post.</p>\n          <ion-note>4h</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image2.jpg">\n          </ion-thumbnail>\n        </ion-item>\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/me.jpg">\n          </ion-avatar>\n          <h2>Faizan Khan</h2>\n          <p>just posted a new post.</p>\n          <ion-note>2m</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image1.jpg">\n          </ion-thumbnail>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/daniyal.jpg">\n          </ion-avatar>\n          <h2>Daniyal</h2>\n          <p>suggested on your post.</p>\n          <ion-note>4h</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image2.jpg">\n          </ion-thumbnail>\n        </ion-item>\n      \n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/me.jpg">\n          </ion-avatar>\n          <h2>Faizan Khan</h2>\n          <p>just posted a new post.</p>\n          <ion-note>3d</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image1.jpg">\n          </ion-thumbnail>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/daniyal.jpg">\n          </ion-avatar>\n          <h2>Daniyal</h2>\n          <p>suggested on your post.</p>\n          <ion-note>2w</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image2.jpg">\n          </ion-thumbnail>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/me.jpg">\n          </ion-avatar>\n          <h2>Faizan Khan</h2>\n          <p>just posted a new post.</p>\n          <ion-note>3d</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image1.jpg">\n          </ion-thumbnail>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/daniyal.jpg">\n          </ion-avatar>\n          <h2>Daniyal</h2>\n          <p>suggested on your post.</p>\n          <ion-note>2w</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image2.jpg">\n          </ion-thumbnail>\n        </ion-item>\n    <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/me.jpg">\n          </ion-avatar>\n          <h2>Faizan Khan</h2>\n          <p>just posted a new post.</p>\n          <ion-note>3d</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image1.jpg">\n          </ion-thumbnail>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/daniyal.jpg">\n          </ion-avatar>\n          <h2>Daniyal</h2>\n          <p>suggested on your post.</p>\n          <ion-note>2w</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image2.jpg">\n          </ion-thumbnail>\n        </ion-item>\n    <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/me.jpg">\n          </ion-avatar>\n          <h2>Faizan Khan</h2>\n          <p>just posted a new post.</p>\n          <ion-note>3d</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image1.jpg">\n          </ion-thumbnail>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/daniyal.jpg">\n          </ion-avatar>\n          <h2>Daniyal</h2>\n          <p>suggested on your post.</p>\n          <ion-note>2w</ion-note>\n          <ion-thumbnail item-right>\n            <img src="assets/img/image2.jpg">\n          </ion-thumbnail>\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\notifications\notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], Notifications);

//# sourceMappingURL=notifications.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map