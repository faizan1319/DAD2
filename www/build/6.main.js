webpackJsonp([6],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_page__ = __webpack_require__(280);
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

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_post_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__ = __webpack_require__(202);
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


// import { Camera, CameraOptions } from '@ionic-native/camera';



// import { Notifications } from '../../pages/notifications/notifications';
// import { Maps } from "../maps/maps";
// import { PostDetail } from "../post-detail/post-detail";
// import { RelatedNews } from "../related-news/related-news";
// import { CommentModal } from "../comment-modal/comment-modal";
// import { PostMapModal } from "../post-map-modal/post-map-modal";
/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MainPage = (function () {
    function MainPage(navCtrl, navParams, modal, service, mediaCapture) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.service = service;
        this.mediaCapture = mediaCapture;
        this.slideTitle = "Trending";
        this.loggedInUserId = this.navParams.get('loggedInUserId');
    }
    MainPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        console.log('page loded and the user id is: ', this.loggedInUserId);
        this.service.getTrending()
            .subscribe(function (data) {
            if (data != null) {
                _this.posts = data;
                console.log('here is the data= ', _this.posts);
            }
        });
    };
    MainPage.prototype.changeTitle = function () {
        this.slideIndex = this.slides.getActiveIndex();
        if (this.slideIndex == 0) {
            this.slideTitle = "Trending";
        }
        if (this.slideIndex == 1) {
            this.slideTitle = "Subscriptions";
        }
        if (this.slideIndex >= 2) {
            this.slideTitle = "My Posts";
        }
    };
    MainPage.prototype.openCamera = function () {
        // const options: CameraOptions = {
        //   quality: 100,
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE
        // }
        // this.camera.getPicture(options).then((imageData) => {
        // // imageData is either a base64 encoded string or a file URI
        // // If it's base64:
        // let base64Image = 'data:image/jpeg;base64,' + imageData;
        // }, (err) => {
        // // Handle error
        // });
        // let options: CaptureImageOptions = { limit: 3 };
        this.mediaCapture.captureImage()
            .then(function (data) { return console.log(data); }, function (err) { return console.error(err); });
    };
    MainPage.prototype.openNotifications = function () {
        this.navCtrl.push('Notifications');
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Slides */])
], MainPage.prototype, "slides", void 0);
MainPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
        selector: 'page-main-page',template:/*ion-inline-start:"E:\MapPractice\src\pages\main-page\main-page.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="header">\n\n  <ion-navbar>\n    <ion-title>MainPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="side fixed-content">\n\n    <div class="side-bar-row">\n      <ion-icon name="search"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="notifications" (tap)="openNotifications()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="camera" (tap)="openCamera()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon name="settings" (tap)="moveToRelatedNews()"></ion-icon>\n    </div>\n    <div class="side-bar-row">\n      <ion-icon ios="md-globe" md="md-globe" (tap)="moveToMaps()"></ion-icon>\n    </div>\n\n  </div>\n\n  <div class = "main-content">\n    <div class ="slide-title">\n      <ion-title>{{slideTitle}}</ion-title>\n    </div>\n\n    <div class="feeds scroll-content">\n\n      <ion-slides (ionSlideDidChange)="changeTitle()" pager>\n        <ion-slide class="scroll-content">  \n          \n          <ion-row>\n            <ion-card *ngFor="let post of posts">\n              <ion-item>\n                <ion-icon name="pin" item-right (tap)="openMapModal(post.post_lat, post.post_lng, post.post_title)"></ion-icon>\n                <ion-avatar item-left>\n                  <img src= \'https://limitless-woodland-73873.herokuapp.com/{{post.dp_url}}\'>\n                </ion-avatar>\n                <h2>{{post.username}}</h2>\n                <p>May 12, 1984</p>\n              </ion-item>\n              <img src="assets/img/image2.jpg">\n              <ion-card-content>\n                <p><strong>Title: </strong>{{post.post_title}}</p>\n                <p><strong>Categories:</strong> Traffic Jam, Protest</p>\n                <div class="separator"></div>\n                <p (tap)="openCommentsModal(post.post_id, post.post_desc, post.username, post.dp_url)">{{post.post_desc}}</p>\n              </ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-up\'></ion-icon>\n                    {{post.post_likes}}\n                  </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button color="primary" clear icon-left (tap)="openCommentsModal(post.post_id, post.post_desc, post.username, post.dp_url)">\n                      <ion-icon name=\'text\'></ion-icon>\n                      {{post.post_comment_count}}\n                    </button>\n                </ion-col>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-down\'></ion-icon>\n                    {{post.post_dislikes}}\n                  </button>\n                </ion-col>\n                <ion-col align-self-center text-center>\n                  <ion-note>30yr ago</ion-note>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-row>\n          \n        </ion-slide>\n\n        <ion-slide class="scroll-content">  \n          \n          <ion-row>\n            <ion-card>\n              <ion-item>\n                <ion-icon name="pin" item-right (tap)="openMapModal()"></ion-icon>\n                <ion-avatar item-left>\n                  <img src="assets/img/daniyal.jpg">\n                </ion-avatar>\n                <h2>Sarah Connor</h2>\n                <p>May 12, 1984</p>\n              </ion-item>\n              <img src="assets/img/image2.jpg">\n              <ion-card-content>\n                <p><strong>Title: </strong>Lag Gaey Lasan</p>\n                <p><strong>Categories:</strong> Traffic Jam, Protest</p>\n                <div class="separator"></div>\n                <p (tap)="openCommentsModal()">I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.</p>\n              </ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-up\'></ion-icon>\n                    30\n                  </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button color="primary" clear icon-left (tap)="openCommentsModal()">\n                      <ion-icon name=\'text\'></ion-icon>\n                      64\n                    </button>\n                </ion-col>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-down\'></ion-icon>\n                    30\n                  </button>\n                </ion-col>\n                <ion-col align-self-center text-center>\n                  <ion-note>30yr ago</ion-note>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-row>\n\n          <ion-row>\n            <ion-card>\n              <ion-item>\n                <ion-icon name="pin" item-right (tap)="openMapModal()"></ion-icon>\n                <ion-avatar item-left>\n                  <img src="assets/img/daniyal.jpg">\n                </ion-avatar>\n                <h2>Sarah Connor</h2>\n                <p>May 12, 1984</p>\n              </ion-item>\n              <img src="assets/img/image2.jpg">\n              <ion-card-content>\n                <p><strong>Title: </strong>Lag Gaey Lasan</p>\n                <p><strong>Categories:</strong> Traffic Jam, Protest</p>\n                <div class="separator"></div>\n                <p (tap)="openCommentsModal()">I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.</p>\n              </ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-up\'></ion-icon>\n                    30\n                  </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button color="primary" clear icon-left (tap)="openCommentsModal()">\n                      <ion-icon name=\'text\'></ion-icon>\n                      64\n                    </button>\n                </ion-col>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-down\'></ion-icon>\n                    30\n                  </button>\n                </ion-col>\n                <ion-col align-self-center text-center>\n                  <ion-note>30yr ago</ion-note>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-row>\n\n          <ion-row>\n            <ion-card>\n              <ion-item>\n                <ion-icon name="pin" item-right (tap)="openMapModal()"></ion-icon>\n                <ion-avatar item-left>\n                  <img src="assets/img/daniyal.jpg">\n                </ion-avatar>\n                <h2>Sarah Connor</h2>\n                <p>May 12, 1984</p>\n              </ion-item>\n              <img src="assets/img/image2.jpg">\n              <ion-card-content>\n                <p><strong>Title: </strong>Lag Gaey Lasan</p>\n                <p><strong>Categories:</strong> Traffic Jam, Protest</p>\n                <div class="separator"></div>\n                <p (tap)="openCommentsModal()">I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.</p>\n              </ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-up\'></ion-icon>\n                    30\n                  </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button color="primary" clear icon-left (tap)="openCommentsModal()">\n                      <ion-icon name=\'text\'></ion-icon>\n                      64\n                    </button>\n                </ion-col>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-down\'></ion-icon>\n                    30\n                  </button>\n                </ion-col>\n                <ion-col align-self-center text-center>\n                  <ion-note>30yr ago</ion-note>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-row>\n          \n        </ion-slide>\n\n        <ion-slide class="scroll-content">  \n\n          <ion-row>\n            <ion-card>\n              <ion-item>\n                <ion-icon name="pin" item-right (tap)="openMapModal()"></ion-icon>\n                <ion-avatar item-left>\n                  <img src="assets/img/daniyal.jpg">\n                </ion-avatar>\n                <h2>Sarah Connor</h2>\n                <p>May 12, 1984</p>\n              </ion-item>\n              <img src="assets/img/image2.jpg">\n              <ion-card-content>\n                <p><strong>Title: </strong>Lag Gaey Lasan</p>\n                <p><strong>Categories:</strong> Traffic Jam, Protest</p>\n                <div class="separator"></div>\n                <p (tap)="openCommentsModal()">I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.</p>\n              </ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-up\'></ion-icon>\n                    30\n                  </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button color="primary" clear icon-left (tap)="openCommentsModal()">\n                      <ion-icon name=\'text\'></ion-icon>\n                      64\n                    </button>\n                </ion-col>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-down\'></ion-icon>\n                    30\n                  </button>\n                </ion-col>\n                <ion-col align-self-center text-center>\n                  <ion-note>30yr ago</ion-note>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-row>\n\n          <ion-row>\n            <ion-card>\n              <ion-item>\n                <ion-icon name="pin" item-right (tap)="openMapModal()"></ion-icon>\n                <ion-avatar item-left>\n                  <img src="assets/img/daniyal.jpg">\n                </ion-avatar>\n                <h2>Sarah Connor</h2>\n                <p>May 12, 1984</p>\n              </ion-item>\n              <img src="assets/img/image2.jpg">\n              <ion-card-content>\n                <p><strong>Title: </strong>Lag Gaey Lasan</p>\n                <p><strong>Categories:</strong> Traffic Jam, Protest</p>\n                <div class="separator"></div>\n                <p (tap)="openCommentsModal()">I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.</p>\n              </ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-up\'></ion-icon>\n                    30\n                  </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button color="primary" clear icon-left (tap)="openCommentsModal()">\n                      <ion-icon name=\'text\'></ion-icon>\n                      64\n                    </button>\n                </ion-col>\n                <ion-col>\n                  <button ion-button color="primary" clear icon-left>\n                    <ion-icon name=\'thumbs-down\'></ion-icon>\n                    30\n                  </button>\n                </ion-col>\n                <ion-col align-self-center text-center>\n                  <ion-note>30yr ago</ion-note>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-row>\n\n        </ion-slide>\n      </ion-slides>\n\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\main-page\main-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_post_services__["a" /* PostServices */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__["a" /* MediaCapture */]])
], MainPage);

//# sourceMappingURL=main-page.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map