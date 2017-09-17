webpackJsonp([9],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_page__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainPageModule = (function () {
    function MainPageModule() {
    }
    return MainPageModule;
}());
MainPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__main_page__["a" /* MainPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main_page__["a" /* MainPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__main_page__["a" /* MainPage */]
        ]
    })
], MainPageModule);

//# sourceMappingURL=main-page.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_post_services__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { PhotoViewer } from '@ionic-native/photo-viewer';
// import { File } from '@ionic-native/file';
// import { FilePath } from '@ionic-native/file-path';
// import { FileChooser } from '@ionic-native/file-chooser';


/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MainPage = (function () {
    function MainPage(navCtrl, navParams, toastCtrl, modal, service, mediaCapture, 
        // private pv         : PhotoViewer,
        // private filePath   : FilePath,
        // private fileChooser: FileChooser,
        camera, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.modal = modal;
        this.service = service;
        this.mediaCapture = mediaCapture;
        this.camera = camera;
        this.geolocation = geolocation;
        this.slideTitle = "Trending";
        this.hostURL = "https://limitless-woodland-73873.herokuapp.com/";
        this.loggedInUserId = this.navParams.get('loggedInUserId');
        this.loggedInUsername = this.navParams.get('username');
        this.firstname = this.navParams.get('firstname');
        this.lastname = this.navParams.get('lastname');
        this.email = this.navParams.get('email');
        this.phone = this.navParams.get('phone');
        this.loggedInUserDpURL = this.navParams.get('dpUrl');
        this.loggedInUserPostCount = this.navParams.get('postCount');
    }
    MainPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        console.log('page loded and the user id is: ', this.loggedInUserId);
        this.service.getTrending()
            .subscribe(function (data) {
            if (data != null) {
                _this.trendingPosts = data;
                console.log('here is the data= ', _this.trendingPosts);
            }
        });
    };
    MainPage.prototype.changeTitle = function () {
        var _this = this;
        this.slideIndex = this.slides.getActiveIndex();
        if (this.slideIndex == 0) {
            this.slideTitle = "Trending";
        }
        if (this.slideIndex == 1) {
            this.slideTitle = "Subscriptions";
            this.service.getUserSubscribtionPosts(this.loggedInUserId)
                .subscribe(function (data) {
                if (data != null) {
                    _this.subscribedCategoriesPosts = data;
                    console.log(_this.subscribedCategoriesPosts);
                }
            });
        }
        if (this.slideIndex >= 2) {
            this.slideTitle = "My Posts";
            this.service.getPostByUserId(this.loggedInUserId)
                .subscribe(function (data) {
                if (data != null) {
                    _this.postByLoggedInUser = data;
                    console.log(_this.postByLoggedInUser);
                }
            });
        }
    };
    MainPage.prototype.openCamera = function () {
        var _this = this;
        // this.navCtrl.push('UploadTestPage', {
        //   loggedInUserId  : this.loggedInUserId,
        //   username        : this.loggedInUsername, 
        //   mediaType       : 1
        // });
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            var option = { enableHighAccuracy: true };
            _this.geolocation.getCurrentPosition(option)
                .then(function (resp) {
                var ionic = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["b" /* LatLng */](resp.coords.latitude, resp.coords.longitude);
                console.log('From camera plugin: ', imageData);
                _this.navCtrl.push('NewPostPage', {
                    loggedInUserId: _this.loggedInUserId,
                    username: _this.loggedInUsername,
                    mediaType: 1,
                    mediaFilePath: imageData,
                    postLat: ionic.lat,
                    postLng: ionic.lng
                });
            });
        }, function (err) {
            // Handle error
        });
        // let options: CaptureImageOptions = { limit: 3 };
        // this.mediaCapture.captureImage()
        // .then((data: MediaFile[]) => {
        //   console.log('From Media file: ', data);
        //   this.fileChooser.open()
        //   .then(uri => {
        //     console.log('from file chooser: ',uri);
        //     this.filePath.resolveNativePath(uri)
        //     .then(filePath => {
        //       this.pv.show(filePath);
        //       console.log('from filepath: ',filePath);
        //       this.navCtrl.push('NewPostPage', {
        //         mediaFile : filePath
        //       })
        //     })
        //     .catch(err => console.log(err));
        //   })
        //   .catch(e => console.log(e))    
        //   }, (err: CaptureError) => console.error(err)
        // );
    };
    MainPage.prototype.openVideoCam = function () {
        var _this = this;
        this.mediaCapture.captureVideo()
            .then(function (data) {
            console.log('From mediaCapture.captureVideo plugin: ', data['0'].fullPath);
            var option = { enableHighAccuracy: true };
            _this.geolocation.getCurrentPosition(option)
                .then(function (resp) {
                var ionic = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["b" /* LatLng */](resp.coords.latitude, resp.coords.longitude);
                console.log('From camera plugin: ', data['0'].fullPath);
                _this.navCtrl.push('NewPostPage', {
                    loggedInUserId: _this.loggedInUserId,
                    username: _this.loggedInUsername,
                    mediaType: 2,
                    mediaFilePath: data['0'].fullPath,
                    postLat: ionic.lat,
                    postLng: ionic.lng
                });
            });
        }, function (err) { return console.error(err); });
    };
    MainPage.prototype.openNotifications = function () {
        this.navCtrl.push('Notifications');
    };
    MainPage.prototype.logout = function () {
        var _this = this;
        this.navCtrl.setRoot('WelcomePage', {}, {}, function () {
            var toast = _this.toastCtrl.create({
                message: 'Come Back Soon!',
                duration: 3000
            });
            toast.present();
        });
    };
    MainPage.prototype.openPostDetail = function () {
        console.log("i'm here");
        this.navCtrl.push('PostDetail');
    };
    MainPage.prototype.moveToMaps = function () {
        this.navCtrl.push('Maps');
    };
    MainPage.prototype.moveToRelatedNews = function () {
        this.navCtrl.push('RelatedNews');
    };
    MainPage.prototype.openCommentsModal = function (postId, postDesc, postUsername, postUserDpUrl) {
        var commentModal = this.modal.create('CommentModal', {
            postId: postId,
            postDesc: postDesc,
            postUsername: postUsername,
            postUserDpUrl: postUserDpUrl,
            loggedInUserId: this.loggedInUserId
        });
        commentModal.present();
    };
    MainPage.prototype.openMapModal = function (lat, lng, postTitle) {
        this.navCtrl.push('PostMapModal', {
            latitude: lat,
            longitude: lng,
            title: postTitle
        });
    };
    return MainPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], MainPage.prototype, "slides", void 0);
MainPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-main-page',template:/*ion-inline-start:"E:\MapPractice\src\pages\main-page\main-page.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="header">\n\n  <ion-navbar color="bg">\n    <ion-title>MainPage</ion-title>\n    <ion-buttons end>\n      <button ion-button (tap)=\'logout()\' clear>\n        <ion-icon name=\'log-out\'></ion-icon>\n      </button>\n      <!-- <ion-icon name=\'log-out\' (tap)=\'logout()\'></ion-icon> -->\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="side fixed-content">\n\n    <div class="side-bar-row">\n      <ion-icon name="search"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="notifications" (tap)="openNotifications()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="camera" (tap)="openCamera()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="videocam" (tap)="openVideoCam()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="settings" (tap)="moveToRelatedNews()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon ios="md-globe" md="md-globe" (tap)="moveToMaps()"></ion-icon>\n    </div>\n    \n  </div>\n\n  <div class = "main-content">\n    <div class ="slide-title">\n      <ion-title>{{slideTitle}}</ion-title>\n    </div>\n\n    <div class="feeds scroll-content">\n\n      <ion-slides (ionSlideDidChange)="changeTitle()" pager>\n        <ion-slide class="scroll-content">  \n          \n          <ion-row>\n            <ion-card *ngFor="let post of trendingPosts">\n              <ion-item>\n                <ion-icon name="pin" item-right (tap)="openMapModal(post.postLat, post.postLng, post.postTitle)"></ion-icon>\n                <ion-avatar item-left>\n                  <!-- <img src= \'https://limitless-woodland-73873.herokuapp.com/{{post.dp_url}}\'> -->\n                  <img src= \'{{hostURL}}{{post.dpUrl}}\'>\n                </ion-avatar>\n                <h2>{{post.username}}</h2>\n                <p>May 12, 1984</p>\n              </ion-item>\n              <img *ngIf=\'post.postMediaType == 1\' src="{{hostURL}}{{post.postMediaFileURL}}">\n              <video *ngIf=\'post.postMediaType == 2\' controls>\n                <source src=\'{{hostURL}}/{{post.mediaFilePath}}\' type="video/mp4">\n              </video>\n              <ion-card-content>\n                <p><strong>Title: </strong>{{post.postTitle}}</p>\n                <p><strong>Categories:</strong></p>\n                <div style = \'height: 4px;\'> </div>\n                <div *ngFor = \'let postCat of post.postCategories\'>\n                  <p>{{postCat.categoryName}}</p>\n                </div>\n                <div class="separator"></div>\n                <p (tap)="openCommentsModal(post.postId, post.postDesc, post.username, post.dpUrl)">{{post.postDesc}}</p>\n              </ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-up\'></ion-icon>\n                    {{post.postLikes}}\n                  </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button color="primary" clear icon-left (tap)="openCommentsModal(post.postId, post.postDesc, post.username, post.dpUrl)">\n                      <ion-icon name=\'text\'></ion-icon>\n                      {{post.postCommentCount}}\n                    </button>\n                </ion-col>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-down\'></ion-icon>\n                    {{post.postDislikes}}\n                  </button>\n                </ion-col>\n                <ion-col align-self-center text-center>\n                  <ion-note>30yr ago</ion-note>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-row>\n          \n        </ion-slide>\n\n        <ion-slide class="scroll-content">  \n          \n          <ion-row>\n            <ion-card *ngFor="let post of subscribedCategoriesPosts">\n              <ion-item>\n                <ion-icon name="pin" item-right (tap)="openMapModal(post.postLat, post.postLng, post.postTitle)"></ion-icon>\n                <ion-avatar item-left>\n                  <!-- <img src= \'https://limitless-woodland-73873.herokuapp.com/{{post.dp_url}}\'> -->\n                  <img src= \'{{hostURL}}{{post.dpUrl}}\'>\n                </ion-avatar>\n                <h2>{{post.username}}</h2>\n                <p>May 12, 1984</p>\n              </ion-item>\n              <img *ngIf=\'post.postMediaType == 1\' src="{{hostURL}}{{post.postMediaFileURL}}">\n              <video *ngIf=\'post.postMediaType == 2\' controls>\n                <source src=\'{{hostURL}}/{{post.mediaFilePath}}\' type="video/mp4">\n              </video>\n              <ion-card-content>\n                <p><strong>Title: </strong>{{post.postTitle}}</p>\n                <p><strong>Categories:</strong></p>\n                <div style = \'height: 4px;\'> </div>\n                <div *ngFor = \'let postCat of post.postCategories\'>\n                  <p>{{postCat.categoryName}}</p>\n                </div>\n                <div class="separator"></div>\n                <p (tap)="openCommentsModal(post.postId, post.postDesc, post.username, post.dpUrl)">{{post.postDesc}}</p>\n              </ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-up\'></ion-icon>\n                    {{post.postLikes}}\n                  </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button color="primary" clear icon-left (tap)="openCommentsModal(post.postId, post.postDesc, post.username, post.dpUrl)">\n                      <ion-icon name=\'text\'></ion-icon>\n                      {{post.postCommentCount}}\n                    </button>\n                </ion-col>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-down\'></ion-icon>\n                    {{post.postDislikes}}\n                  </button>\n                </ion-col>\n                <ion-col align-self-center text-center>\n                  <ion-note>30yr ago</ion-note>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-row>\n          \n        </ion-slide>\n\n        <ion-slide class="scroll-content">  \n\n          <ion-row>\n             <ion-card *ngFor="let post of postByLoggedInUser">\n              <ion-item>\n                <ion-icon name="pin" item-right (tap)="openMapModal(post.postLat, post.postLng, post.postTitle)"></ion-icon>\n                <ion-avatar item-left>\n                  <!-- <img src= \'https://limitless-woodland-73873.herokuapp.com/{{post.dp_url}}\'> -->\n                  <img src= \'{{hostURL}}{{loggedInUserDpURL}}\'>\n                </ion-avatar>\n                <h2>{{loggedInUsername}}</h2>\n                <p>May 12, 1984</p>\n              </ion-item>\n              <img *ngIf=\'post.postMediaType == 1\' src="{{hostURL}}{{post.postMediaFileURL}}">\n              <video *ngIf=\'post.postMediaType == 2\' controls>\n                <source src=\'{{hostURL}}{{post.postMediaFileURL}}\' type="video/mp4">\n              </video>\n              <ion-card-content>\n                <p><strong>Title: </strong>{{post.postTitle}}</p>\n                <p><strong>Categories:</strong></p>\n                <div style = \'height: 4px;\'> </div>\n                <div *ngFor = \'let postCat of post.postCategories\'>\n                  <p>{{postCat.categoryName}}</p>\n                </div>\n                <div class="separator"></div>\n                <p (tap)="openCommentsModal(post.postId, post.postDesc, loggedInUsername, loggedInUserDpURL)">{{post.postDesc}}</p>\n              </ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-up\'></ion-icon>\n                    {{post.postLikes}}\n                  </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button color="primary" clear icon-left (tap)="openCommentsModal(post.postId, post.postDesc, loggedInUsername, loggedInUserDpURL)">\n                      <ion-icon name=\'text\'></ion-icon>\n                      {{post.postCommentCount}}\n                    </button>\n                </ion-col>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-down\'></ion-icon>\n                    {{post.postDislikes}}\n                  </button>\n                </ion-col>\n                <ion-col align-self-center text-center>\n                  <ion-note>30yr ago</ion-note>\n                </ion-col>\n              </ion-row>\n            </ion-card> \n          </ion-row>\n\n        </ion-slide>\n      </ion-slides>\n\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\main-page\main-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_post_services__["a" /* PostServices */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__["a" /* MediaCapture */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
], MainPage);

//# sourceMappingURL=main-page.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map