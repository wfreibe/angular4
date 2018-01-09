import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserStoreService } from '../shared/user-store.service';

@Component({
  selector: 'exc-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(private us: UserStoreService) {}
  ngOnInit() {
    this.users = this.us.getAll();
  }
}

