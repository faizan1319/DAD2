webpackJsonp([3],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_detail__ = __webpack_require__(283);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailModule", function() { return PostDetailModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostDetailModule = (function () {
    function PostDetailModule() {
    }
    return PostDetailModule;
}());
PostDetailModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__post_detail__["a" /* PostDetail */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post_detail__["a" /* PostDetail */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__post_detail__["a" /* PostDetail */]
        ]
    })
], PostDetailModule);

//# sourceMappingURL=post-detail.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetail; });
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
 * Generated class for the PostDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PostDetail = (function () {
    function PostDetail(googleMaps, navParams) {
        this.googleMaps = googleMaps;
    }
    PostDetail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostDetail');
    };
    PostDetail.prototype.ngAfterViewInit = function () {
        this.loadMap();
    };
    PostDetail.prototype.loadMap = function () {
        var element = document.getElementById('map');
        var map = this.googleMaps.create(element);
        map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () { return console.log('Map is ready!'); });
        var ionic = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LatLng */](this.postLat, this.postLng);
        var position = {
            target: ionic,
            zoom: 70,
            tilt: 30
        };
        map.moveCamera(position);
        var markerOptions = {
            position: ionic,
            title: 'Ionic'
        };
        var marker = map.addMarker(markerOptions).then(function (marker) {
            marker.showInfoWindow();
        });
    };
    return PostDetail;
}());
PostDetail = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-post-detail',template:/*ion-inline-start:"E:\MapPractice\src\pages\post-detail\post-detail.html"*/'<!--\n  Generated template for the PostDetail page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>postDetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class = "media">\n    <img src="assets/img/image1.jpg">\n  </div>  \n\n  <div id=\'map\'> </div>\n\n  <!--<div class = "new-comment">\n    <ion-item>\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </div>-->\n\n  <div class="comments-section">\n    <ion-item>\n      <ion-avatar item-left>\n        <img src="assets/img/me.jpg">\n      </ion-avatar>\n      <p><strong>Faizan:</strong> Hey there, i am a testing text. the only purpose of my existance is to check wehter i fit in a div or not. 9m</p>\n    </ion-item>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\post-detail\post-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PostDetail);

//# sourceMappingURL=post-detail.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map