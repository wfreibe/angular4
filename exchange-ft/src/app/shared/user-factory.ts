import { User } from './user';
import { Thumbnail} from './thumbnail';

export class UserFactory {
  static empty(): User {
    // return new User(0, 0, '', '', '', '', '', '', '', 0, [{url: '', title: ''}]);
    return new User(0, 0, '', '', '', '', '', '', '', 0, 0);
  }
  static fromObject(rawUser: any): User {
    return new User(
      rawUser.userId,
      rawUser.contactId,
      rawUser.screenName,
      rawUser.emailAddress,
      rawUser.languageId,
      rawUser.greeting,
      rawUser.firstName,
      rawUser.lastName,
      rawUser.jobTitle,
      rawUser.rating,
      rawUser.portraitId
      // [new Thumbnail('https://www.shareicon.net/data/128x128/2015/09/24/106427_man_512x512.png', 'Vorname Nachname')],
    );

  }
}
