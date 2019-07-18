const router = require('express').Router();
const apiRouter = require('express').Router();

const authRouter = require('./auth.route');
const bookRouter = require('./book.route');
const catchAll = require('./catch-all.route');

router.use('/auth', authRouter).use('/books', bookRouter);

module.exports = apiRouter.use('/api', router).use(catchAll);
