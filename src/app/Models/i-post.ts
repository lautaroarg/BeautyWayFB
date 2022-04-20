import { IUser } from './i-user';

export interface IPost {
  Id?: string,
  // Owner: IUser,
  OwnerId: string,
  PostedOn: number,
  ImageURL?: string,
  ThumbURL?: string,
  Caption?: string,
  HeartsCount?: number,
  CommentsCount?: number,
  IsHeartedByUser?: boolean,
  ImageMeta?: IImageCords
}

export interface IImageCords {
  Height: number,
  Width: number
}

export interface INewPost {
  Caption?: string,
  ImageURL?: string,
  ThumbURL?: string,
  ImageMeta?: IImageCords
}

export interface IComment {
  Id?: string,
  CommentMsg: string,
  CommentedOn?: number,
  PostId: string,
  Commenter: IUser,
}

export interface IHeart {
  Id: string,
  LikedOn: number,
  PostId: string,
  Hearter: IUser
}