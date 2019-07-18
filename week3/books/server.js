const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const {
  env: { PORT: port = 8000 },
} = process;
const app = express();

require('./server/config/database');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist/books')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser('aldfkgjasldkjfaslkdjf'));
app.use(
  session({
    saveUninitialized: true,
    secret: ';aldfkfgn;laskdjfgn;ldsfjkgnlsdkjfgn',
    resave: false,
    name: 'session',
    rolling: true,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 36000000,
    },
  })
);

app.use(require('./server/routes'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));
