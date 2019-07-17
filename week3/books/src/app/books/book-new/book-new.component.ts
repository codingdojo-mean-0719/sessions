import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { BookService } from '../../services';
import { Book } from '../../models';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  book = new Book();

  @Output()
  createBook = new EventEmitter<Book>();

  constructor(
    private readonly bookService: BookService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('submitting', this.book);

    // this.books.push(this.book);

    this.bookService.createBook(this.book).subscribe(createdBook => {
      console.log('created', createdBook);
      this.book = new Book();

      form.reset();

      this.router.navigateByUrl('/');
      // this.router.navigate(['/books', createdBook.id]);
    });

    // this.createBook.emit(this.book);

    // console.log(this.books);
  }
}
