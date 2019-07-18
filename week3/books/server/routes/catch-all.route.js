const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
  console.log('catching route' + request.url);
  response.sendFile(path.join(__dirname, '../../dist/books/index.html'));
});

module.exports = router;
