import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserServices provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserServices {

  private mainUrl: string = 'https://limitless-woodland-73873.herokuapp.com/users/';
  constructor(private http: Http) {
    console.log('Hello UserServices Provider');
  }

  loginUser(username: string, password: string) {
     let localUrl: string = this.mainUrl+'login/'+username;;

     return this.http.get(localUrl)
     .map((res: Response) => res.json())
  }

  newUser(body: any) {
    let localUrl: string = this.mainUrl+'signup';
    
    console.log(localUrl);
    console.log(body);
    
    return this.http.post(localUrl, body)
    .map((res: Response) => res.json())
  }

  checkForDuplicateUsername(username: string) {
    let localUrl: string = this.mainUrl+'checkDuplicateUsername/'+username;

    return this.http.get(localUrl)
    .map((res: Response) => res.json())
  }

  checkForEmailAlreadyExist(email: string) {
    let localUrl: string = this.mainUrl+'checkForEmailAlreadyExist/'+email;

    return this.http.get(localUrl)
    .map((res: Response) => res.json())
  }

}
