import {Component, Input, OnInit } from '@angular/core';
import {Organization} from '../shared/organization';
import {OrganizationStoreService} from '../shared/organization-store.service';
import {ProjectStoreService} from '../shared/project-store.service';
import {Project} from '../shared/project';

@Component({
  selector: 'exc-organization-dropbox',
  templateUrl: './organization-dropbox.component.html'
})
export class OrganizationDropboxComponent implements OnInit {

  organizations: Organization[];
  // first_organization: Organization[];
  projects: Project[];
  selectedProValue: string;
  selectedOrgValue: string;

  constructor(private org: OrganizationStoreService, private pro: ProjectStoreService) { }

  ngOnInit() {
      this.org.getAll().subscribe(res => this.organizations = res);
      if (localStorage.getItem('proFriendlyUrl') !== null) {
        this.selectedProValue = localStorage.getItem('proFriendlyUrl');
      }
      // if organization in dropdown box was selected and comming back to HOME menu ...
      if (localStorage.getItem('organizationId') !== null) {
        this.selectedOrgValue = localStorage.getItem('organizationId');
        console.log(this.selectedOrgValue);
        this.pro.getAll(localStorage.getItem('organizationId')).
        subscribe(res => this.projects = res);
      } else {
        // on displaying the page the first time ...
        // this.org.getFirstOrganization().subscribe(res => this.first_organization = res);
        this.pro.getFirstOrganizationProjects().subscribe(res => this.projects = res);
      }
  }

  onChangeOrgBox(treePath: string): void {
    // console.log(treePath);
    this.selectedOrgValue = treePath;
    treePath = treePath.replace('/', '');
    treePath = treePath.replace('/', '');
    localStorage.setItem('organizationId', treePath);
    localStorage.removeItem('proFriendlyUrl');
    this.pro.getAll(treePath).subscribe(res => this.projects = res);
  }

  onChangeProBox(friendlyURL: string): void {
    // console.log(friendlyURL);
    this.selectedProValue = friendlyURL;
    localStorage.setItem('proFriendlyUrl', friendlyURL);
  }

}
