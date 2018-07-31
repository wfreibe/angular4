import { Component, OnInit } from '@angular/core';
import { Document} from '../../shared/document';
import { DocumentStoreService} from '../../shared/document-store.service';

@Component({
  selector: 'exc-document-list',
  templateUrl: './document-list.component.html'
})
export class DocumentListComponent implements OnInit {
  documents: Document[];
  friendlyURL: string;
  constructor(private  doc: DocumentStoreService) { }
  ngOnInit() {

    if (localStorage.getItem('proFriendlyUrl') !== null) {
      this.doc.getAll(localStorage.getItem('proFriendlyUrl')).subscribe(res => this.documents = res);
    } else {
      this.doc.getFirstOrganizationProjectDocuments().subscribe(res => this.documents = res);
    }

  }
  getProjectName(): string {
    return localStorage.getItem('projectName');
  }
}
