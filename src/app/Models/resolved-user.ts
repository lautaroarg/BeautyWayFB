import { IUser } from './i-user';

export class ResolvedUser {

  constructor(
    public RUser: IUser,
    public error: any = null) { }

}