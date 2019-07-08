const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

const names = ['Sally', 'Jason', "George"];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (request, response) {
  // console.log(request);

  response.render('index');
});

app.post('/names', function (request, response) {
  
  const firstName = request.body.firstName;
  
  console.log(firstName);

  names.push(firstName);

  // response.render('names', { name: firstName, names });

  response.redirect('/');
});

app.get('/names/:name_id', function (request, response) {
  console.log(request.params.name_id);
  response.send(names[request.params.name_id]);
})

app.listen(port, () => console.log(`Express server listening on port ${port}`));