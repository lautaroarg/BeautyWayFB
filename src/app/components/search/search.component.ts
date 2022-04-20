import { Component, OnInit } from '@angular/core';
import { MyAuthService } from 'src/app/Services/my-auth.service';
import { IUser } from 'src/app/Models/i-user';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  PeopleResults$: Observable<IUser[]>;
  PeopleResults: IUser[];
  FilteredResults: IUser[];
  QueryForm: FormGroup;

  constructor(
    public MyAuth: MyAuthService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.QueryForm = this.fb.group({
      Query: ''
      //  ['', [Validators.minLength(3), Validators.required]]
    })

    this.PeopleResults$ = this.MyAuth.GetAllUsersFromStore()
      .pipe(
        map(r => {
          return r.filter(user => {
            return user.Id != this.MyAuth.LoggedUser.Id;
          })
        }),
        tap(r => {
          this.PeopleResults = r;
          this.FilteredResults = r;
        })
      )

    this.QueryForm.controls.Query.valueChanges.subscribe((q: string) => {
      if (q == '') {
        this.FilteredResults = this.PeopleResults;
      }
      else {
        this.FilteredResults = this.PeopleResults.filter(users => {
          const DisplayName = users.DisplayName.toLowerCase()

          return DisplayName.includes(q.toLowerCase())
        });
      }
    })
  }
}
