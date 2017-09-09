import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, Slides, ModalController } from 'ionic-angular';

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
  slideTitle                      : string = "Trending";
  hostURL                         : string = "https://limitless-woodland-73873.herokuapp.com/";
  loggedInUserId                  : number = this.navParams.get('loggedInUserId');
  loggedInUsername                : string = this.navParams.get('username');
  firstname                       : string = this.navParams.get('firstname');
  lastname                        : string = this.navParams.get('lastname');
  email                           : string = this.navParams.get('email');
  phone                           : string = this.navParams.get('phone');
  loggedInUserDpURL               : string = this.navParams.get('dpUrl');
  loggedInUserPostCount           : number = this.navParams.get('postCount');
  
  constructor(
    public navCtrl        : NavController,
    public navParams      : NavParams,
    public modal          : ModalController,
    private service       : PostServices,
    private mediaCapture  : MediaCapture,
    // private pv         : PhotoViewer,
    // private filePath   : FilePath,
    // private fileChooser: FileChooser,
    private camera        : Camera,
    private geolocation   : Geolocation
  ) {}

 

  ionViewWillLoad() {
    console.log('page loded and the user id is: ', this.loggedInUserId);
    this.service.getTrending()
    .subscribe((data) => {
      if(data != null) {
        this.trendingPosts = data;
        console.log('here is the data= ', this.trendingPosts);
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
      this.slideTitle = "Subscriptions";
    }
    if(this.slideIndex >= 2)
    {
      this.slideTitle = "My Posts";
      this.service.getPostByUserId(this.loggedInUserId)
      .subscribe((data) => {
        if(data != null) {
          this.postByLoggedInUser = data;
          console.log(this.postByLoggedInUser);
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
        this.geolocation.getCurrentPosition(option)
        .then((resp) => {
          let ionic: LatLng = new LatLng(resp.coords.latitude, resp.coords.longitude);
          console.log('From camera plugin: ', imageData);
          this.navCtrl.push('NewPostPage', {
                  loggedInUserId  : this.loggedInUserId,
                  username        : this.loggedInUsername, 
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
        this.geolocation.getCurrentPosition(option)
        .then((resp) => {
          let ionic: LatLng = new LatLng(resp.coords.latitude, resp.coords.longitude);
          console.log('From camera plugin: ', data['0'].fullPath);
          this.navCtrl.push('NewPostPage', {
                  loggedInUserId  : this.loggedInUserId,
                  username        : this.loggedInUsername, 
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

  openPostDetail()
  {
    console.log("i'm here");
    this.navCtrl.push('PostDetail');
  }
  
  moveToMaps()
  {
    this.navCtrl.push('Maps');
  }

  moveToRelatedNews(){
    this.navCtrl.push('RelatedNews');
  }

  openCommentsModal(postId: number, postDesc: string, postUsername: string, postUserDpUrl: string)
  {
    
    const commentModal = this.modal.create('CommentModal', {
      postId,
      postDesc,
      postUsername,
      postUserDpUrl,
      loggedInUserId : this.loggedInUserId 
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
