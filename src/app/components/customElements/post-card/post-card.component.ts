import { Component, OnInit, Input } from '@angular/core';
import { IPost, IComment } from 'src/app/Models/i-post';
import { IUser } from 'src/app/Models/i-user';
import * as moment from 'moment';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { PosterService } from 'src/app/Services/poster.service';
import { Observable } from 'rxjs';
import { FollowService } from 'src/app/Services/follow.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'element-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() PostData: IPost;
  Owner: IUser;
  Comments$: Observable<IComment[]>;
  IsHeartedByUser$: Observable<number>;
  CheckFollowStatus$: Observable<boolean>;

  CommentText: string;
  ImgHeight: number;
  ImgWidth: number;

  UserLoaded: boolean = false;
  ImageLoaded: boolean = false;
  CommentUploading: boolean = false;
  ShowComments: boolean = false;

  ImageOpacity: number = 0;

  moment = moment;

  DateTimeFormat = {
    sameDay: '[Today] - h:mm a',
    nextDay: '[Tomorrow] - h:mm a',
    nextWeek: 'dddd - h:mm a',
    lastDay: '[Yesterday] - h:mm a',
    lastWeek: '[Last] ddd - h:mm a',
    sameElse: 'D/M/YY - h:mm a'
  }

  constructor(
    public MyAuth: MyAuthService,
    private poster: PosterService,
    public followSrv: FollowService, ) { }

  ngOnInit() {
    this.MyAuth.GetAUserInfoFromStore(this.PostData.OwnerId).pipe(take(1))
      .subscribe(User => {
        this.Owner = User;
        this.UserLoaded = true;
      })

    this.Comments$ = this.poster.GetAPostComments(this.PostData.Id);
    this.IsHeartedByUser$ = this.poster.CheckIsPostHeartedByUser(this.PostData.Id, this.MyAuth.LoggedUser.Id);
    this.CheckFollowStatus$ = this.followSrv.GetFollowStatus(this.PostData.OwnerId);

    this.ImgHeight = this.PostData.ImageMeta.Height;
    this.ImgWidth = this.PostData.ImageMeta.Width;
  }

  PostAComment() {
    this.CommentUploading = true;
    this.poster.NewComment(this.PostData.Id, this.CommentText).subscribe(r => {
      this.CommentText = '';
      console.log(r)
      this.CommentUploading = false;
    })
  }

  PanelToggle() {
    this.ShowComments = !this.ShowComments;
  }

  public AddRemoveHeart() {
    this.poster.AddRemoveHeart(this.PostData.Id).subscribe(r => {
      console.log(r)
    })
  }

  FollowOwner() {
    this.followSrv.FollowAUser(this.Owner.Id, this.Owner.DisplayName, this.Owner.PhotoURL)
      .subscribe(res => {
        console.log(res)
      })
  }

  ImgLoaded(Image, ImageURL) {
    Image.src = ImageURL;
    this.ImageLoaded = true;
    this.ImageOpacity = 1;
  }

  TrackByCommentId(Comment: IComment) {
    return Comment.Id;
  }

  DeletePost() {
    this.poster.DeleteAPost(this.PostData.Id).subscribe(r => {
      // console.log(r)
      this.MyAuth.Notify.openSnackBar(r.Message, '')
    })
  }
}
