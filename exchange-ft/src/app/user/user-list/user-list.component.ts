import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { UserStoreService } from '../../shared/user-store.service';
import { AuthService } from '../../auth/auth.service';
import { OrganizationStoreService } from '../../shared/organization-store.service';
import { Organization } from '../../shared/organization';

@Component({
  selector: 'exc-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users: User[];
  organizations: Organization[];
  profile: any;
  constructor(private us: UserStoreService, public auth: AuthService, private org: OrganizationStoreService) {}

  ngOnInit() {
    this.profile = this.auth.userProfile;
    if (this.profile) {
      this.us.getFirstOrganizationUsersByEmail(this.profile.email).subscribe(res => this.users = res);
      this.org.getFirstOrganization(this.profile.email).subscribe(res => this.organizations = res);
    }
  }
}
