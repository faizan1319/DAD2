webpackJsonp([1],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_test__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadTestPageModule", function() { return UploadTestPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UploadTestPageModule = (function () {
    function UploadTestPageModule() {
    }
    return UploadTestPageModule;
}());
UploadTestPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__upload_test__["a" /* UploadTestPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__upload_test__["a" /* UploadTestPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__upload_test__["a" /* UploadTestPage */]
        ]
    })
], UploadTestPageModule);

//# sourceMappingURL=upload-test.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadTestPage; });
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
 * Generated class for the UploadTestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UploadTestPage = (function () {
    function UploadTestPage(navParams, geolocation, transfer) {
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.transfer = transfer;
        this.loggedInUserId = this.navParams.get('loggedInUserId');
        this.username = this.navParams.get('username');
        this.mediaType = this.navParams.get('mediaType');
        this.mediaFilePath = "/assets/images/me.jpg";
        this.postTitle = 'han bhai yelo';
        this.postDesc = 'kesa diya!!!!!!!!!!!!!!!!!!!!!!!!!!!';
    }
    UploadTestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadTestPage');
        this.upload();
    };
    UploadTestPage.prototype.upload = function () {
        var _this = this;
        var option = { enableHighAccuracy: true };
        this.geolocation.getCurrentPosition(option)
            .then(function (resp) {
            var ionic = new __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["c" /* LatLng */](resp.coords.latitude, resp.coords.longitude);
            var fileTransfer = _this.transfer.create();
            var fileName = _this.username + '_' + _this.loggedInUserId + '_' + _this.postTitle;
            var options = {
                fileKey: 'File',
                fileName: fileName,
                params: {
                    postTitle: _this.postTitle,
                    postDesc: _this.postDesc,
                    postLat: ionic.lat,
                    postLng: ionic.lng,
                    postMediaType: _this.mediaType,
                    userId: _this.loggedInUserId
                }
            };
            console.log('file upload options: ', options);
            console.log(_this.mediaFilePath);
            fileTransfer.upload(_this.mediaFilePath, 'http://localhost:3000/images/postImages', options)
                .then(function (data) {
                console.log('image has been uploaded: ', data);
            }, function (err) {
                console.log('image could not be uploaded: ', err);
            });
        });
    };
    return UploadTestPage;
}());
UploadTestPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-upload-test',template:/*ion-inline-start:"E:\MapPractice\src\pages\upload-test\upload-test.html"*/'<!--\n  Generated template for the UploadTestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>upload-test</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-img [src] = \'mediaFilePath\'></ion-img>\n\n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\upload-test\upload-test.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */]])
], UploadTestPage);

//# sourceMappingURL=upload-test.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map