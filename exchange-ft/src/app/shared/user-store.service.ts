import { Injectable } from '@angular/core';
import { User, Thumbnail } from './user';

@Injectable()
export class UserStoreService {
  users: User[];

  constructor() {
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

  getAll() {
    return this.users;
  }

  getSingle(userId) {
    // use the parseInt or parseFloat functions, or simply use the unary + operator
    return this.users.find(user => user.userId === +userId);
  }
}
