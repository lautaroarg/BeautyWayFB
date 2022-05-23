import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.html',
  styleUrls: ['./recuperar.css']
})
export class RecuperarComponent {
  NetworkErrorCount = 0;
  FormRecuperar: FormGroup;
  
  constructor(
    private fb: FormBuilder) { }

  ngOnInit() 
  {
    // this.MyAuth.Logout();
    this.FormRecuperar = this.fb.group({
      Email: ['', [Validators.required, Validators.email]]

    })
  }
}