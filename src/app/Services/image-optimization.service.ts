import { Injectable } from '@angular/core';
import { ResizeOptions } from 'ng2-image-compress';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageOptimizationService {
  resizeOptions: ResizeOptions;

  constructor() { }

  AdjustImageHeightWidth(ImageFile, CompressFor: string): Observable<any> {
    var width: number;
    var height: number;
    //if (CompressFor == 'ProfilePic') {
      return new Observable(observer => {
        let fr = new FileReader;
        fr.onload = () => { // when file has loaded
          var img = new Image();
          img.onload = () => {
            height = this.AdjustHeight(img.height, CompressFor);
            width = this.AdjustWidth(img.width, CompressFor);
            this.resizeOptions = {
              Resize_Max_Height: height,
              Resize_Max_Width: width,
              Resize_Quality: 80,
              Resize_Type: 'jpg'
            }
            observer.next(this.resizeOptions);
            observer.complete();
          }
          img.src = <string>fr.result; // This is the data URL 
        }
        fr.readAsDataURL(ImageFile);
      });
  }

  AdjustHeight(h, CompressFor: string): number {
    if (CompressFor == 'ProfilePic' || CompressFor == 'Post') {
      if (h >= 1000) {
        if (h >= 2000 && h <= 2999)
          return h / 3;
        else {
          if (h >= 3000)
            return h / 4;
        }
        return h / 2;
      }
      else {
        return (h / 100) * 75;
      }
    }
    else if (CompressFor == 'ProfilePicThumb') {
      if (h >= 1000) {
        if (h >= 2000 && h <= 2999)
          return h / 6;
        else {
          if (h >= 3000)
            return h / 8;
        }
        return h / 4;
      }
      else {
        return (h / 100) * 35;
      }
    }
  }

  AdjustWidth(w, CompressFor: string): number {
    if (CompressFor == 'ProfilePic' || CompressFor == 'Post') {
      if (w >= 1000) {
        if (w >= 2000 && w <= 2999)
          return w / 3;
        else {
          if (w >= 3000)
            return w / 4;
        }
        return w / 2;
      }
      else {
        return (w / 100) * 75;
      }
    }
    else if (CompressFor == 'ProfilePicThumb') {
      if (w >= 1000) {
        if (w >= 2000 && w <= 2999)
          return w / 6;
        else {
          if (w >= 3000)
            return w / 8;
        }
        return w / 4;
      }
      else {
        return (w / 100) * 35;
      }
    }
  }

  async dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else
      byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }
}
