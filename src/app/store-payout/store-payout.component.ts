import { Component, OnInit } from '@angular/core';
declare function actives():any;
@Component({
  selector: 'app-store-payout',
  templateUrl: './store-payout.component.html',
  styleUrls: ['./store-payout.component.css']
})
export class StorePayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    actives()
  }

}
