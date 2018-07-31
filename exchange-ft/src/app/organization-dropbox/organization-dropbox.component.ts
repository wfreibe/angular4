import {Component, Input, OnInit } from '@angular/core';
import {Organization} from '../shared/organization';
import {OrganizationStoreService} from '../shared/organization-store.service';
import {ProjectStoreService} from '../shared/project-store.service';
import {Project} from '../shared/project';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'exc-organization-dropbox',
  templateUrl: './organization-dropbox.component.html'
})
export class OrganizationDropboxComponent implements OnInit {

  organizations: Organization[];
  projects: Project[];
  selectedProValue: string;
  selectedOrgValue: string;

  constructor(private org: OrganizationStoreService, private pro: ProjectStoreService) {
    // https://stackoverflow.com/questions/39295854/angular-2-how-to-return-data-from-subscribe
    // https://medium.com/@luukgruijs/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3
  }

  ngOnInit() {
      // **************** ORGANIZATION DROP DOWN BOX PART ***********************
      // 1) get each time the organizations for the org drop down box, if it is not in the local storage than make an new REST API call
      if (localStorage.getItem('organizations') === null) {
        this.org.getAll().subscribe((organizations: Organization[]) => {
          this.organizations = organizations;
          localStorage.setItem('organizations', JSON.stringify(this.organizations));
          // 1.1) set local storage organizationId to default 1 only if not set
          if (localStorage.getItem('organizationId') === null) {
            let treePath: string;
            treePath =  this.organizations[0]['treePath'];
            this.selectedOrgValue = treePath;
            treePath = this.removeSlashesFromTreePath(treePath)
            localStorage.setItem('organizationId', treePath);
            localStorage.setItem('organizationName', this.organizations[0]['name']);
          }
        });
      } else {
        this.organizations = JSON.parse(localStorage.getItem('organizations'));
      }
      // **************** PROJECT DROP DOWN BOX PART ***********************
      if (localStorage.getItem('proFriendlyUrl') !== null) {
        this.selectedProValue = localStorage.getItem('proFriendlyUrl');
      }
      // 2) if organization in drop down box was selected and coming back to HOME menu ...
      if (localStorage.getItem('organizationId') !== null) {
        this.selectedOrgValue = localStorage.getItem('organizationId');
        // console.log(this.selectedOrgValue);
        this.pro.getAll(localStorage.getItem('organizationId')).
        subscribe(res => this.projects = res);

        this.pro.getAll(localStorage.getItem('organizationId')).subscribe((projects: Project[]) => {
          this.projects = projects;
          localStorage.setItem('projects', JSON.stringify(this.projects));
        });

      // 3) if no organizationId available (at first request) subscribe getFirstOrg...
      } else {
        // on displaying the page the first time ...
        // this.pro.getFirstOrganizationProjects().subscribe(res => this.projects = res);
        this.pro.getFirstOrganizationProjects().subscribe((projects: Project[]) => {
          this.projects = projects;
          localStorage.setItem('projectName', this.projects[0]['name']);
          localStorage.setItem('proFriendlyUrl', this.projects[0]['friendlyURL']);
          localStorage.setItem('projects', JSON.stringify(this.projects));
          // console.log(localStorage.getItem('proFriendlyUrl'));
        });
      }
  }

  onChangeOrgBox(treePath: string): void {
    this.selectedOrgValue = treePath;
    treePath = this.removeSlashesFromTreePath(treePath)
    localStorage.setItem('organizationId', treePath);
    localStorage.removeItem('proFriendlyUrl');
    localStorage.removeItem('projectName');
    // this.pro.getAll(treePath).subscribe(res => this.projects = res);
    this.pro.getAll(treePath).subscribe((projects: Project[]) => {
      this.projects = projects;
      localStorage.setItem('projectName', this.projects[0]['name']);
      localStorage.setItem('proFriendlyUrl', this.projects[0]['friendlyURL']);
    });
    // change organization name in the locale storage onChange
    let organizationFromStorage: Organization[];
    organizationFromStorage = JSON.parse(localStorage.getItem('organizations'));
    for (let org of organizationFromStorage) {
      if (org['treePath'] === this.selectedOrgValue) {
        localStorage.setItem('organizationName', org['name']);
      }
    }
  }

  onChangeProBox(friendlyURL: string): void {
    // console.log(friendlyURL);
    this.selectedProValue = friendlyURL;
    localStorage.setItem('proFriendlyUrl', friendlyURL);
    // change organization name in the locale storage onChange
    let projectFromStorage: Project[];
    projectFromStorage = JSON.parse(localStorage.getItem('projects'));
    for (let pro of projectFromStorage) {
      // console.log(projectFromStorage);
      if (pro['friendlyURL'] === this.selectedProValue) {
        localStorage.setItem('projectName', pro['name']);
      }
    }
  }

  removeSlashesFromTreePath(treePath: string) {
    treePath = treePath.replace('/', '');
    treePath = treePath.replace('/', '');
    return treePath;
  }

}
