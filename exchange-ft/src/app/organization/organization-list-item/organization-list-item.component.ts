import {Component, Input, OnInit} from '@angular/core';
import { Organization} from '../../shared/organization';
@Component({
  selector: 'a.exc-organization-list-item',
  templateUrl: './organization-list-item.component.html'
})
export class OrganizationListItemComponent implements OnInit {
  @Input() organization: Organization;
  @Input() first: any;
  selectedOrgValue: string;
  constructor() {}
  ngOnInit() {
    if (localStorage.getItem('organizationId') !== null) {
      this.selectedOrgValue = localStorage.getItem('organizationId');
    }
  }
}
