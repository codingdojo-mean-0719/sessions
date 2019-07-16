const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
// /filesystem/books/server/config/../models
const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/books', { useNewUrlParser: true });

mongoose.connection.on('connected', () => console.log('connected to mongodb'));

// someModel.js.bak

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));
