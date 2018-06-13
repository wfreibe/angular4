import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanNavigateToAdminGuard implements CanActivate {
  accessGranted = false;
  canActivate(): boolean {
    if (!this.accessGranted) {
      this.accessGranted = window.confirm('Möchten Sie den Admin-Bereich betreten?');
    }
    return this.accessGranted;
  }
}
