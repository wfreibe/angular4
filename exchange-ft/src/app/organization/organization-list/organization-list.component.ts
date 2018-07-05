import { Component, OnInit } from '@angular/core';
import { Organization } from '../../shared/organization';
import { AuthService } from '../../auth/auth.service';
import { OrganizationStoreService } from '../../shared/organization-store.service';

@Component({
  selector: 'exc-organization-list',
  templateUrl: './organization-list.component.html'
})
export class OrganizationListComponent implements OnInit {

  organizations: Organization[];
  profile: any;
  constructor(private org: OrganizationStoreService, public auth: AuthService) { }

  ngOnInit() {
    this.profile = this.auth.userProfile;
    if (this.profile) {
      this.org.getAll(this.profile.email).subscribe(res => this.organizations = res);
    }
  }
}
