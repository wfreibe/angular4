import {Component, OnInit } from '@angular/core';
import { OrganizationStoreService } from '../../shared/organization-store.service';
import { Organization } from '../../shared/organization';
import { User } from '../../shared/user';
import { UserStoreService } from '../../shared/user-store.service';


@Component({
  selector: 'exc-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users: User[];
  organizations: Organization[] = [];
  constructor(private us: UserStoreService, private org: OrganizationStoreService) {}

  ngOnInit() {
    this.org.getAll().subscribe(res => this.organizations = res);
    this.us.getOrgUsers('34679').subscribe(res => this.users = res);
  }
}
