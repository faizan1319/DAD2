webpackJsonp([13],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_map__ = __webpack_require__(291);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralMapPageModule", function() { return GeneralMapPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GeneralMapPageModule = (function () {
    function GeneralMapPageModule() {
    }
    return GeneralMapPageModule;
}());
GeneralMapPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__general_map__["a" /* GeneralMapPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__general_map__["a" /* GeneralMapPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__general_map__["a" /* GeneralMapPage */]
        ]
    })
], GeneralMapPageModule);

//# sourceMappingURL=general-map.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralMapPage; });
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
 * Generated class for the GeneralMapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GeneralMapPage = (function () {
    function GeneralMapPage(navCtrl, navParams, googleMaps, geolocation, loadingCtrl, diagnostic) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.diagnostic = diagnostic;
    }
    GeneralMapPage.prototype.ionViewDidLoad = function () {
        var successCallback = function (isAvailable) { console.log('Is available? ' + isAvailable); };
        var errorCallback = function (e) { return console.error(e); };
        var check = this.diagnostic.isLocationAvailable;
        console.log('ionViewDidLoad GeneralMapPage', check);
        this.loadMap();
    };
    GeneralMapPage.prototype.loadMap = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        loading.present();
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
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
            _this.map.one(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["d" /* GoogleMapsEvent */].MAP_READY)
                .then(function () {
                console.log('Map is ready!');
                // Now you can use all methods safely.
                _this.map.addMarker({
                    title: 'Ionic',
                    icon: 'blue',
                    animation: 'DROP',
                    position: {
                        lat: resp.coords.latitude,
                        lng: resp.coords.longitude
                    }
                })
                    .then(function (marker) {
                    marker.on(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["d" /* GoogleMapsEvent */].MARKER_CLICK)
                        .subscribe(function () {
                        alert('clicked');
                    });
                });
                loading.dismiss();
            });
        })
            .catch(function (error) {
            console.log('Error getting location', error);
        });
        // Wait the MAP_READY before using any methods.
    };
    return GeneralMapPage;
}());
GeneralMapPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-general-map',template:/*ion-inline-start:"E:\MapPractice\src\pages\general-map\general-map.html"*/'<!--\n  Generated template for the GeneralMapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>generalMap</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div id="map"></div>\n\n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\general-map\general-map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__["a" /* Diagnostic */]])
], GeneralMapPage);

//# sourceMappingURL=general-map.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map