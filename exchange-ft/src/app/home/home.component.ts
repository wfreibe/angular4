import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

import { User } from '../shared/user';

@Component({
  selector: 'exc-home',
  template: `
    <div class="ui container two column grid">
      <div class="ui container column">
        <h1>Home</h1>
        <p>Das ist exchange-ft.</p>
        <a routerLink="../users" class="ui red button">
          Userliste ansehen
          <i class="right arrow icon"></i>
        </a>
      </div>
      <exc-search (userSelected)="userSelected($event)" class="column"></exc-search>
    </div>
  `
})

export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  userSelected(user: User) {
    this.router.navigate(['../users', user.userId], {relativeTo: this.route});
  }
}

