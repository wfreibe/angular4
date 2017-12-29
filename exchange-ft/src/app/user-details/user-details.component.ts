import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'exc-user-details',
  templateUrl: './user-details.component.html',
  styles: []
})
export class UserDetailsComponent {
  @Input() user: User;
  @Output() showListEvent = new EventEmitter<any>();

  getRating(num: number) {
    return new Array(num);
  }

  showUserList() {
    this.showListEvent.emit();
  }
}



