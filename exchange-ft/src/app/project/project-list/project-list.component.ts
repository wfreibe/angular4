import { Component, OnInit } from '@angular/core';
import { Project} from '../../shared/project';
import { AuthService } from '../../auth/auth.service';
import { ProjectStoreService} from '../../shared/project-store.service';

@Component({
  selector: 'exc-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {

  projects: Project[];
  profile: any;
  orgTreePath: string;
  constructor(private pro: ProjectStoreService, public auth: AuthService) { }
  ngOnInit() {
    this.profile = this.auth.userProfile;
    // this.orgTreePath = '34679';
    if (this.profile) {
      // this.pro.getAll(this.profile.email, this.orgTreePath).subscribe(res => this.projects = res);
      this.pro.getFirstOrganizationProjects(this.profile.email).subscribe(res => this.projects = res);
    }
  }
}
