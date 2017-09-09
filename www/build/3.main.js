webpackJsonp([3],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_map_modal__ = __webpack_require__(292);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostMapModalModule", function() { return PostMapModalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostMapModalModule = (function () {
    function PostMapModalModule() {
    }
    return PostMapModalModule;
}());
PostMapModalModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__post_map_modal__["a" /* PostMapModal */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post_map_modal__["a" /* PostMapModal */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__post_map_modal__["a" /* PostMapModal */]
        ]
    })
], PostMapModalModule);

//# sourceMappingURL=post-map-modal.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostMapModal; });
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
 * Generated class for the PostMapModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PostMapModal = (function () {
    function PostMapModal(navParams, googleMaps) {
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.postLat = this.navParams.get('latitude');
        this.postLng = this.navParams.get('longitude');
        this.postTitle = this.navParams.get('title');
    }
    PostMapModal.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostMapModal');
        console.log('lat: ', this.postLat);
        console.log('lat: ', this.postLng);
    };
    PostMapModal.prototype.ngAfterViewInit = function () {
        this.loadMap();
    };
    PostMapModal.prototype.loadMap = function () {
        var element = document.getElementById('map');
        var map = this.googleMaps.create(element);
        map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY).then(function () { return console.log('Map is ready!'); });
        var ionic = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* LatLng */](this.postLat, this.postLng);
        var position = {
            target: ionic,
            zoom: 30,
            tilt: 30
        };
        map.moveCamera(position);
        var markerOptions = {
            position: ionic,
            title: this.postTitle
        };
        var marker = map.addMarker(markerOptions).then(function (marker) {
            marker.showInfoWindow();
        });
    };
    return PostMapModal;
}());
PostMapModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-post-map-modal',template:/*ion-inline-start:"E:\MapPractice\src\pages\post-map-modal\post-map-modal.html"*/'<!--\n  Generated template for the PostMapModal page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>postMapModal</ion-title>\n    <!--<ion-buttons start>\n      <button ion-button (tap)="dismiss()">Close</button>\n    </ion-buttons>-->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div id=\'map\'></div>\n\n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\post-map-modal\post-map-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */]])
], PostMapModal);

//# sourceMappingURL=post-map-modal.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map