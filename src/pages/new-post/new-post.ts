import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { LatLng } from "@ionic-native/google-maps";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

/**
 * Generated class for the NewPostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {

  loggedInUserId    : number = this.navParams.get('loggedInUserId');
  username          : string = this.navParams.get('username');
  mediaType         : number = this.navParams.get('mediaType');
  
  mediaFilePath     : string = this.navParams.get('mediaFilePath');
  postLat           : number = this.navParams.get('postLat');
  postLng           : number = this.navParams.get('postLng');
  postTitle         : string ;
  postDesc          : string ;
  postCategories    : any ;
  fileKey           : string ;
  fileName          : string ;
  postingUrl        : string ;
  

  constructor(
    public navCtrl        : NavController,
    public navParams      : NavParams,
    private transfer      : FileTransfer,
    private formBuilder   : FormBuilder,
    public toastCtrl      : ToastController 
  ) {
      if(this.mediaType == 1) {
        this.fileKey    = 'image'; 
        this.fileName   = 'image';
        this.postingUrl = 'https://limitless-woodland-73873.herokuapp.com/images/postImages';
      }
      else {
        this.fileKey     = 'video'; 
        this.fileName    = 'video';
        this.postingUrl   = 'https://limitless-woodland-73873.herokuapp.com/videos/postVideos';
        
      }
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad NewPostPage');
    console.log(this.mediaFilePath);    
  }

  postDetails : FormGroup = this.formBuilder.group({
    postTitle : ['', [Validators.required, Validators.maxLength(100)]],
    postDesc  : ['', Validators.required],
    postCategories :['', Validators.required]
  })

  


  upload() {

    this.postTitle = this.postDetails.get('postTitle').value;
    this.postDesc = this.postDetails.get('postDesc').value;
    this.postCategories = this.postDetails.get('postCategories').value;
    console.log(this.postCategories);
    
    const fileTransfer: FileTransferObject = this.transfer.create();
    
    let options: FileUploadOptions = {
      fileKey   : this.fileKey,
      fileName  : this.fileName,
      mimeType  : "multipart/form-data",
      params    : {
        postTitle       : this.postTitle,
        postDesc        : this.postDesc,
        postCategories  : this.postCategories,
        postLat         : this.postLat,
        postLng         : this.postLng,
        postMediaType   : this.mediaType,
        userId          : this.loggedInUserId  
      }

    }

    console.log('file upload options: ', options);
    console.log(this.mediaFilePath);
      
    fileTransfer.upload(this.mediaFilePath, this.postingUrl, options)
    .then((data) => {
      console.log('image has been uploaded: ', data);
      this.navCtrl.pop({}, () => {
        let toast = this.toastCtrl.create({
          message: 'Your post has been successfully uploaded !',
          duration: 3000
        })
        toast.present();
      })
    }, (err) => {
      console.log('image could not be uploaded: ', err);
    })

  }

}
