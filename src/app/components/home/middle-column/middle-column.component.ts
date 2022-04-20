import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ImageOptimizationService } from 'src/app/Services/image-optimization.service';
import { ImageCompressService } from 'ng2-image-compress';
import { AngularFireStorage } from '@angular/fire/storage';
import * as moment from 'moment';
import { finalize, take, map, share } from 'rxjs/operators';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { IPost, INewPost, IImageCords } from 'src/app/Models/i-post';
import { IUser } from 'src/app/Models/i-user';
import { PosterService } from 'src/app/Services/poster.service';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-middle-column',
  templateUrl: './middle-column.component.html',
  styleUrls: ['./middle-column.component.css']
})
export class MiddleColumnComponent implements OnInit {

  PostsToDisplay$: Observable<IPost[]>;
  CurrentUser: IUser;
  InputImage;
  InputCaption: string = '';
  ImageCords: IImageCords;

  OptimizedImage;
  UploadableThumbImage;
  UploadableImage;
  uploadPercent;
  FileName: string;

  Compressing: boolean = false;
  Uploading: boolean = false;
  PostsAreLoading: boolean = true;
  HasFile: boolean = false;
  showImage: boolean = false;
  CompressingCompleted: boolean;
  DisablePostBtn: boolean = true;
  NewPostsArrived: boolean = true;

  moment = moment;

  ActivePostPanel: number = 0;
  DateTimeFormat = {
    sameDay: '[Today] - h:mm a',
    nextDay: '[Tomorrow] - h:mm a',
    nextWeek: 'dddd - h:mm a',
    lastDay: '[Yesterday] - h:mm a',
    lastWeek: '[Last] dddd - h:mm a',
    sameElse: 'ddd, M/D/YY - h:mm a'
  }

  constructor(
    public MyAuth: MyAuthService,
    private poster: PosterService,
    private storage: AngularFireStorage,
    private imageOptSrvc: ImageOptimizationService) { }

  ngOnInit() {
    this.PostsToDisplay$ = this.poster.GetAllPosts().pipe(share())
  }

  TrackByPostId(Index: number, Post: IPost): string {
    return Post.Id;
  }

  async OnChange(event?) {
    this.Compressing = true;
    event.target.files[0] ? this.HasFile = true : this.HasFile = false;
    this.FileName = event.target.files[0].name;
    const MainImgSizes = await this.imageOptSrvc.AdjustImageHeightWidth(event.target.files[0], 'Post').toPromise()
    const ObservableImage = await ImageCompressService.filesToCompressedImageSourceEx(event.target.files, MainImgSizes)
    const resImage = await ObservableImage.toPromise()
    this.OptimizedImage = resImage;
    this.showImage = true;
    this.ImageCords = await this.PreviewLoaded(this.OptimizedImage.compressedImage.imageDataUrl).toPromise()

    const UploadableBlob = await this.imageOptSrvc.dataURItoBlob(resImage.compressedImage.imageDataUrl)
    this.UploadableImage = UploadableBlob;
    const ThumbImgSizes = await this.imageOptSrvc.AdjustImageHeightWidth(event.target.files[0], 'PostThumb').toPromise()
    const ObsThumbImage = await ImageCompressService.filesToCompressedImageSourceEx(event.target.files, ThumbImgSizes)
    const ThumbImage = await ObsThumbImage.toPromise()
    const UploadableThumbBlob = await this.imageOptSrvc.dataURItoBlob(ThumbImage.compressedImage.imageDataUrl)
    this.UploadableThumbImage = UploadableThumbBlob;
    this.CompressingCompleted = true;
    this.DisablePostBtn = false;
  }

  UploadThePost() {
    this.Uploading = true;
    this.DisablePostBtn = true;
    const Cap: string = this.InputCaption;
    const ImagePath: string = this.MyAuth.LoggedUser.Id + '/PostedImages/' + this.FileName + '-' + moment().format('D-M-YYYY');
    const ImageThumbPath: string = this.MyAuth.LoggedUser.Id + '/PostedImages/' + this.FileName + '-' + moment().format('D-M-YYYY') + '.Thumb';

    const ImageRef = this.storage.ref(ImagePath);
    const ImageThumbRef = this.storage.ref(ImageThumbPath);

    const ImageUploadTask = this.storage.upload(ImagePath, this.UploadableImage, { customMetadata: { Caption: Cap } });
    const ThumbImageUploadTask = this.storage.upload(ImageThumbPath, this.UploadableThumbImage, { customMetadata: { PostImageThumbFor: ImagePath } });

    this.uploadPercent = ImageUploadTask.percentageChanges();

    ImageUploadTask.snapshotChanges().pipe(
      finalize(() => {
        console.log('Finalize');
        ImageRef.getDownloadURL().subscribe(ImageURL => {
          ImageThumbRef.getDownloadURL().subscribe(ThumbURL => {
            var newPost: INewPost = {
              Caption: Cap,
              ImageURL: ImageURL,
              ThumbURL: ThumbURL,
              ImageMeta: {
                Height: this.ImageCords.Height,
                Width: this.ImageCords.Width
              }
            }
            this.poster.AddAPost(newPost).subscribe(res => {

              if (res.Code == 200) {
                this.MyAuth.Notify.openSnackBar(res.Message, '');
                this.DisablePostBtn = false;
                this.clearUploadItems()
              }
              else {
                this.MyAuth.Notify.openSnackBar('Something went wrong, please try later', '')
                this.clearUploadItems()
              }
            },
              err => {
                console.log(err)
                this.MyAuth.Notify.openSnackBar('Something went wrong, please try later', '')
                this.clearUploadItems()
              })
          })
        })
      })
    ).subscribe()
  }

  PreviewLoaded(image): Observable<IImageCords> {
    let img = new Image();
    img.src = image
    return fromEvent<any>(img, "load").pipe(
      take(1),
      map(event => {
        const ret: IImageCords = {
          Height: event.target.height,
          Width: event.target.width
        }
        return ret
      }
      ));
  }

  clearUploadItems() {
    this.Uploading = false;
    this.showImage = false;
    this.InputCaption = "";
    this.FileName = null;
    this.HasFile = false;
  }
}