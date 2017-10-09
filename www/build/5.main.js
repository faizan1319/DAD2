webpackJsonp([5],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pursuit__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PursuitPageModule", function() { return PursuitPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PursuitPageModule = (function () {
    function PursuitPageModule() {
    }
    return PursuitPageModule;
}());
PursuitPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pursuit__["a" /* PursuitPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pursuit__["a" /* PursuitPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__pursuit__["a" /* PursuitPage */]
        ]
    })
], PursuitPageModule);

//# sourceMappingURL=pursuit.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PursuitPage; });
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
 * Generated class for the PursuitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PursuitPage = (function () {
    function PursuitPage(navCtrl, navParams, googleMaps, geolocation, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.postLocation = {
            lat: this.navParams.get('postLat'),
            lng: this.navParams.get('postLng')
        };
        this.geolocationOptions = {
            enableHighAccuracy: true
        };
    }
    PursuitPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PursuitPage');
        this.loadMap();
        var that = this;
        this.locationSubscription = this.geolocation.watchPosition(this.geolocationOptions)
            .subscribe(function (pos) {
            var myLocation = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };
            that.distance = _this.googleMaps._spherical.computeDistanceBetween(myLocation, that.postLocation);
        });
    };
    PursuitPage.prototype.loadMap = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        loading.present();
        var that = this;
        this.geolocation.getCurrentPosition(this.geolocationOptions)
            .then(function (resp) {
            var mapOptions = {
                camera: {
                    target: {
                        lat: resp.coords.latitude,
                        lng: resp.coords.longitude
                    },
                    zoom: 18,
                    tilt: 30
                }
            };
            _this.mapElement = document.getElementById('map');
            _this.map = _this.googleMaps.create(_this.mapElement, mapOptions);
            _this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["d" /* GoogleMapsEvent */].MAP_READY)
                .then(function () {
                console.log('Map is ready!');
                that.map.setMyLocationEnabled(true);
                that.map.setTrafficEnabled(true);
                that.map.setCompassEnabled(true);
                loading.dismiss();
            });
        })
            .catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    PursuitPage.prototype.ionViewDidLeave = function () {
        this.locationSubscription.unsubscribe;
    };
    return PursuitPage;
}());
PursuitPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-pursuit',template:/*ion-inline-start:"E:\MapPractice\src\pages\pursuit\pursuit.html"*/'<!--\n  Generated template for the PursuitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pursuitPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div id=\'map\'></div>\n\n  <h3>Distance From Your Location: <ion-input type="text" [(ngModel)]=\'distance\' disabled></ion-input></h3>\n\n  <p>{{distance}}</p>\n\n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\pursuit\pursuit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], PursuitPage);

//# sourceMappingURL=pursuit.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map