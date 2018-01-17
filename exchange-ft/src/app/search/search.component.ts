import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { User } from '../shared/user';
import {UserStoreService} from '../shared/user-store.service';

@Component({
  selector: 'exc-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  isLoading = false;
  foundUsers: User[] = [];
  @Output() userSelected = new EventEmitter<User>();

  keyup = new EventEmitter<string>();

  constructor(private us: UserStoreService) {}

  ngOnInit() {

    this.keyup
      .debounceTime(500)
      .distinctUntilChanged()
      .do(() => this.isLoading = true)
      .switchMap(searchTerm => this.us.getAllSearch(searchTerm))
      .do(() => this.isLoading = false)
      .subscribe(users => this.foundUsers = users);
  }

}

