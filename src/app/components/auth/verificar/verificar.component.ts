import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import { MyAuthService } from 'src/app/Services/my-auth.service';

@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.component.html',
  styleUrls: ['./verificar.component.css'],
  
  
})
export class VerificarComponent implements OnInit {
  NetworkErrorCount = 0;
  FormVerificar: FormGroup;
  EmairrorMessalEge = '';
  Loading = false;
  constructor(private fb: FormBuilder, private myAuth: MyAuthService) {}

  ngOnInit() {
    this.FormVerificar = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  OnSubmit() {
    this.Loading = true;
    this.myAuth.NavTo('/Auth/Login');
      
  }
    
  
}
