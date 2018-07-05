import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent} from './project-list/project-list.component';
import { ProjectListItemComponent} from './project-list-item/project-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectListItemComponent
  ]
})
export class ProjectModule { }
