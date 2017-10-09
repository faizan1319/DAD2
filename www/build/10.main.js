webpackJsonp([10],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps__ = __webpack_require__(294);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapsModule = (function () {
    function MapsModule() {
    }
    return MapsModule;
}());
MapsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__maps__["a" /* Maps */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__maps__["a" /* Maps */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__maps__["a" /* Maps */]
        ]
    })
], MapsModule);

//# sourceMappingURL=maps.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Maps; });
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
 * Generated class for the Maps page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Maps = (function () {
    // map: GoogleMap;
    // lat: any;
    // lng: any;
    function Maps(googleMaps, geolocation) {
        this.googleMaps = googleMaps;
        this.geolocation = geolocation;
    }
    Maps.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Maps');
        this.loadMap();
    };
    // ngAfterViewInit()
    // {
    // }
    Maps.prototype.loadMap = function () {
        var _this = this;
        console.log('in load map');
        // let option = {enableHighAccuracy: true} ;
        // this.geolocation.getCurrentPosition(option)
        // .then((resp) => {
        var mapOptions = {
            camera: {
                zoom: 18,
                tilt: 30
            }
        };
        var element = document.getElementById('map');
        var map = this.googleMaps.create(element, mapOptions);
        // let map: GoogleMap = this.googleMaps.create(element);
        map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["d" /* GoogleMapsEvent */].MAP_READY).then(function () {
            console.log('Map is ready!');
            var option = { enableHighAccuracy: true };
            _this.geolocation.getCurrentPosition(option)
                .then(function (resp) {
                var target = {
                    lat: resp.coords.latitude,
                    lng: resp.coords.longitude
                };
                var cameraViewCenter = {
                    target: target,
                    tilt: 30,
                    zoom: 12
                };
                map.moveCamera(cameraViewCenter);
                map.addMarker({
                    title: 'Me',
                    icon: 'blue',
                    animation: 'DROP',
                    position: target
                })
                    .then(function (marker) {
                    marker.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["d" /* GoogleMapsEvent */].MARKER_CLICK)
                        .subscribe(function () {
                        alert('clicked');
                    });
                });
            });
        });
        // let ionic: LatLng = new LatLng(resp.coords.latitude, resp.coords.longitude);
        // let position: CameraPosition = {
        //   target: ionic,
        //   zoom: 100,
        //   tilt: 30
        // };
        // console.log('after ionic', ionic);
        // map.moveCamera(position);
        // let markerOptions: MarkerOptions = {
        //   position: ionic,
        //   title: 'Me'
        // };
        // const marker: any = map.addMarker(markerOptions)
        // .then((marker: Marker) => {
        //     marker.showInfoWindow();
        // });   
        // })
        // .catch((error) => {
        //     console.log('Error getting location', error)
        // })
    };
    return Maps;
}());
Maps = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
        selector: 'page-maps',template:/*ion-inline-start:"E:\MapPractice\src\pages\maps\maps.html"*/'<!--\n  Generated template for the Maps page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="bg">\n    <ion-title>maps</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id=\'map\'></div>\n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\maps\maps.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
], Maps);

//# sourceMappingURL=maps.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map