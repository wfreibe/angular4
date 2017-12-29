import { Component } from '@angular/core';
import {User} from './shared/user';

@Component({
  selector: 'exc-root',
  template: `
    <exc-user-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></exc-user-list>
    <exc-user-details *ngIf="detailsOn" (showListEvent)="showList()" [user]="user"></exc-user-details>
`
})
export class AppComponent {
  title = 'exc';

  listOn = true;
  detailsOn = false;

  user: User;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }
  showDetails(user: User) {
    this.user = user;
    this.listOn = false;
    this.detailsOn = true;
  }

}
