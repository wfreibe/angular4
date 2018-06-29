import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationListItemComponent } from './organization-list-item/organization-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ],
  declarations: [
    OrganizationListComponent,
    OrganizationListItemComponent
  ]
})
export class OrganizationModule { }
