import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'element-my-loader',
  templateUrl: './my-loader.component.html',
  styleUrls: ['./my-loader.component.css']
})
export class MyLoaderComponent implements OnInit {
  @Input() Classes: string;

  constructor() { }

  ngOnInit() {
  }

}
