import { Component, Input, OnInit } from '@angular/core';
import { Project} from '../../shared/project';
import {AuthService} from '../../auth/auth.service';
import { ProjectStoreService} from '../../shared/project-store.service';

@Component({
  selector: 'a.exc-project-list-item',
  templateUrl: './project-list-item.component.html'
})
export class ProjectListItemComponent implements OnInit {
  @Input() project: Project;
  constructor() { }
  ngOnInit() {}
}

