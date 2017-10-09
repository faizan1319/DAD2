webpackJsonp([14],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment_modal__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentModalModule", function() { return CommentModalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommentModalModule = (function () {
    function CommentModalModule() {
    }
    return CommentModalModule;
}());
CommentModalModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comment_modal__["a" /* CommentModal */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comment_modal__["a" /* CommentModal */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__comment_modal__["a" /* CommentModal */]
        ]
    })
], CommentModalModule);

//# sourceMappingURL=comment-modal.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_comment_services__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentModal; });
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
 * Generated class for the CommentModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CommentModal = (function () {
    function CommentModal(navCtrl, navParams, viewCtrl, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.postId = this.navParams.get('postId');
        this.postDesc = this.navParams.get('postDesc');
        this.postUsername = this.navParams.get('postUsername');
        this.postUserDpUrl = this.navParams.get('postUserDpUrl');
        this.loggedInUserId = this.navParams.get('loggedInUserId');
    }
    CommentModal.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('comment modal loaded and the logged in user id is: ', this.loggedInUserId);
        var loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        loading.present();
        this.service.getPostComments(this.postId)
            .subscribe(function (data) {
            _this.comments = data;
            console.log(_this.comments);
            loading.dismiss();
        });
    };
    CommentModal.prototype.postComment = function () {
        var _this = this;
        console.log('comment text: ', this.newComment);
        var loading = this.loadingCtrl.create({
            spinner: 'crescent'
        });
        loading.present();
        this.service.postNewComment(this.newComment, this.loggedInUserId, this.postId)
            .subscribe(function (data) {
            _this.newComment = null;
            loading.dismiss();
        });
    };
    CommentModal.prototype.dismiss = function () {
        var _this = this;
        this.service.getPostAttributesCount(this.postId)
            .subscribe(function (data) {
            console.log(data);
            _this.viewCtrl.dismiss(data);
        });
    };
    return CommentModal;
}());
CommentModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-comment-modal',template:/*ion-inline-start:"E:\MapPractice\src\pages\comment-modal\comment-modal.html"*/'<!--\n  Generated template for the CommentModal page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="bg">\n    <ion-title>Whats Your Point</ion-title>\n    <ion-buttons start>\n      <button ion-button (tap)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!--<div class="post-description scroll-content">\n    \n  </div>-->\n  \n  <div class="comments-section scroll-content">\n    <ion-item item-left>\n      <ion-avatar item-left>\n        <img src= \'https://limitless-woodland-73873.herokuapp.com/{{postUserDpUrl}}\'>\n      </ion-avatar>\n      <p><strong>{{postUsername}}: </strong>{{postDesc}}</p>\n      <p>16m</p>\n    </ion-item>\n\n    <ion-item item-left *ngFor = \'let comment of comments\'>\n      <ion-avatar item-left>\n        <img src= \'https://limitless-woodland-73873.herokuapp.com/{{comment.dpUrl}}\'>\n      </ion-avatar>\n      <p><strong>{{comment.username}}: </strong>{{comment.commentText}}</p>\n      <p>16m</p>\n    </ion-item>\n  </div>\n\n  <div class="comment">\n    <ion-item>\n      <ion-textarea type="text" placeholder="Comment.." [(ngModel)]="newComment"></ion-textarea>\n      <ion-icon name=\'send\' item-right (tap)=postComment()></ion-icon> \n    </ion-item>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\comment-modal\comment-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_comment_services__["a" /* CommentServices */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], CommentModal);

//# sourceMappingURL=comment-modal.js.map

/***/ })

});
//# sourceMappingURL=14.main.js.map