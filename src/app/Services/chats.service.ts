import { Injectable } from '@angular/core';
import { MyAuthService } from './my-auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable, of, combineLatest } from 'rxjs';
import { IMessage } from '../Models/i-message';
import { switchMap, tap, map, share } from 'rxjs/operators';
import { FollowService } from './follow.service';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(
    public MyAuth: MyAuthService,
    private FollowSrv: FollowService,
    private afFunctions: AngularFireFunctions) { }

  SendAMessage(To: string, Text: string): Observable<any> {
    const SendAMessage = this.afFunctions.httpsCallable('SendAMessage');

    return SendAMessage({ To, Text })
  }

  LoadMessages(UserId: string): Observable<IMessage[]> {
    const SentMessages$ = this.MyAuth.afStore.collection<IMessage>(`Messages`, ref => ref.where('ToId', '==', UserId)
      .where('FromId', '==', this.MyAuth.BasicUserInfo.uid)).valueChanges({ idField: 'DocId' }).pipe(share());
    const ReceivedMessages$ = this.MyAuth.afStore.collection<IMessage>(`Messages`, ref => ref.where('FromId', '==', UserId)
      .where('ToId', '==', this.MyAuth.BasicUserInfo.uid)).valueChanges({ idField: 'DocId' }).pipe(share())

      const combinedReturn =  combineLatest(SentMessages$, ReceivedMessages$).pipe(
      switchMap(res => {
        const ret = res[0].concat(res[1]);
        return of(ret);
      })
    )
    return combinedReturn.pipe(share())
  }

  GetUnfollowChatUserIds(): Observable<string[]> {
    const SentMessages$ = this.MyAuth.afStore.collection<IMessage>(`Messages`, ref => ref
      .where('FromId', '==', this.MyAuth.BasicUserInfo.uid).orderBy('SentOn', 'desc')).valueChanges().pipe(share());
    const ReceivedMessages$ = this.MyAuth.afStore.collection<IMessage>(`Messages`, ref => ref.
      where('ToId', '==', this.MyAuth.BasicUserInfo.uid).orderBy('SentOn', 'desc')).valueChanges().pipe(share())

    const combinedReturn = combineLatest(SentMessages$, ReceivedMessages$).pipe(
      switchMap(res => {
        const SentMessageUsers = res[0]
        const ReceivedMessageUsers = res[1]
        let SentMessageUserIds: string[] = [];
        let ReceivedMessageUserIds: string[] = [];

        SentMessageUsers.forEach(e => {
          SentMessageUserIds.push(e.ToId)
        })
        ReceivedMessageUsers.forEach(e => {
          ReceivedMessageUserIds.push(e.FromId)
        })
        const CombinedUserIds = [...new Set(SentMessageUserIds.concat(ReceivedMessageUserIds))]

        return of(CombinedUserIds);
      })
    )
    return combinedReturn.pipe(share());
  }

  GetLastMessage(WithUserId: string): Observable<IMessage> {
    const SentMessages$ = this.MyAuth.afStore.collection<IMessage>(`Messages`, ref => ref.where('ToId', '==', WithUserId)
      .where('FromId', '==', this.MyAuth.BasicUserInfo.uid)
      .orderBy('SentOn', 'desc')
      .limit(1)
    ).valueChanges({ idField: 'DocId' }).pipe(share());

    const ReceivedMessages$ = this.MyAuth.afStore.collection<IMessage>(`Messages`, ref => ref.where('FromId', '==', WithUserId)
      .where('ToId', '==', this.MyAuth.BasicUserInfo.uid)
      .orderBy('SentOn', 'desc')
      .limit(1)
    ).valueChanges({ idField: 'DocId' }).pipe(share())

    const ReceivedMessagesForDeleveryReport$ = this.MyAuth.afStore.collection<IMessage>(`Messages`, ref => ref.where('FromId', '==', WithUserId)
      .where('ToId', '==', this.MyAuth.BasicUserInfo.uid)
      .orderBy('SentOn', 'desc')
    ).valueChanges({ idField: 'DocId' }).pipe(share())

    const combinedReturn= combineLatest(SentMessages$, ReceivedMessages$, ReceivedMessagesForDeleveryReport$).pipe(
      tap(ret => {
        const ReceivedMessages = ret[2];

        ReceivedMessages.filter(message => message.Status == 1).forEach(message => {
          // console.log(message)
          this.UpdateMessageStatus(message.DocId, 2).subscribe(r => console.log(r))
        })
      }),
      switchMap(res => {
        const ret = res[0].concat(res[1]);
        if (ret.length == 2) {
          const ret2 = ret.sort((a, b) => a.SentOn - b.SentOn).slice(1)
          return ret2;
        }
        else if (ret.length == 1)
          return ret;
        return of({})
      })
    )
    return combinedReturn.pipe(share())
  }

  GetActiveChatUsersList(): Observable<string[]> {
    return combineLatest(
      this.FollowSrv.GetAUserFollowersNFollowingUserIds(this.MyAuth.BasicUserInfo.uid),
      this.GetUnfollowChatUserIds())
      .pipe(map(r => {
        return [...new Set(r[1].concat(r[0]))];
      }),
      share())
  }

  UpdateMessageStatus(DocId: string, Status: number): Observable<any> {
    const UpdateMessageStatus = this.afFunctions.httpsCallable('UpdateMessageStatus');

    return UpdateMessageStatus({ DocId, Status })
  }

  DeleteAMessage(MessageId: string): Observable<any> {
    const DeleteAMessageFn = this.afFunctions.httpsCallable('DeleteAMessage');

    return DeleteAMessageFn({ MessageId })
  }
}
