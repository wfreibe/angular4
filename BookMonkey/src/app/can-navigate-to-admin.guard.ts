import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanNavigateToAdminGuard implements CanActivate {
  accessGranted = false;
  canActivate(): boolean {
    if (!this.accessGranted) {
      this.accessGranted = window.confirm('Mit großen Macht kommt große Verantwortung. Möchten Sie den Admin-Bereich beitreten?');
    }

    return this.accessGranted;
  }
}
