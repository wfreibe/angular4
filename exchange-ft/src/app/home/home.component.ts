import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { User } from '../shared/user';
import { AuthService} from '../auth/auth.service';

@Component({
  selector: 'exc-home',
  template: `
    <div class="ui container two column grid">
      <div class="ui container text">
        <h1 class="ui header">Exchange FT</h1>
        <p>Die digitale Dokumentenmanagement-Applikation. Jetzt noch schneller und intuitiver.</p>
        <p>Diese Projektstudie verwendet das Angular- und Lumenframework.</p>
        <a routerLink="../users" *ngIf="auth.isAuthenticated()" class="ui red button">
          Userliste ansehen
          <i class="right arrow icon"></i>
        </a>
        <br><br>
        <exc-search *ngIf="auth.isAuthenticated()" (userSelected)="userSelected($event)" class="column"></exc-search>
      </div>
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
