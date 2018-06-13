import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ZoomDirective } from './shared/zoom.directive';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    UserListComponent,
    UserListItemComponent,
    UserDetailsComponent,
    ZoomDirective
  ]
})
export class UserModule { }
