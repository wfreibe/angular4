import { Component, Input } from '@angular/core';
import { User } from '../../shared/user';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'a.exc-user-list-item',
  templateUrl: './user-list-item.component.html'
})
export class UserListItemComponent {
  @Input() user: User;
  getUserImage() {
    return environment.pictureSource + this.user.portraitId;
  }
}
