import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { BOOKS } from '../data';

import { Book } from '../models';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';

  constructor(private readonly http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.base}/${id}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.base}/${book.id}`, book);
  }

  removeBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${id}`);
  }
}
