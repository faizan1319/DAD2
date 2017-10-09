import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  userData           : any = this.navParams.get('userData');
  changePasswordForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword : ['', [Validators.minLength(8), Validators.required], []],
      newPassword     : ['', [Validators.minLength(8), Validators.required], []],
      confirmPassword : ['', [Validators.minLength(8), Validators.required], []]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    console.log('user data: ', this.userData);
  }

  // checkConfirmPassword(newPassword: FormControl, confirmPassword: FormControl) {
  //   return new Promise ( resolve => {

  //   })
  // }

}
