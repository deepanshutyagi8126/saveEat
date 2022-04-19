import { Component, OnInit } from '@angular/core';
declare function  uploader():any;
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    uploader();
  }

}
