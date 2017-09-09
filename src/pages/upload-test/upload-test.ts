import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LatLng } from "@ionic-native/google-maps";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

/**
 * Generated class for the UploadTestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-upload-test',
  templateUrl: 'upload-test.html',
})
export class UploadTestPage {

  loggedInUserId    : number = this.navParams.get('loggedInUserId');  
  username          : string = this.navParams.get('username');
  mediaType         : number = this.navParams.get('mediaType');
  mediaFilePath     : string = "/assets/images/me.jpg";
  
  postTitle         : string = 'han bhai yelo';
  postDesc          : string = 'kesa diya!!!!!!!!!!!!!!!!!!!!!!!!!!!';
  constructor(public navParams: NavParams, private geolocation: Geolocation, private transfer: FileTransfer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadTestPage');
    this.upload();
  }

  upload() {
    let option = { enableHighAccuracy : true };

    this.geolocation.getCurrentPosition(option)
    .then((resp) => {
      let ionic: LatLng = new LatLng(resp.coords.latitude, resp.coords.longitude);
      const fileTransfer: FileTransferObject = this.transfer.create();
      let fileName: string =  this.username+'_'+this.loggedInUserId+'_'+this.postTitle;
      let options: FileUploadOptions = {
        fileKey: 'File',
        fileName,
        params: {
          postTitle: this.postTitle,
          postDesc: this.postDesc,
          postLat : ionic.lat,
          postLng : ionic.lng,
          postMediaType : this.mediaType,
          userId  : this.loggedInUserId  
        }
      }

      console.log('file upload options: ', options);
      console.log(this.mediaFilePath);
      
      fileTransfer.upload(this.mediaFilePath, 'http://localhost:3000/images/postImages', options)
      .then((data) => {
        console.log('image has been uploaded: ', data);
      }, (err) => {
        console.log('image could not be uploaded: ', err);
      })

    })
  }

  

}
