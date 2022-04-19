import { Component, OnInit } from '@angular/core';
declare function  uploader():any;
@Component({
  selector: 'app-add-reward',
  templateUrl: './add-reward.component.html',
  styleUrls: ['./add-reward.component.css']
})
export class AddRewardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    uploader();
  }

}
