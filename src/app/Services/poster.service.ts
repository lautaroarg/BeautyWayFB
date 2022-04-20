import { Injectable } from '@angular/core';
import { IPost, INewPost, IComment, IHeart } from '../Models/i-post';
import { Observable, from } from 'rxjs';
import { MyAuthService } from './my-auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PosterService {

  constructor(
    public MyAuth: MyAuthService,
    public afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public afFunctions: AngularFireFunctions) { }

  public AddAPost(p: INewPost): Observable<any> {
    const AddAPost = this.afFunctions.httpsCallable('AddAPost');

    return AddAPost(p)
  }

  public DeleteAPost(PostId: string): Observable<any> {
    const DeletePost = this.afFunctions.httpsCallable('DeletePost');

    return DeletePost({ PostId })
  }

  public GetAllPosts(): Observable<IPost[]> {
    return this.afStore.collection<IPost>('Posts').valueChanges({ idField: 'Id' }).pipe(
      map(res => {
        const ret = res.sort((a, b) => b.PostedOn - a.PostedOn)
        return ret;
      }),
      share()
    )
  }

  public GetAPost(PostId: string): Observable<IPost> {
    return this.afStore.doc<IPost>(`Posts/${PostId}`).valueChanges().pipe(
      map(r => {
        r.Id = PostId;
        return r
      }),
      share()
    )
  }

  public GetAUserPosts(UserId: string): Observable<IPost[]> {
    return this.afStore.collection<IPost>(`Posts`, ref =>
      ref.where('OwnerId', '==', UserId))
      .valueChanges({ idField: 'Id' }).pipe(share())
  }

  public GetAPostComments(PostId: string): Observable<IComment[]> {
    return this.afStore.collection<IComment>(`Comments/`, ref =>
      ref.where('PostId', '==', PostId).orderBy("CommentedOn"))
      .valueChanges({ idField: 'Id' }).pipe(share())
  }

  public GetAPostHearts(PostId: string): Observable<IHeart[]> {
    return this.afStore.collection<IHeart>('Hearts/', ref =>
      ref.where('PostId', '==', PostId))
      .valueChanges().pipe(share())
  }

  public CheckIsPostHeartedByUser(PostId: string, UserId: string): Observable<number> {
    return this.afStore.doc<number>(`Hearts/${PostId}_${UserId}`).valueChanges()
      .pipe(
        map(res => {
          // 1=Hearted, 2=not Hearted.
          res = res ? 1 : 2;
          return res;
        }),
        share()
      )
  }

  public NewComment(PostId: string, CommentMsg: string): Observable<any> {
    var AddAComment = this.afFunctions.httpsCallable('AddAComment')

    return AddAComment({ 'PostId': PostId, 'CommentMsg': CommentMsg });
  }

  public AddRemoveHeart(PostId): Observable<any> {
    var AddRemoveHeart = this.afFunctions.httpsCallable('AddRemoveHeart')

    return AddRemoveHeart({ 'PostId': PostId });
  }

  // private handleError(errorResponse: HttpErrorResponse) {
  //   if (errorResponse.error instanceof ErrorEvent) {
  //     console.error('Client Side Error: ', errorResponse.error.message);
  //   } else {
  //     console.log('Server Side Error: ', errorResponse);
  //     if (errorResponse.status == 401) {
  //       return throwError(errorResponse.statusText);
  //     }
  //   }
  //   return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  // }
}
