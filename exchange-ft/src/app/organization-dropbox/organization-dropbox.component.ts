import {Component, OnInit } from '@angular/core';
import {Organization} from '../shared/organization';
import {AuthService} from '../auth/auth.service';
import {OrganizationStoreService} from '../shared/organization-store.service';
import {ProjectStoreService} from '../shared/project-store.service';
import {Project} from '../shared/project';

@Component({
  selector: 'exc-organization-dropbox',
  templateUrl: './organization-dropbox.component.html'
})
export class OrganizationDropboxComponent implements OnInit {

  organizations: Organization[];
  first_organization: Organization[];
  projects: Project[];
  profile: any;
  selectedProValue: string;
  selectedOrgValue: string;

  constructor(private org: OrganizationStoreService, private pro: ProjectStoreService, public auth: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('email') !== null) {
      this.org.getAll(localStorage.getItem('email')).subscribe(res => this.organizations = res);
      if (localStorage.getItem('proFriendlyUrl') !== '') {
        this.selectedProValue = localStorage.getItem('proFriendlyUrl');
      }
      // if organization in dropdown box was selected ...
      if (localStorage.getItem('organizationId') !== null) {
        this.selectedOrgValue = localStorage.getItem('organizationId');
        this.pro.getAll(localStorage.getItem('email'), localStorage.getItem('organizationId')).
        subscribe(res => this.projects = res);
      } else {
        // on displaying the page the first time ...
        this.org.getFirstOrganization(localStorage.getItem('email')).subscribe(res => this.first_organization = res);
        this.pro.getFirstOrganizationProjects(localStorage.getItem('email')).subscribe(res => this.projects = res);
      }
    }
  }

  onChangeOrgBox(treePath: string): void {
    // console.log(treePath);
    this.selectedOrgValue = treePath;
    treePath = treePath.replace('/', '');
    treePath = treePath.replace('/', '');
    localStorage.setItem('organizationId', treePath);
    this.pro.getAll(localStorage.getItem('email'), treePath).subscribe(res => this.projects = res);
  }

  onChangeProBox(friendlyURL: string): void {
    // console.log(friendlyURL);
    this.selectedProValue = friendlyURL;
    localStorage.setItem('proFriendlyUrl', friendlyURL);
  }

}
