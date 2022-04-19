import { Component, OnInit } from '@angular/core';
declare function Animate():any;
@Component({
  selector: 'app-adminbar',
  templateUrl: './adminbar.component.html',
  styleUrls: ['./adminbar.component.css']
})
export class AdminbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Animate();
  }

}
