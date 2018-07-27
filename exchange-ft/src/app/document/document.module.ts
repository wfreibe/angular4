import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentListComponent} from './document-list/document-list.component';
import { DocumentListItemComponent} from './document-list-item/document-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentRoutingModule
  ],
  declarations: [
    DocumentListComponent,
    DocumentListItemComponent
  ]
})
export class DocumentModule { }
