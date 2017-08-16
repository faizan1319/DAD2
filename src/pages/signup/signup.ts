import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
// import { SignupValidators } from "../../validators/signupValidations";
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

  inputSection : FormGroup;
  static service : UserServices;

  constructor (
    public navCtrl      : NavController,
    public navParams    : NavParams,
    public toastCtrl    : ToastController,
    public formBuilder  : FormBuilder,
    // public signupVal    : SignupValidators,
    public service      : UserServices
  ) {
      Signup.service = service;   
      this.inputSection = formBuilder.group({
        firstname : ['', [Validators.required, Validators.maxLength(20)]],
        lastname : ['', [Validators.required, Validators.maxLength(20)]],
        number    : [''],
        username : ['', [Validators.required, Validators.maxLength(20)], Signup.checkForDuplicateUsername],
        email : ['', [Validators.required, Validators.email], Signup.checkForDuplicateEmail],
        password : ['', [Validators.required, Validators.minLength(8)]]
        // confirmPassword : ['', this.checkConfirmPassword]
      })
  }


  ionViewDidLoad() {
    console.log("signup page did load");
  }

  // checkConfirmPassword(control: FormControl) {
  //   if(control.value == this.inputSection.controls.password) return null;
  //   else return true;
  // }

  static checkForDuplicateEmail(control: FormControl): any {
        return new Promise( resolve => {
            Signup.service.checkForEmailAlreadyExist(control.value)
            .subscribe((data) => {
                console.log(data);
                if(data == true) {
                    // console.log('i am in data ture check and the data is: ', data);
                    resolve({
                        "username taken!" : true 
                    }) 
                }
                else{
                  // console.log('i am in data false check');
                  resolve(null);
                } 
            })
        })
    }
    
    static checkForDuplicateUsername(control: FormControl): any {
        return new Promise( resolve => {
            Signup.service.checkForDuplicateUsername(control.value)
            .subscribe((data) => {
                console.log(data);
                if(data == true) {
                    console.log('i am in data ture check and the data is: ', data);
                    resolve({
                        "username taken!" : true 
                    }) 
                }
                else{
                  console.log('i am in data false check');
                  resolve(null);
                } 
            })
        })
    }

  
  
  enrollNewUser() {
    console.log('hey there');
    console.log(this.inputSection.get('firstname').value);
    console.log(this.inputSection.value);
    
    let body = this.inputSection.value;
    // console.log('here is the body: ',body);
    // let body = {
    //   firstname: this.firstname,
    //   lastname : this.lastname,
    //   username : this.username,
    //   email : this.email,
    //   password : this.password
    // }

    this.service.newUser(body)
    .subscribe((data) => {
      this.navCtrl.setRoot('Login', {}, {}, () => {
        let toast = this.toastCtrl.create({
          message: data.message,
          showCloseButton: true,
          closeButtonText: "Ok"
        })
        toast.present();
      })
    })
    
  }

}
