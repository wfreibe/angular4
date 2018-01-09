import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../shared/user';
import { UserStoreService } from '../shared/user-store.service';

@Component({
  selector: 'exc-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(
    private  us: UserStoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.user = this.us.getSingle(params['userId']);
  }

  getRating(num: number) {
    return new Array(num);
  }


}



