webpackJsonp([6],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_post__ = __webpack_require__(289);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostPageModule", function() { return NewPostPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewPostPageModule = (function () {
    function NewPostPageModule() {
    }
    return NewPostPageModule;
}());
NewPostPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__new_post__["a" /* NewPostPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_post__["a" /* NewPostPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__new_post__["a" /* NewPostPage */]
        ]
    })
], NewPostPageModule);

//# sourceMappingURL=new-post.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostPage; });
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
 * Generated class for the NewPostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewPostPage = (function () {
    function NewPostPage(navCtrl, navParams, transfer, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.loggedInUserId = this.navParams.get('loggedInUserId');
        this.username = this.navParams.get('username');
        this.mediaType = this.navParams.get('mediaType');
        this.mediaFilePath = this.navParams.get('mediaFilePath');
        this.postLat = this.navParams.get('postLat');
        this.postLng = this.navParams.get('postLng');
        this.postDetails = this.formBuilder.group({
            postTitle: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(100)]],
            postDesc: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            postCategories: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
        if (this.mediaType == 1) {
            this.fileKey = 'image';
            this.fileName = 'image';
            this.postingUrl = 'https://limitless-woodland-73873.herokuapp.com/images/postImages';
        }
        else {
            this.fileKey = 'video';
            this.fileName = 'video';
            this.postingUrl = 'https://limitless-woodland-73873.herokuapp.com/videos/postVideos';
        }
    }
    NewPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewPostPage');
        console.log(this.mediaFilePath);
    };
    NewPostPage.prototype.upload = function () {
        var _this = this;
        this.postTitle = this.postDetails.get('postTitle').value;
        this.postDesc = this.postDetails.get('postDesc').value;
        this.postCategories = this.postDetails.get('postCategories').value;
        console.log(this.postCategories);
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: this.fileKey,
            fileName: this.fileName,
            mimeType: "multipart/form-data",
            params: {
                postTitle: this.postTitle,
                postDesc: this.postDesc,
                postCategories: this.postCategories,
                postLat: this.postLat,
                postLng: this.postLng,
                postMediaType: this.mediaType,
                userId: this.loggedInUserId
            }
        };
        console.log('file upload options: ', options);
        console.log(this.mediaFilePath);
        fileTransfer.upload(this.mediaFilePath, this.postingUrl, options)
            .then(function (data) {
            console.log('image has been uploaded: ', data);
            _this.navCtrl.pop({}, function () {
                var toast = _this.toastCtrl.create({
                    message: 'Your post has been successfully uploaded !',
                    duration: 3000
                });
                toast.present();
            });
        }, function (err) {
            console.log('image could not be uploaded: ', err);
        });
    };
    return NewPostPage;
}());
NewPostPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-new-post',template:/*ion-inline-start:"E:\MapPractice\src\pages\new-post\new-post.html"*/'<!--\n  Generated template for the NewPostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>newPost</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class=\'media\'>\n    <div class=\'media-image\' *ngIf=\'mediaType == 1\'>\n       <ion-img src = {{mediaFilePath}}></ion-img>     \n       <!-- <ion-img src = \'assets/images/test.jpg\'></ion-img>      -->\n      \n    </div>\n\n    <div class=\'media-video\'  *ngIf=\'mediaType == 2\'>\n      <video controls autoplay>\n        <source src= {{mediaFilePath}} type="video/mp4">\n        Your browser does not support the video tag.\n      </video>\n    </div>\n  </div>\n\n\n  <form [formGroup]=\'postDetails\'>\n    <ion-grid >\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label fixed>Title</ion-label>\n            <ion-input type="text" formControlName=\'postTitle\'></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label fixed>Description</ion-label>            \n            <ion-textarea type="text" formControlName=\'postDesc\'></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-item>\n      <ion-label>Categories</ion-label>\n      <ion-select formControlName="postCategories" multiple=\'true\'>\n        <ion-label>Traffic Disturbance</ion-label>        \n        <ion-option value="1">Traffic Jam</ion-option>\n        <ion-option value="2">Traffic Disturbed</ion-option>\n        <ion-option value="3">Road Block</ion-option>\n        <ion-option value="4">Road Damaged</ion-option>\n        <ion-option value="5">Pollution</ion-option>\n        <ion-option value="6">Please Respect The Law</ion-option>\n        <ion-option value="7">Accident</ion-option>\n        <ion-option value="8">Emergency</ion-option>\n        <ion-option value="9">Need Of Ambulance</ion-option>\n        <ion-option value="10">Need Of Firebrigade</ion-option>\n        <ion-option value="11">Need Of Towing Truck</ion-option>\n        <ion-option value="12">Dharna</ion-option>\n        <ion-option value="13">Halat Kharab</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <div class="submit-button">\n        <button ion-button block (tap)="upload()" [disabled]=\'!postDetails.valid\'>Dekhao !!</button>\n    </div>\n  </form>\n\n\n\n</ion-content>\n'/*ion-inline-end:"E:\MapPractice\src\pages\new-post\new-post.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
], NewPostPage);

//# sourceMappingURL=new-post.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map