import { Component, OnInit } from '@angular/core';
import { MyAuthService } from 'src/app/Services/my-auth.service';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.css']
})
export class LeftColumnComponent implements OnInit {

  constructor(public MyAuth: MyAuthService) { }

  ngOnInit() {
  }

}
