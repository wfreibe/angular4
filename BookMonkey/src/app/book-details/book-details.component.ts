import { Component, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent {

  @Input() book: Book;
  getRating(num: number) {
    return new Array(num);
  }

}

