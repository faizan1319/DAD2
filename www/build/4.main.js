webpackJsonp([4],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__related_news__ = __webpack_require__(300);
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

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_services__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(198);
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
    // myLocation                      : ILatLng ;
    function RelatedNews(navCtrl, navParams, service, geolocation, spherical, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.geolocation = geolocation;
        this.spherical = spherical;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.slideTitle = "Relevant Events";
        this.userData = this.navParams.get('userData');
    }
    RelatedNews.prototype.ionViewWillLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RelatedNews');
        var loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        loading.present();
        this.service.getPostForEmployee(this.userData.employeePostCategoryId)
            .subscribe(function (data) {
            _this.postsForEmployee = data;
            console.log('post for employee: ', _this.postsForEmployee);
            loading.dismiss();
        });
    };
    RelatedNews.prototype.getDistanceFromEmployee = function (lat, lng) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        loading.present();
        var postLocation = {
            lat: lat,
            lng: lng
        };
        var geolocatioOptions = {
            enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(geolocatioOptions)
            .then(function (resp) {
            var myLocation = {
                lat: resp.coords.latitude,
                lng: resp.coords.longitude
            };
            console.log('My Location: ', myLocation);
            console.log('Post Location: ', postLocation);
            // this.myLocation.lat = resp.coords.latitude;
            // this.myLocation.lng = resp.coords.latitude;
            var distance = _this.spherical.computeDistanceBetween(myLocation, postLocation);
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Distance from your current position is: ' + distance,
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present();
        });
    };
    RelatedNews.prototype.openPursuitPage = function (lat, lng) {
        this.navCtrl.push('PursuitPage', {
            postLat: lat,
            postLng: lng
        });
    };
    return RelatedNews;
}());
RelatedNews = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-related-news',template:/*ion-inline-start:"E:\MapPractice\src\pages\related-news\related-news.html"*/'<!--\n  Generated template for the RelatedNews page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="bg">\n    <ion-title>Do Something About All This</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="side fixed-content">\n\n    <div class="side-bar-row">\n      <ion-icon name="search"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="notifications" (tap)="openNotifications()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="camera" (tap)="openCamera()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="videocam" (tap)="openVideoCam()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="settings" (tap)="moveToRelatedNews()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon ios="md-globe" md="md-globe" (tap)="moveToMaps()"></ion-icon>\n    </div>\n    \n  </div>\n\n  <div class = "main-content">\n    <div class ="slide-title">\n      <ion-title>{{slideTitle}}</ion-title>\n    </div>\n\n    <div class="feeds scroll-content">\n\n      <ion-slides (ionSlideDidChange)="changeTitle()" pager>\n        <ion-slide class="scroll-content">  \n          <ion-row>\n            <ion-card *ngFor="let post of postsForEmployee">\n              <!-- <ion-item>\n                <ion-icon name="pin" item-right (tap)="openMapModal(post.postLat, post.postLng, post.postTitle)"></ion-icon>\n                <ion-avatar item-left>\n                   <img src= \'https://limitless-woodland-73873.herokuapp.com/{{post.dp_url}}\'> \n                  <img src= \'{{hostURL}}{{post.dpUrl}}\'>\n                </ion-avatar>\n                <h2>{{post.username}}</h2>\n                <p>May 12, 1984</p>\n              </ion-item> -->\n              <img *ngIf=\'post.postMediaType == 1\' src="{{hostURL}}{{post.postMediaFileURL}}">\n              <video *ngIf=\'post.postMediaType == 2\' controls>\n                <source src=\'{{hostURL}}/{{post.mediaFilePath}}\' type="video/mp4">\n              </video>\n              <ion-card-content>\n                <p><strong>Title: </strong>{{post.postTitle}}</p>\n                <p><strong>Categories:</strong></p>\n                <div style = \'height: 4px;\'> </div>\n                <div *ngFor = \'let postCat of post.postCategories\'>\n                  <p>{{postCat.categoryName}}</p>\n                </div>\n                <div class="separator"></div>\n                <p (tap)="openCommentsModal(post.postId, post.postDesc, post.username, post.dpUrl)">{{post.postDesc}}</p>\n              </ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-up\'></ion-icon>\n                    {{post.postLikes}}\n                  </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button color="primary" clear icon-left (tap)="openCommentsModal(post.postId, post.postDesc, post.username, post.dpUrl)">\n                      <ion-icon name=\'text\'></ion-icon>\n                      {{post.postCommentCount}}\n                    </button>\n                </ion-col>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-down\'></ion-icon>\n                    {{post.postDislikes}}\n                  </button>\n                </ion-col>\n                <ion-col align-self-center text-center>\n                  <ion-note>30yr ago</ion-note>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                    <button ion-button icon-left class="pursuit-button" (tap)=\'getDistanceFromEmployee(post.postLat, post.postLng)\'>\n                      <ion-icon name="help"></ion-icon>\n                      Distance\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button icon-left class="pursuit-button" (tap)=\'openPursuitPage(post.postLat, post.postLng)\'>\n                      <ion-icon name="car"></ion-icon>\n                      In Pursuit\n                    </button>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n\n\n\n      \n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\related-news\related-news.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_post_services__["a" /* PostServices */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* Spherical */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], RelatedNews);

//# sourceMappingURL=related-news.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map