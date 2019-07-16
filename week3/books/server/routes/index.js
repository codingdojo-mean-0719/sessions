const router = require('express').Router();

const bookRouter = require('./book.route');

module.exports = router.use('/books', bookRouter);
