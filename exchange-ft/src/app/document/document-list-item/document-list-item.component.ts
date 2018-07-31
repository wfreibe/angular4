import { Component, Input, OnInit } from '@angular/core';
import { Document} from '../../shared/document';

@Component({
  selector: 'tr.exc-document-list-item',
  templateUrl: './document-list-item.component.html'
})
export class DocumentListItemComponent implements OnInit {
  @Input() document: Document;
  @Input() first: any;
  selectedDocValue: string;
  constructor() { }

  ngOnInit() {}
}
