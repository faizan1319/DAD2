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
        if(data.length > 0) {
          this.realPassword = data["0"].password;
          if( this.localPassword == this.realPassword )
          {
            this.navCtrl.push('MainPage', {
              loggedInUserId : data["0"].user_id 
            });
          }
        }
        else {
          let toast = this.toastCtrl.create({
          message: "There is no account associated with this username.",
          showCloseButton: true,
          closeButtonText: "Ok"
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


}
