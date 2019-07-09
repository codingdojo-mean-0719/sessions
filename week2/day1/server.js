const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

const logger = require('./server/middleware/logger');


console.log(logger);

const names = ['Sally', 'Jason', "George"];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function (request, response, next) {
  console.log(request.body);

  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);


function isLoggedIn(request, response, next) {
  const loggedIn = true;

  if (!loggedIn) {
    return next(new Error(`You must be logged in`));
  }

  next();
}

app.get('/', function (request, response) {
  // console.log(request);

  response.render('index');
});

app.post('/names', [isLoggedIn], function (request, response) {
  
  const firstName = request.body.firstName;
  
  console.log(firstName);

  names.push(firstName);

  response.render('names', { name: firstName, names });

  // response.redirect('/');
});

app.get('/names/:name_id', function (request, response) {
  console.log(request.params.name_id);
  response.send(names[request.params.name_id]);
});


app.use(function (error, request, response, next) {
  console.log('this is aan error', error.message);

  response.redirect('/');
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));