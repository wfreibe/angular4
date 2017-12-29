import { Component, Input } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'exc-user-details',
  templateUrl: './user-details.component.html',
  styles: []
})
export class UserDetailsComponent {
  @Input() user: User;
  getRating(num: number) {
    return new Array(num);
  }
}



