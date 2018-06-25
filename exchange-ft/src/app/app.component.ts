import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'exc-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public auth: AuthService) {
    // Comment out this method call if using
    // hash-based routing
    auth.handleAuthentication();

    // Uncomment this method call if using
    // hash-based routing
    // auth.handleAuthenticationWithHash();
  }
}
