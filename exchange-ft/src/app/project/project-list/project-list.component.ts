import { Component,  OnInit } from '@angular/core';
import { Project} from '../../shared/project';
import { ProjectStoreService} from '../../shared/project-store.service';

@Component({
  selector: 'exc-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  orgTreePath: string;
  constructor(private pro: ProjectStoreService) { }
  ngOnInit() {
    if (localStorage.getItem('organizationId') !== null) {
      this.pro.getAll(localStorage.getItem('organizationId')).subscribe(res => this.projects = res);
    } else {
      this.pro.getFirstOrganizationProjects().subscribe(res => this.projects = res);
    }
  }
}
