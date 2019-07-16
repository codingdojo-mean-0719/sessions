const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'provide a book title'],
      trim: true,
    },
    pages: {
      type: Number,
      required: true,
      min: [1, 'more pages please'],
    },
    publisher: String,
    year: Number,
    author: {
      type: String,
      required: [true, 'provide an author'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Book', BookSchema);
