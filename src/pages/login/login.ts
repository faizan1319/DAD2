import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

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
    userData: any;


  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: UserServices,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }


  userLogin() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent'
    });

    loading.present();

    this.service.loginUser(this.username, this.localPassword)
    .subscribe((data) => {
      if(data.length == 2) {
        let toast = this.toastCtrl.create({
          message: 'Incorrect credentials! Please check your username or password.',
          duration: 3000
        })
        loading.dismiss();
        toast.present();
      }
      else if(data.length == 1 ) {
        // console.log(data);
          this.userData = {
            loggedInUserId          : data["0"].userId,
            username                : this.username,
            userType                : data["0"].userType,
            firstname               : data["0"].firstname,
            lastname                : data["0"].lastname,
            email                   : data["0"].email,
            dpUrl                   : data["0"].dpUrl,
            phone                   : data["0"].phone,
            postCount               : data["0"].postCount,
            userSubscriptions       : data["0"].subscriptions,
            employeePostCategoryId  : data["0"].employeePostCategoryId
          }
          let categoryTags: any = {
            [1]  : 0,
            [2]  : 0,
            [3]  : 0,
            [4]  : 0,
            [5]  : 0,
            [6]  : 0,
            [7]  : 0,
            [8]  : 0,
            [9]  : 0,
            [10]  : 0,
            [11]  : 0,
            [12]  : 0,
            [13]  : 0
          }
          console.log(categoryTags);
          
          if(this.userData.userType == 1) {
            for(let category of this.userData.userSubscriptions) {
              console.log('i am the category: ',category.categoryId);
              switch(category.categoryId) {
                case 1:
                  categoryTags[1] = 1;
                  break;
                case 2:
                  categoryTags[2] = 1;
                  break;
                case 3:
                  categoryTags[3] = 1;
                  break;
                case 4:
                  categoryTags[4] = 1;
                  break;  
                case 5:
                  categoryTags[5] = 1;
                  break;
                case 6:
                  categoryTags[6] = 1;
                  break;
                case 7:
                  categoryTags[7] = 1;
                  break;
                case 8:
                  categoryTags[8] = 1;
                  break;  
                case 9:
                  categoryTags[9] = 1;
                  break;
                case 10:
                  categoryTags[10] = 1;
                  break;
                case 11:
                  categoryTags[11] = 1;
                  break;
                case 12:
                  categoryTags[12] = 1;
                  break;
                case 13:
                  categoryTags[13] = 1;
                  break;  
              }
            }
            console.log('category tags: ', categoryTags);
            // window["plugins"].OneSignal
            // .sendTags({
            //   userType: this.userData.userType,
            //   categoryId1: categoryTags[1],
            //   categoryId2: categoryTags[2],
            //   categoryId3: categoryTags[3],
            //   categoryId4: categoryTags[4],
            //   categoryId5: categoryTags[5],
            //   categoryId6: categoryTags[6],
            //   categoryId7: categoryTags[7],
            //   categoryId8: categoryTags[8],
            //   categoryId9: categoryTags[9],
            //   categoryId10: categoryTags[10],
            //   categoryId11: categoryTags[11],
            //   categoryId12: categoryTags[12],
            //   categoryId13: categoryTags[13]
            // });
            loading.dismiss();
            this.navCtrl.setRoot('MainPage', {
              userData: this.userData
            }, {}, () => {
              let toast = this.toastCtrl.create({
                message: 'See whats happeing and show others what might help them :)',
                duration: 3000
              })
              toast.present();
            })
          }
          else if(this.userData.userType == 3) {
            categoryTags[this.userData.employeePostCategoryId] = 1;
            console.log('employee ke tags: ', categoryTags);
            // window["plugins"].OneSignal
            // .sendTags({
            //   userType: this.userData.userType,
            //   categoryId1: categoryTags[1],
            //   categoryId2: categoryTags[2],
            //   categoryId3: categoryTags[3],
            //   categoryId4: categoryTags[4],
            //   categoryId5: categoryTags[5],
            //   categoryId6: categoryTags[6],
            //   categoryId7: categoryTags[7],
            //   categoryId8: categoryTags[8],
            //   categoryId9: categoryTags[9],
            //   categoryId10: categoryTags[10],
            //   categoryId11: categoryTags[11],
            //   categoryId12: categoryTags[12],
            //   categoryId13: categoryTags[13]
            // });
            loading.dismiss();
            this.navCtrl.setRoot('RelatedNews', {
              userData: this.userData
            }, {}, () => {
              let toast = this.toastCtrl.create({
                message: 'See whats happeing and do something about it!',
                duration: 3000
              })
              toast.present();
            })
          }
        // })
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
