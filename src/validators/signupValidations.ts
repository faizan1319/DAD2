import { FormControl } from "@angular/forms";
import { UserServices } from "../providers/user-services";

export class SignupValidators {

    static service: UserServices;

    constructor(public service: UserServices){
        SignupValidators.service = service;
    }

    ionViewDidLoad(){
        console.log("Signup validator did load");
    }

    // static checkForDuplicateUsername(control: FormControl): any {
    //     let result: boolean;
    //     return new Promise( resolve => {
    //         this.service.checkForDuplicateUsername(control.value)
    //         .subscribe((data) => {
    //             if(data == true) {
    //                 resolve({
    //                     "username taken!" : true 
    //                 }) 
    //             }
    //             else resolve(null)
    //         })
    //     })
        
    // }

    // checkForDuplicateEmail(control: FormControl) {
    //     this.service.checkForEmailAlreadyExist(control.value)
    //     .subscribe((data) => console.log(data))
    // }

 
  static checkUsername(control: FormControl): any {
 
    return new Promise(resolve => {
 
      //Fake a slow response from server
 
      setTimeout(() => {
        if(control.value.toLowerCase() === "greg"){
 
          resolve({
            "username taken": true
          });
 
        } else {
          resolve(null);
        }
      }, 2000);
 
    });
  }

}