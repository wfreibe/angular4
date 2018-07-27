import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { UserStoreService } from '../../shared/user-store.service';
import { OrganizationStoreService } from '../../shared/organization-store.service';
import { Organization } from '../../shared/organization';

@Component({
  selector: 'exc-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users: User[];
  organizations: Organization[];
  constructor(private us: UserStoreService, private org: OrganizationStoreService) {}

  ngOnInit() {
    if (localStorage.getItem('organizationId') !== null) {
      this.us.getOrgUsers(localStorage.getItem('organizationId')).subscribe(res => this.users = res);
    } else {
      this.us.getFirstOrganizationUsers().subscribe(res => this.users = res);
    }
    // this.org.getFirstOrganization().subscribe(res => this.organizations = res);
  }
}
