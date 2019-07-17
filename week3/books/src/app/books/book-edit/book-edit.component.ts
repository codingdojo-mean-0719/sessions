import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

import { BookService } from '../../services';
import { Book } from '../../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {
  book: Book;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly bookService: BookService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('bookId')),
        switchMap(id => this.bookService.getBook(id))
      )
      .subscribe(book => (this.book = book));
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    const { value: book }: { value: Book } = form;

    this.bookService.updateBook(book).subscribe(updatedBook => {
      console.log('updated book', updatedBook);

      this.router.navigateByUrl('books');
    });
  }
}
