import { Component, OnInit } from '@angular/core';
import { MyAuthService } from 'src/app/Services/my-auth.service';

@Component({
  selector: 'element-mini-navbar',
  templateUrl: './mini-navbar.component.html',
  styleUrls: ['./mini-navbar.component.css']
})
export class MiniNavbarComponent implements OnInit {

  constructor(public MyAuth: MyAuthService) { }

  ngOnInit() {
  }

}
