import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'exc-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
  getOrganizationName(): string {
    return localStorage.getItem('organizationName');
  }
}
