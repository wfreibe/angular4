import { Component, Input, OnInit } from '@angular/core';
import { Project} from '../../shared/project';
@Component({
  selector: 'a.exc-project-list-item',
  templateUrl: './project-list-item.component.html'
})
export class ProjectListItemComponent implements OnInit {
  @Input() project: Project;
  @Input() first: any;
  selectedProValue: string;
  constructor() { }
  ngOnInit() {
    if (localStorage.getItem('proFriendlyUrl') !== null) {
      this.selectedProValue = localStorage.getItem('proFriendlyUrl');
    }
  }
}

