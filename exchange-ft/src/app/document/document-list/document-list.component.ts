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
    this.friendlyURL = '53154-122342';
    this.doc.getAll(this.friendlyURL).subscribe(res => this.documents = res);
  }
}
