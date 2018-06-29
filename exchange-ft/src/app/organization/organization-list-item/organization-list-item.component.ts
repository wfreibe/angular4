import {Component, Input} from '@angular/core';
import { Organization} from '../../shared/organization';

@Component({
  selector: 'a.exc-organization-list-item',
  templateUrl: './organization-list-item.component.html'
})
export class OrganizationListItemComponent {
  @Input() organization: Organization;
}
