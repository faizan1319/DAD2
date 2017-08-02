import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CommentServices } from "../../providers/comment-services";

/**
 * Generated class for the CommentModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-comment-modal',
  templateUrl: 'comment-modal.html',
})
export class CommentModal {

  comments: any;
  newComment: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private service: CommentServices) {
  }

  postId: number = this.navParams.get('postId');
  postDesc: string = this.navParams.get('postDesc');
  postUsername: string = this.navParams.get('postUsername');
  postUserDpUrl: string = this.navParams.get('postUserDpUrl');
  loggedInUserId: number = this.navParams.get('loggedInUserId');
  
  

  

  ionViewDidLoad() {
    console.log('comment modal loaded and the logged in user id is: ', this.loggedInUserId);
    
    this.service.getPostComments(this.postId)
    .subscribe((data) => {
      this.comments = data;
      console.log(this.comments);
    });
  }

  postComment() {
    console.log('comment text: ',this.newComment);
    this.service.postNewComment(this.newComment, this.loggedInUserId, this.postId)
    .subscribe((data) => {
      this.newComment = null;
    })

  }

  dismiss() {
    this.service.getPostAttributesCount(this.postId)
    .subscribe((data) => {
      console.log(data);
      this.viewCtrl.dismiss(data);
    })
  }

  
}
