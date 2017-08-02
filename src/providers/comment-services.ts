import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CommentServices provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CommentServices {

  mainUrl: string = 'http://localhost:3000/comments';
  
  constructor(public http: Http) {
    console.log('Hello CommentServices Provider');
  }

  getPostComments(postId: number) {
    let localUrl: string = this.mainUrl+'/'+postId;
    return this.http.get(localUrl)
    .map((res: Response) => res.json())
  }

  postNewComment(comment: string, userId: number, postId: number) {
    let localUrl: string = this.mainUrl+'/incomming';
    let body = {
      comment,
      postId,
      userId

    };
    console.log('req body:', body);
    return this.http.post(localUrl, body)
    .map((res: Response) => res.json())
  }

  getPostAttributesCount(postId: number) {
    let localUrl: string = this.mainUrl+'/counts/'+postId;
    return this.http.get(localUrl)
    .map((res: Response) => res.json())
  }



}
