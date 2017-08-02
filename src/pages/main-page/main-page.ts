import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Platform, Slides, ModalController } from 'ionic-angular';
import { PostServices } from "../../providers/post-services";

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
@IonicPage()
@Component({
  selector: 'page-main-page',
  templateUrl: 'main-page.html',
})
export class MainPage {

  slideTitle: string = "Trending";
  posts: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public modal:ModalController, private service: PostServices) {
  }

  loggedInUserId: number = this.navParams.get('loggedInUserId');

  ionViewWillLoad() {
    console.log('page loded and the user id is: ', this.loggedInUserId);
    this.service.getTrending()
    .subscribe((data) => {
      if(data != null) {
        this.posts = data;
        console.log('here is the data= ', this.posts);
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
    }
    
  }
  
  openCamera()
  {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
      // Handle error
      });
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
