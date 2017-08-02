webpackJsonp([1],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__related_news__ = __webpack_require__(284);
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

/***/ 284:
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
    return RelatedNews;
}());
RelatedNews = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-related-news',template:/*ion-inline-start:"E:\MapPractice\src\pages\related-news\related-news.html"*/'<!--\n  Generated template for the RelatedNews page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>relatedNews</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="side fixed-content">\n    <div class="side-bar-row">\n      <ion-icon name="search"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="notifications" (tap)="openNotifications()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="camera" (tap)="openCamera()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="settings" (tap)="moveToRelatedNews()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon ios="md-globe" md="md-globe" (tap)="moveToMaps()"></ion-icon>\n    </div>\n  </div>\n\n  <div class="main-content">\n    <div class="slide-title">\n      <ion-title>{{slideTitle}}</ion-title>\n    </div>\n\n    <div class="feeds scroll-content">\n      <ion-slides>\n        <ion-slide>\n          <div class="">\n            \n          </div>\n        </ion-slide>\n\n      </ion-slides>\n    </div>\n  </div>\n\n\n\n      \n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\related-news\related-news.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */]])
], RelatedNews);

//# sourceMappingURL=related-news.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map