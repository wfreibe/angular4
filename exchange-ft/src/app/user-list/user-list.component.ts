import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'exc-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users: User[];

  ngOnInit() {
    this.users = [
      new User(
        35690,
        35691,
        'screenname',
        'wxxxxxxx@xxxxxx.com',
        'de_DE',
        'Willkommen screenname!',
        'Vorname',
        'Nachname',
        'Programmer'
      )
    ];
  }
}

