import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Platform, Slides, ModalController, LoadingController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { Geolocation } from '@ionic-native/geolocation';
// import { PhotoViewer } from '@ionic-native/photo-viewer';
// import { File } from '@ionic-native/file';
// import { FilePath } from '@ionic-native/file-path';
// import { FileChooser } from '@ionic-native/file-chooser';

import { PostServices } from "../../providers/post-services";
import { LatLng } from "@ionic-native/google-maps";

/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main-page',
  templateUrl: 'main-page.html',
})
export class MainPage {

  trendingPosts                   : any;
  postByLoggedInUser              : any;
  subscribedCategoriesPosts       : any; 
  slideTitle                      : string;
  hostURL                         : string = "https://limitless-woodland-73873.herokuapp.com/";
  userData                        : any    = this.navParams.get('userData');
  // loggedInUserId                  : number = this.navParams.get('loggedInUserId');
  // loggedInUsername                : string = this.navParams.get('username');
  // firstname                       : string = this.navParams.get('firstname');
  // lastname                        : string = this.navParams.get('lastname');
  // email                           : string = this.navParams.get('email');
  // phone                           : string = this.navParams.get('phone');
  // loggedInUserDpURL               : string = this.navParams.get('dpUrl');
  // loggedInUserPostCount           : number = this.navParams.get('postCount');
  // loggedInUserId                  : number = this.userData.loggedInUserId;
  // loggedInUsername                : string = this.userData.username;
  // firstname                       : string = this.userData.firstname;
  // lastname                        : string = this.userData.lastname;
  // email                           : string = this.userData.email;
  // phone                           : string = this.userData.phone;
  // loggedInUserDpURL               : string = this.userData.dpUrl;
  // loggedInUserPostCount           : number = this.userData.postCount;
  
  constructor(
    public navCtrl        : NavController,
    public navParams      : NavParams,
    public toastCtrl      : ToastController,
    public modal          : ModalController,
    private service       : PostServices,
    private mediaCapture  : MediaCapture,
    // private pv         : PhotoViewer,
    // private filePath   : FilePath,
    // private fileChooser: FileChooser,
    private camera        : Camera,
    private geolocation   : Geolocation,
    public loadingCtrl    : LoadingController
  ) {}

 

  ionViewWillLoad() {
    console.log('page loded and the user id is: ', this.userData);
    let loading = this.loadingCtrl.create({
      spinner: 'crescent'
    });
    loading.present();
    this.slideTitle = 'Trending';
    this.service.getTrending()
    .subscribe((data) => {
      if(data != null) {
        this.trendingPosts = data;
        console.log('here is the data= ', this.trendingPosts);
        loading.dismiss();
      }
    })
  }

  @ViewChild(Slides) slides: Slides;
  slideIndex: number;
  
  changeTitle()
  {
    this.slideIndex = this.slides.getActiveIndex();

    if(this.slideIndex == 0)
    {
      this.slideTitle = "Trending";
    }
    if(this.slideIndex == 1)
    {
      let loading = this.loadingCtrl.create({
        spinner: 'crescent'
      });
      loading.present();

      this.slideTitle = "Subscriptions";
      this.service.getUserSubscribtionPosts(this.userData.loggedInUserId)
      .subscribe( (data)=> {
        if(data != null) {
          this.subscribedCategoriesPosts = data;
          console.log(this.subscribedCategoriesPosts);
          loading.dismiss();
        }
      })
    }
    if(this.slideIndex >= 2)
    {
      let loading = this.loadingCtrl.create({
        spinner: 'crescent'
      });
      loading.present();

      this.slideTitle = "My Posts";
      this.service.getPostByUserId(this.userData.loggedInUserId)
      .subscribe((data) => {
        if(data != null) {
          this.postByLoggedInUser = data;
          console.log(this.postByLoggedInUser);
          loading.dismiss();
        }
      })
    }
    
  }
  
  openCamera()
  {
      // this.navCtrl.push('UploadTestPage', {
      //   loggedInUserId  : this.loggedInUserId,
      //   username        : this.loggedInUsername, 
      //   mediaType       : 1
      // });
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options).then((imageData) => {
        let option = { enableHighAccuracy : true };

        let loading = this.loadingCtrl.create({
          spinner: 'crescent'
        });
        loading.present();

        this.geolocation.getCurrentPosition(option)
        .then((resp) => {
          let ionic: LatLng = new LatLng(resp.coords.latitude, resp.coords.longitude);
          console.log('From camera plugin: ', imageData);
    
          loading.dismiss();
      
          this.navCtrl.push('NewPostPage', {
                  loggedInUserId  : this.userData.loggedInUserId,
                  username        : this.userData.loggedInUsername, 
                  mediaType       : 1,
                  mediaFilePath   : imageData,
                  postLat         : ionic.lat,
                  postLng         : ionic.lng   
          })
        })
        
      }, (err) => {
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
  }

  openVideoCam() {
    this.mediaCapture.captureVideo()
      .then ((data: MediaFile[]) => {
        console.log('From mediaCapture.captureVideo plugin: ', data['0'].fullPath);
        let option = { enableHighAccuracy : true };

        let loading = this.loadingCtrl.create({
          spinner: 'crescent'
        });
        loading.present();

        this.geolocation.getCurrentPosition(option)
        .then((resp) => {
          let ionic: LatLng = new LatLng(resp.coords.latitude, resp.coords.longitude);
          console.log('From camera plugin: ', data['0'].fullPath);

          loading.dismiss();
      
          this.navCtrl.push('NewPostPage', {
                  loggedInUserId  : this.userData.loggedInUserId,
                  username        : this.userData.loggedInUsername, 
                  mediaType       : 2,
                  mediaFilePath   : data['0'].fullPath,
                  postLat         : ionic.lat,
                  postLng         : ionic.lng   
          })
        })    
        }, (err: CaptureError) => console.error(err)
      );
  }

  openNotifications()
  {
    this.navCtrl.push('Notifications');
  }

  logout(){
    this.navCtrl.setRoot('WelcomePage', {}, {}, () => {
    let toast = this.toastCtrl.create({
      message: 'Come Back Soon!',
      duration: 3000
    })
    toast.present();
  })
  }

  openPostDetail()
  {
    console.log("i'm here");
    this.navCtrl.push('PostDetail');
  }
  
  moveToMaps()
  {
    this.navCtrl.push('GeneralMapPage');
  }

  moveToSettings(){
    this.navCtrl.push('SettingsPage', {
      userData: this.userData
    });
  }

  openCommentsModal(postId: number, postDesc: string, postUsername: string, postUserDpUrl: string)
  {
    
    const commentModal = this.modal.create('CommentModal', {
      postId,
      postDesc,
      postUsername,
      postUserDpUrl,
      loggedInUserId : this.userData.loggedInUserId 
    });
    commentModal.present();
  }

  openMapModal(lat:number ,lng:number, postTitle:string)
  {
    
    this.navCtrl.push('PostMapModal', {
      latitude  : lat,
      longitude : lng,
      title     : postTitle 
    });
  }

}
