const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Routes
const indexRouter = require('./routes/index');

// Create a new express app
const app = express();

//Specify our paths and the view engine we use
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// use bodyparser to parse url body
app.use(bodyParser.urlencoded({ extended: true }));

// Whenever we get a request on the form '/whatever' it should use the routes file to redirect
app.use('/', indexRouter);


//Export our app to use it in other files (like in start.js)
module.exports = app;