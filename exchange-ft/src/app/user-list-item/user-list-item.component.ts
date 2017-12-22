import { Component, Input } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'a.exc-user-list-item',
  templateUrl: './user-list-item.component.html',
  styles: []
})
export class UserListItemComponent {
  @Input() user: User;
}
