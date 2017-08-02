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

  private mainUrl: string = 'http://localhost:3000/users/';
  constructor(private http: Http) {
    console.log('Hello UserServices Provider');
  }

  loginUser(username: string, password: string) {
     let localUrl: string = this.mainUrl+'login/'+username;;

     return this.http.get(localUrl)
     .map((res: Response) => res.json())
  }

}
