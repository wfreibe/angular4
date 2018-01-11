import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../shared/user';
import { UserFactory } from '../shared/user-factory';
import { UserStoreService } from '../shared/user-store.service';

import { environment } from '../../environments/environment';

@Component({
  selector: 'exc-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit {
  user: User = UserFactory.empty();

  constructor(
    private  us: UserStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    const params = this.route.snapshot.params;
    this.us.getSingle(params['userId'])
      .subscribe(b => this.user = b);
  }

  removeUser() {
    if (confirm('User wirklich löschen?')) {
      this.us.remove(this.user.userId +'')
        .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
    }
  }

  getRating(num: number) {
    return new Array(num);
  }
  getUserImage() {
    return environment.pictureSource + this.user.portraitId;
  }
}
