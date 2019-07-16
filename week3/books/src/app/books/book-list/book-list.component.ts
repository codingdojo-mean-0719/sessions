import { Component, OnInit } from '@angular/core';

import { Book } from '../../models';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  selectedBook: Book;
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      console.log('got books?', books, this);
      this.books = books;
    });
  }

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
    // this.books.push(createdBook);

    this.bookService.createBook(createdBook).subscribe(newBook => {
      console.log('new book', newBook);
      // this.books.push(newBook);
      this.books = [...this.books, newBook];
    });
  }

  onDelete(bookId: number) {
    console.log('deleting book', bookId);

    this.bookService.removeBook(bookId).subscribe(deletedBook => {
      console.log('deleted', deletedBook);

      this.books = this.books.filter(book => book.id !== deletedBook.id);
    });
  }

  onEvent(event: Event) {
    event.stopPropagation();
    console.log('eventing');
  }
}
