import { StatesCitiesType } from './c-states-cities';

export interface IUser {
  Id?: string;
  Email?: string;
  DisplayName: string;
  Gender?: string;
  DOB?: number;
  PhoneNumber?: number;
  PhotoURL?: string;
  Status?: string;
  LivesIn?: StatesCitiesType;
  Interests?: string;
  About?: string;
  FollowingCount?: number;
  FollowersCount?: number;
  PostsCount?: number;
  Provider?: string;

  Followers?: {
    Id: string,
    DisplayName: string,
    PhotoURL: string
  };
  Following?: {
    Id: string,
    DisplayName: string,
    PhotoURL: string
  };
}

export interface IUpdatePicModel {
  url: string;
  ThumbUrl: string;
}

export interface IFollow {
  DocId: string;
  FirstUser: IUser;
  SecondUser: IUser;
  StartedFollowingOn: Date;
}
// Code	Meaning
//  0	  Pending
//  1	  Accepted
//  2	  Declined
//  3	  Blocked