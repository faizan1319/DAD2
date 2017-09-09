import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { UserServices } from "../../providers/user-services";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
    username: string;
    localPassword: string;
    realPassword: string;


  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: UserServices,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }


  userLogin() {
    this.service.loginUser(this.username, this.localPassword)
    .subscribe((data) => {
      if(data.length == 2) {
        let toast = this.toastCtrl.create({
          message: 'Incorrect credentials! Please check your username or password.',
          duration: 3000
        })
        toast.present();
      }
      else if(data.length == 1 ) {
        console.log(data);
        this.navCtrl.setRoot('MainPage', {
          loggedInUserId    : data["0"].userId,
          username          : this.username,
          userType          : data["0"].userType,
          firstname         : data["0"].firstname,
          lastname          : data["0"].lastname,
          email             : data["0"].email,
          dpUrl             : data["0"].dpUrl,
          phone             : data["0"].phone,
          postCount         : data["0"].postCount,
        }, {}, () => {
          let toast = this.toastCtrl.create({
            message: 'See whats happeing and show others what might help them :)',
            duration: 3000
          })
          toast.present();
        })
      }
      else {
        let toast = this.toastCtrl.create({
        message: "There is no account associated with this username.",
        duration: 3000
        })
        toast.present();
      }
        
    },(error) => {
        console.log('errorjee: ',error);
        let toast = this.toastCtrl.create({
          message: "Server Problem! Please try later.",
          showCloseButton: true,
          closeButtonText: "Ok"
        })
        toast.present();
    })
    
  }
  
  moveToSignup(){
    this.navCtrl.push('Signup');
  }

  // checking(){
  //   this.service.checkForDuplicateUsername('faizy14')
  //   .subscribe((data) => {
  //     console.log(data);
  //   })
  // }


}
