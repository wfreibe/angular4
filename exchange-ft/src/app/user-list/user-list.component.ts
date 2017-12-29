import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User, Thumbnail } from '../shared/user';

@Component({
  selector: 'exc-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users: User[];
  @Output() showDetailsEvent = new EventEmitter<User>();

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
        'Programmer',
        5,
        [new Thumbnail('https://www.shareicon.net/data/128x128/2015/09/24/106427_man_512x512.png', 'Vorname Nachname')],
      )
    ];
  }

  showDetails(user: User) {
    this.showDetailsEvent.emit(user);
  }
}

