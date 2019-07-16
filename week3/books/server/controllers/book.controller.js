const Book = require('mongoose').model('Book');

const { Http } = require('@status/codes');

// const Book = require('../models/book.model');

module.exports = {
  // all of a resource (books)
  index(request, response) {
    console.log('books index');
    Book.find({})
      .then(books => response.json(books))
      .catch(error => response.status(Http.InternalServerError).json(error));
  },
  // create a resource (book)
  create(request, response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  // show a single resource (book)
  show(request, response) {
    const { book_id: bookId } = request.params;

    Book.findById(bookId)
      .then(book => response.json(book))
      .catch(error => response.status(Http.ImATeapot).json(error));
  },

  // update a sngle resource (book)
  update(request, response) {
    const { book_id: bookId } = request.params;

    Book.findByIdAndUpdate(bookId, request.body, { new: true })
      .then(book => response.json(book))
      .catch(error => response.status(Http.FailedDependency).json(error));
  },

  // delete/remove a single resource (book)
  destroy(request, response) {
    const { book_id: bookId } = request.params;

    Book.findByIdAndDelete(bookId)
      .then(book => response.json(book))
      .catch(error => response.status(Http.NotAcceptable).json(error));
  },
};
