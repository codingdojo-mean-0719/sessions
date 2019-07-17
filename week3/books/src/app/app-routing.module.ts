import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import * as fromBooks from './books';

const routes: Routes = [
  {
    path: '',
    component: fromBooks.BookListComponent,
  },
  {
    path: 'books/new',
    component: fromBooks.BookNewComponent,
  },
  {
    path: 'books/:bookId',
    component: fromBooks.BookDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
