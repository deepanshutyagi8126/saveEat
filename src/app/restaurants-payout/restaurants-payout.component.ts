import { Component, OnInit } from '@angular/core';
declare function actives():any;
@Component({
  selector: 'app-restaurants-payout',
  templateUrl: './restaurants-payout.component.html',
  styleUrls: ['./restaurants-payout.component.css']
})
export class RestaurantsPayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    actives()
  }

}
