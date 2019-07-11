const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');


// const port = process.env.PORT || 8000;
const { env: { PORT: port = 8000 } } = process;
const { Schema } = mongoose;
const app = express();

mongoose.connect('mongodb://localhost/books_and_authors', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));




const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'supply a title'],
    trim: true,
  },
  pages: {
    type: Number,
    required: [true, 'must have pages'],
    min: [1, 'supply more than one page']
  },
  publisher: String,
  year: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  }
});
const AuthorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    minlength: [2, 'name must be longer than 2'],
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 5
  },
  isAlive: {
    type: Boolean,
    default: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  ]
});

const Author = mongoose.model('Author', AuthorSchema);
const Book = mongoose.model('Book', BookSchema);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (_request, response) {
  response.render('index');
});

app.get('/authors', function (_request, response) {
  Author.find({})
    .populate('books')
    .then(authors => {
      console.log(authors)
      response.render('authors/index', { authors })
    })
    .catch(console.log)
});

app.get('/authors/new', function (_request, response) {
  response.render('authors/new');
});

app.post('/authors', function (request, response) {
  console.log(request.body);

  Author.create(request.body)
    .then(author => {
      console.log(author)
      response.redirect('/authors')
    })
    .catch(error => {
      const errors = Object.keys(error.errors).map(key => error.errors[key].message);

      response.render('authors/new', { errors });
    });

});

app.get('/books', function (request, response) {
  Book.find({})
    .populate('author')
    .then(books => response.render('books/index', { books }))
    .catch(console.log);
});

app.get('/books/new', function (request, response) {
  Author.find({})
    .then(authors => response.render('books/new', { authors }))
    .catch(console.log);
});

app.post('/books', function (request, response) {
  Book.create(request.body)
    .then(book => {
      console.log(book);
      return Author.findById(book.author)
        .then(author => {
          author.books.push(book);

          return author.save();
        })
        .then(() => response.redirect('/books'));
    })
    .catch(console.log);
})

app.listen(port, () => console.log(`express serverlistening on port ${port}`));