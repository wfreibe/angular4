import { Component, OnInit } from '@angular/core';
import { Organization} from '../../shared/organization';
import { OrganizationStoreService} from '../../shared/organization-store.service';

@Component({
  selector: 'exc-organization-list',
  templateUrl: './organization-list.component.html'
})
export class OrganizationListComponent implements OnInit {

  organizations: Organization[];
  constructor(private org: OrganizationStoreService) { }

  ngOnInit() {
    this.org.getAll().subscribe(res => this.organizations = res);
  }
}
