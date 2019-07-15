import { Component, OnInit } from '@angular/core';

import { Book } from '../../models';
import { BOOKS } from '../../data';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  selectedBook: Book;
  books: Book[] = BOOKS;

  constructor() {}

  ngOnInit() {}

  onSelect(book: Book) {
    console.log('selecting book', book);

    // (expression) ? (if true) : (if false)
    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  onCreate(createdBook: Book) {
    console.log('creating book', createdBook);
    this.books.push(createdBook);
  }
}
