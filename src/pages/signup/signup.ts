import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServices } from "../../providers/user-services";

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  firstname       : string;
  lastname        : string;
  username        : string;
  email           : string;
  password        : string;
  confirmPassword : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: UserServices) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  enrollNewUser() {
    let body = {
      firstname: this.firstname,
      lastname : this.lastname,
      username : this.username,
      email : this.email,
      password : this.password
    }
    this.service.newUser(body)
    .subscribe((data) => {
      console.log(data);
    })
  }

}
