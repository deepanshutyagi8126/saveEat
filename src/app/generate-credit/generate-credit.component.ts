import { Component, OnInit } from '@angular/core';
declare function Active():any;
@Component({
  selector: 'app-generate-credit',
  templateUrl: './generate-credit.component.html',
  styleUrls: ['./generate-credit.component.css']
})
export class GenerateCreditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Active();
  }

}
