import {Component, Input, OnInit} from '@angular/core';
import { Organization} from '../../shared/organization';
import {AuthService} from '../../auth/auth.service';
import {OrganizationStoreService} from '../../shared/organization-store.service';

@Component({
  selector: 'a.exc-organization-list-item',
  templateUrl: './organization-list-item.component.html'
})
export class OrganizationListItemComponent implements OnInit{
  @Input() organization: Organization;

  first_organization: Organization[];
  profile: any;
  constructor(private org: OrganizationStoreService, public auth: AuthService) { }
  ngOnInit() {
    this.profile = this.auth.userProfile;
    // console.log(this.profile);
    if (this.profile) {
      this.org.getFirstOrganization(this.profile.email).subscribe(res => this.first_organization = res);
    }
  }
}
