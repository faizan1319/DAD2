import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostServices provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostServices {

  mainUrl: string = 'https://limitless-woodland-73873.herokuapp.com/posts';

  constructor(public http: Http) {
    console.log('Hello PostServices Provider');
  }

  getTrending(){
    let localUrl: string = this.mainUrl+'/trending';
    return this.http.get(localUrl)
    .map((res: Response) => res.json())
  }

}
