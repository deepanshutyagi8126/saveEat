import { Component, OnInit } from '@angular/core';
declare function password():any;
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    password()
  }

}
