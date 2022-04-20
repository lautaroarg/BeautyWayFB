import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ImageOptimizationService } from 'src/app/Services/image-optimization.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { ImageCompressService } from 'ng2-image-compress';
import * as moment from 'moment';
import { finalize, take } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-pic-update-dialog',
  templateUrl: './profile-pic-update-dialog.component.html',
  styleUrls: ['./profile-pic-update-dialog.component.css']
})
export class ProfilePicUpdateDialogComponent implements OnInit {
  file;
  thumbImage;
  UpdatePPForm: FormGroup;
  samplePic;
  showImage = false;
  processingImage: boolean = false;
  processingImageComplete: boolean = false;
  processingUpload: boolean = false;
  uploadPercent$: Observable<number>;
  downloadURL$: Observable<any>;
  Uploading: boolean = false;
  OutputImage;

  constructor(
    public dialogRef: MatDialogRef<ProfilePicUpdateDialogComponent>,
    public imageOptSrvc: ImageOptimizationService,
    public storage: AngularFireStorage,
    private fb: FormBuilder,
    public MyAuth: MyAuthService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.UpdatePPForm = this.fb.group({
      InputImage: ['', Validators.required],
      ProfileCaption: '',
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  async onChange(fileInput: any) {
    this.processingImage = true;
    this.file = fileInput.target.files[0];
    //this.UpdatePPForm.value.InputImage = fileInput.target.files[0];
    const optimizeOptions = await this.imageOptSrvc.AdjustImageHeightWidth(fileInput.target.files[0], 'ProfilePic').toPromise()
    const observableImages = await ImageCompressService.filesToCompressedImageSourceEx(fileInput.target.files, optimizeOptions)
    const image = await observableImages.toPromise()
    this.OutputImage = image;
    const blob = await this.imageOptSrvc.dataURItoBlob(this.OutputImage.compressedImage.imageDataUrl)
    this.file = blob;
    this.showImage = true;
    this.processingImageComplete = true;
  }

  OnSubmit() {
    const filePath = this.MyAuth.LoggedUser.Email + '/ProfilePictures/' + moment().format('D-M-YYYY');
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, this.file, { customMetadata: { caption: this.UpdatePPForm.value.ProfileCaption } });
    this.Uploading = true;
    // observe percentage changes
    this.uploadPercent$ = task.percentageChanges();

    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL$ = fileRef.getDownloadURL();
        this.downloadURL$
        .pipe(take(1))
        .subscribe((URL: string) => {
          this.MyAuth.UpdateProfilePic(URL).subscribe(() => {
            this.dialogRef.close();
          })
        })
      })
    ).subscribe()
  }
}

