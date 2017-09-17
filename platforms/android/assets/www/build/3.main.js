webpackJsonp([3],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__related_news__ = __webpack_require__(294);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedNewsModule", function() { return RelatedNewsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RelatedNewsModule = (function () {
    function RelatedNewsModule() {
    }
    return RelatedNewsModule;
}());
RelatedNewsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__related_news__["a" /* RelatedNews */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__related_news__["a" /* RelatedNews */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__related_news__["a" /* RelatedNews */]
        ]
    })
], RelatedNewsModule);

//# sourceMappingURL=related-news.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatedNews; });
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
 * Generated class for the RelatedNews page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RelatedNews = (function () {
    function RelatedNews(navCtrl, navParams, googleMaps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.slideTitle = "Relevant Events";
    }
    RelatedNews.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RelatedNews');
    };
    RelatedNews.prototype.ngAfterViewInit = function () {
        this.loadMap();
    };
    RelatedNews.prototype.loadMap = function () {
        var element = document.getElementById('map');
        var map = this.googleMaps.create(element);
        map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY).then(function () { return console.log('Map is ready!'); });
        var ionic = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* LatLng */](this.postLat, this.postLng);
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
    return RelatedNews;
}());
RelatedNews = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-related-news',template:/*ion-inline-start:"E:\MapPractice\src\pages\related-news\related-news.html"*/'<!--\n  Generated template for the RelatedNews page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="bg">\n    <ion-title>Do Something About All This</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="side fixed-content">\n\n    <div class="side-bar-row">\n      <ion-icon name="search"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="notifications" (tap)="openNotifications()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="camera" (tap)="openCamera()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="videocam" (tap)="openVideoCam()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="settings" (tap)="moveToRelatedNews()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon ios="md-globe" md="md-globe" (tap)="moveToMaps()"></ion-icon>\n    </div>\n    \n  </div>\n\n  <div class="feeds scroll-content">\n    <ion-card class="adv-map">\n      <div style="position: relative">\n        <div id=\'map\'></div>\n        <ion-fab right top>\n        <button ion-fab class="fab-map">\n        <ion-icon name=\'pin\'></ion-icon>\n        </button>\n        </ion-fab>\n      </div>\n      <ion-item>\n        <ion-icon color="subtle" large item-start name=\'football\'></ion-icon>\n        <h2>Museum of Football</h2>\n        <p>11 N. Way St, Madison, WI 53703</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon color="subtle" large item-start name=\'wine\'></ion-icon>\n        <h2>Institute of Fine Cocktails</h2>\n        <p>14 S. Hop Avenue, Madison, WI 53703</p>\n      </ion-item>\n      <ion-item actions>\n        <span ion-text item-start color="secondary" class="item-bold">18 min</span>\n        <span ion-text item-start color="subtle">(2.6 mi)</span>\n        <button ion-button color="primary" clear item-end icon-start>\n          <ion-icon name=\'navigate\'></ion-icon>\n          Start\n        </button>\n      </ion-item>\n\n    </ion-card>\n  </div>\n\n\n\n      \n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\related-news\related-news.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */]])
], RelatedNews);

//# sourceMappingURL=related-news.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map