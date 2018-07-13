import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { User } from '../shared/user';
import { AuthService} from '../auth/auth.service';

@Component({
  selector: 'exc-home',
  template: `

      <div class="ui text container">
        <h1 class="ui inverted header">EXC FT</h1>
        <h2 *ngIf="!auth.isAuthenticated()">Die digitale Dokumentenmanagement-Applikation. Jetzt noch schneller und intuitiver.</h2>
        <h2 *ngIf="!auth.isAuthenticated()">Diese Projektstudie verwendet das Angular- und Lumenframework.</h2>
        <br><br>
        <exc-organization-dropbox *ngIf="auth.isAuthenticated()" class="column"></exc-organization-dropbox>
        <br><br>
        <a routerLink="../users" *ngIf="auth.isAuthenticated()" class="ui red button">
          Userliste ansehen
          <i class="right arrow icon"></i>
        </a>
        <br><br>
        <exc-search *ngIf="auth.isAuthenticated()" (userSelected)="userSelected($event)" class="column"></exc-search>
      </div>

  `
})

export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute, public auth: AuthService) {
    auth.handleAuthentication();
  }
  userSelected(user: User) {
    this.router.navigate(['../users', user.userId], {relativeTo: this.route});
  }
}
